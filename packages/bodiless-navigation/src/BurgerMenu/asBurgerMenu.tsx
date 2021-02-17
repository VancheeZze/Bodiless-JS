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

import React, { FC, ComponentType, HTMLProps } from 'react';
import { useNode } from '@bodiless/core';
import { asAccordionWrapper, asAccodionTitle, asAccordionBody } from '@bodiless/organisms';
import {
  A, Fragment, withDesign, replaceWith, asToken,
} from '@bodiless/fclasses';
import BurgerMenuClean from './BurgerMenuClean';

import { withColumnSubMenuDesign } from '../withSubMenu';
import { withSubMenuToken } from '../token';

type OverviewItem = {
  overview: JSX.Element,
};

type WithOverviewLink = {
  OverviewLink: ComponentType<HTMLProps<HTMLAnchorElement>>
};

const DefaultOverviewLink: ComponentType<HTMLProps<HTMLAnchorElement>> = (props) => (
  <A {...props}>Overview</A>
);

const asBurgerMenuOverviewLink = <P extends object>(Item: ComponentType<P>) => {
  const ItemWithOverview: ComponentType<P & WithOverviewLink> = ({
    OverviewLink = DefaultOverviewLink,
    ...rest
  }) => {
    const { node } = useNode();
    const linkNode = node.child<{ href: string }>('link');
    const overview = <li><OverviewLink href={linkNode.data.href} /></li>;
    const overviewProps = linkNode.data.href ? { overview } : undefined;

    return (
      <Item {...overviewProps} {...rest as P} />
    );
  };

  return ItemWithOverview;
};

const withOverlayLinkAccordion = <P extends object>(Component: ComponentType<P>) => {
  const WithOverlayLinkAccordion: FC<P & OverviewItem> = ({ children, overview, ...rest }) => (
    <Component {...rest as P}>
      { overview }
      { children }
    </Component>
  );

  return asAccordionBody(WithOverlayLinkAccordion as ComponentType<P>);
};

const asBurgerMenuDesign = withDesign({
  Wrapper: withDesign({
    List: withOverlayLinkAccordion,
    Title: asAccodionTitle,
    WrapperItem: asAccordionWrapper,
  }),
  Item: asBurgerMenuOverviewLink,
});

const withBurgerMenuWrapper = <P extends object>(Component: ComponentType<P>) => asToken(
  replaceWith(BurgerMenuClean),
  withDesign({
    Menu: replaceWith(Component),
  }),
)(Fragment);

const asBurgerMenu = (...keys: string[]) => asToken(
  withSubMenuToken(...keys)(asBurgerMenuDesign),
  withSubMenuToken('Main')(asBurgerMenuDesign),
  keys.indexOf('Columns') > -1
    ? withSubMenuToken('Columns')(withColumnSubMenuDesign(asBurgerMenuDesign))
    : {},
);

export default asBurgerMenu;
export {
  withBurgerMenuWrapper,
};
