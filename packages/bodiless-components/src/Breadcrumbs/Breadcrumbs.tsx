/**
 * Copyright © 2020 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ComponentType, HTMLProps } from 'react';
import { useNode } from '@bodiless/core';
import type { WithNodeKeyProps, WithNodeProps } from '@bodiless/core';
import { asComponent, designable, addProps } from '@bodiless/fclasses';
import type { DesignableComponentsProps } from '@bodiless/fclasses';
import { observer } from 'mobx-react-lite';
import { flowRight } from 'lodash';
import type { BreadcrumbItemType as BreadcrumbStoreItemType } from './BreadcrumbStore';
import { useBreadcrumbStore } from './BreadcrumbStoreProvider';

type BreadcrumbsComponents = {
  StartingTrail: ComponentType<HTMLProps<HTMLSpanElement>>,
  Separator: ComponentType<HTMLProps<HTMLSpanElement>>,
  BreadcrumbWrapper: ComponentType<HTMLProps<HTMLUListElement>>,
  BreadcrumbItem: ComponentType<HTMLProps<HTMLLIElement>>,
  BreadcrumbLink: ComponentType<HTMLProps<HTMLAnchorElement> & WithNodeKeyProps>,
  BreadcrumbTitle: ComponentType<HTMLProps<HTMLSpanElement> & WithNodeKeyProps>,
  FinalTrail: ComponentType<HTMLProps<HTMLSpanElement>>,
};

type BreadcrumbItemKeys = {
  uuid: string | number;
  title: WithNodeProps;
  link: WithNodeProps;
};

/**
 * contains breadcrumb item public properties
*/
type BreadcrumbItemType = Pick<BreadcrumbStoreItemType, 'uuid' | 'title' | 'link' | 'isFirst' | 'hasPath'>;

/**
 * reduces items retrieved from breadcrumb store
 *
 * @param items - a list of items retrieved from store
 * @param props - props passed to breadcrumb component
 *
 * @returns uuids - a collection of breadcrumb item uuids
 */
type BreadcrumbStoreItemsReducer = (
  items: BreadcrumbItemType[],
  props?: Pick<BreadcrumbsProps, 'hasStartingTrail' | 'hasFinalTrail'>,
) => string[];

type BreadcrumbsProps = DesignableComponentsProps<BreadcrumbsComponents> & {
  hasStartingTrail?: boolean | (() => boolean),
  items?: BreadcrumbItemKeys[],
  hasFinalTrail?: boolean | (() => boolean),
  itemsReducer?: BreadcrumbStoreItemsReducer,
} & { };

/**
 * removes first item from the trail
 * when there is a custom starting trail and
 * when the first store item has frontpage path
 *
 * @param items - breadcrumb store items
 * @param props - breadcrumb component props
 *
 * @returns uuids - a list of item uuids
 */
const firstItemHomeLinkReducer = (
  items: BreadcrumbItemType[],
  { hasStartingTrail }: Pick<BreadcrumbsProps, 'hasStartingTrail' | 'hasFinalTrail'>,
) => items
  .filter(item => !(hasStartingTrail && item.isFirst() && item.hasPath('/')))
  .map(item => item.uuid);

type CleanBreadcrumbsProps = Omit<BreadcrumbsProps, 'itemsReducer'>;
const BreadcrumbsClean$ = (props: CleanBreadcrumbsProps) => {
  const {
    hasStartingTrail = false,
    components,
    items = [],
    hasFinalTrail = false,
  } = props;
  const hasStartingTrail$ = typeof hasStartingTrail === 'function' ? hasStartingTrail() : hasStartingTrail;
  const hasFinalTrail$ = typeof hasFinalTrail === 'function' ? hasFinalTrail() : hasFinalTrail;
  const {
    StartingTrail,
    Separator,
    BreadcrumbWrapper,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbTitle,
    FinalTrail,
  } = components;
  const items$ = items.map((item: BreadcrumbItemKeys, index: number) => {
    const isLastItem = index === (items.length - 1);
    // when there is no final trail item
    // render the last breadcrumb item without link
    if (isLastItem && !hasFinalTrail$) {
      return (
        <React.Fragment key={item.uuid}>
          <BreadcrumbItem>
            <BreadcrumbTitle
              nodeKey={item.title.nodeKey}
              nodeCollection={item.title.nodeCollection}
            />
          </BreadcrumbItem>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={item.uuid}>
        <BreadcrumbItem>
          <BreadcrumbLink nodeKey={item.link.nodeKey} nodeCollection={item.link.nodeCollection}>
            <BreadcrumbTitle
              nodeKey={item.title.nodeKey}
              nodeCollection={item.title.nodeCollection}
            />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {!isLastItem && <Separator key={`separator${item.uuid}`} />}
      </React.Fragment>
    );
  });
  return (
    <BreadcrumbWrapper>
      { hasStartingTrail$
        && (
        <>
          <BreadcrumbItem key="startingTrail">
            <StartingTrail />
          </BreadcrumbItem>
          { (items$.length > 0 || hasFinalTrail$)
            && <Separator key="startingTrailSeparator" />}
        </>
        )}
      {items$}
      { hasFinalTrail$
        && (
        <>
          { items$.length > 0
            && <Separator key="finalTrailSeparator" />}
          <BreadcrumbItem key="finalTrail">
            <FinalTrail />
          </BreadcrumbItem>
        </>
        )}
    </BreadcrumbWrapper>
  );
};

const BreadcrumbStartComponents: BreadcrumbsComponents = {
  StartingTrail: asComponent('span'),
  Separator: asComponent('span'),
  BreadcrumbWrapper: asComponent('ul'),
  BreadcrumbItem: asComponent('li'),
  BreadcrumbLink: asComponent('a'),
  BreadcrumbTitle: asComponent('span'),
  FinalTrail: asComponent('span'),
};

/**
 * Clean component that renders breadcrumbs.
 * @see BreadcrumbsComponents for a list of design components.
 */
const BreadcrumbsClean = designable(BreadcrumbStartComponents)(BreadcrumbsClean$);

/**
 * HOC that populates a breadcrumb based component with data from breadcrumb store.
 * @param Component a breadcrumb based component
 */
// eslint-disable-next-line max-len
const withBreadcrumbItemsFromStore = (Component: ComponentType<BreadcrumbsProps & WithNodeProps>) => {
  const WithBreadcrumbItemsFromStore = (props: BreadcrumbsProps & WithNodeProps) => {
    const {
      nodeCollection,
      hasStartingTrail = false,
      hasFinalTrail = false,
      itemsReducer = firstItemHomeLinkReducer,
      ...rest
    } = props;
    const store = useBreadcrumbStore();
    if (store === undefined) return <Component {...props} />;
    const { node } = useNode(nodeCollection);
    const basePath = node.path;
    const items = itemsReducer(store.breadcrumbTrail, { hasStartingTrail, hasFinalTrail })
      .map(uuid => store.getItem(uuid))
      // map items retrieved from store
      // into items expected by base breadcrumb component
      /* eslint-disable @typescript-eslint/indent */
      // eslint throws an indentation error for lines inside reduce body
      // automatic eslint fix brings code to unreadable state
      // probably that is an eslint plugin issue
      // the disabled rule is enabled back after reduce
      .reduce<BreadcrumbItemKeys[]>(
        (prev, current) => {
          if (current === undefined) return prev;
          const linkNodePath = current.link.nodePath.replace(`${basePath}$`, '');
          const titleNodePath = current.title.nodePath.replace(`${basePath}$`, '');
          prev.push({
            uuid: current.uuid,
            link: {
              nodeKey: linkNodePath,
              nodeCollection,
            },
            title: {
              nodeKey: titleNodePath,
              nodeCollection,
            },
          });
          return prev;
        }, [],
      );
    /* eslint-enable @typescript-eslint/indent */
    const hasFinalTrail$0 = typeof hasFinalTrail === 'function' ? hasFinalTrail() : hasFinalTrail;
    const hasFinalTrail$1 = hasFinalTrail$0 && !store.hasLastItem();
    const props$1 = {
      ...rest,
      items,
      hasFinalTrail: hasFinalTrail$1,
      hasStartingTrail,
    };
    return <Component {...props$1} />;
  };
  return WithBreadcrumbItemsFromStore;
};

/**
 * HOC that enables rendering of starting trail for a breadcrumb based component.
 * @param Component a breadcrumb based component
 */
const withStartingTrail = addProps({
  hasStartingTrail: true,
});

/**
 * HOC that disables rendering of starting trail for a breadcrumb based component.
 * @param Component a breadcrumb based component
 */
const withoutStartingTrail = addProps({
  hasStartingTrail: false,
});

/**
 * HOC that enables rendering of final trail for a breadcrumb based component.
 * @param Component a breadcrumb based component
 */
const withFinalTrail = addProps({
  hasFinalTrail: true,
});

/**
 * HOC that disables rendering of final trail for a breadcrumb based component.
 * @param Component a breadcrumb based component
 */
const withoutFinalTrail = addProps({
  hasFinalTrail: false,
});

/**
 * Component that renders breadcrumb items retrieved from breadcrumb store.
 */
const Breadcrumbs = flowRight(
  observer,
  withBreadcrumbItemsFromStore,
)(BreadcrumbsClean);

export {
  BreadcrumbsClean,
  Breadcrumbs,
  withStartingTrail as withBreadcrumbStartingTrail,
  withoutStartingTrail as withoutBreadcrumbStartingTrail,
  withFinalTrail as withBreadcrumbFinalTrail,
  withoutFinalTrail as withoutBreadcrumbFinalTrail,
};

export type {
  BreadcrumbStoreItemsReducer,
};
