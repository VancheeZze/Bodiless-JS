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

import { flow } from 'lodash';
import {
  Token, HOC, Design, withDesign, asToken,
} from '@bodiless/fclasses';
import {
  asStylableList, asStylableSubList, asSubList, withDeleteNodeOnUnwrap,
  withSubLists, UseListOverrides,
} from '@bodiless/components';

import { asBreadcrumbSource, asMenuTitle, asMenuTout } from './MenuTitles';

/**
 * Creates a stylable sublist which deletes it's data when the last item is removed.
 * Suitable for use for all menus.
 *
 * @param titleDesign token which will be applied to the sublist title.
 * @param useOverrides optional hook returning overrides for the submenu button.
 */
const asMenuSubList = (
  withTitleDesign: HOC | Token,
  useOverrides: UseListOverrides = () => ({}),
) => flow(
  asSubList((props) => ({ groupLabel: 'Sub-Menu Item', ...useOverrides(props) })),
  asStylableList,
  asStylableSubList,
  withDeleteNodeOnUnwrap('sublist'),
  asBreadcrumbSource,
  withDesign({
    Title: withTitleDesign,
  }),
);

const withSubMenuDesign = (design: Design<any>) => withDesign({
  Item: withDesign(design),
});

/**
 * Helper which can be used to add a List submenu option to the menu.
 *
 * @param withTitleDesign optional token which will be applied to the sublist title.
 *
 */
const withListSubMenu = (withTitleDesign?: HOC | Token) => withSubMenuDesign({
  List: asMenuSubList(
    asToken(asMenuTitle, withTitleDesign),
  ),
});

/**
 * Helper which can be used to add a Touts submenu option to the menu.
 *
 * @param withTitleDesign optional token which will be applied to the sublist title.
 *
 */
const withToutSubMenu = (withTitleDesign?: HOC | Token) => withSubMenuDesign({
  Touts: asMenuSubList(
    asToken(asMenuTout, withTitleDesign),
  ),
});

/**
 * Helper which can be used to add a Columns submenu option to the menu.
 *
 * @param withTitleDesign optional token which will be applied to the sublist title.
 *
 */
const withColumnSubMenu = (withTitleDesign?: HOC | Token) => withSubMenuDesign({
  Columns: asToken(
    asMenuSubList(
      asToken(asMenuTitle, withTitleDesign),
    ),
    withSubLists(1)(
      asMenuSubList(
        asToken(asMenuTitle, withTitleDesign),
        () => ({ groupLabel: 'Column Sub-Menu Item' }),
      ),
    ),
  ),
});

export {
  withListSubMenu,
  withToutSubMenu,
  withColumnSubMenu,
  withSubMenuDesign,
};
