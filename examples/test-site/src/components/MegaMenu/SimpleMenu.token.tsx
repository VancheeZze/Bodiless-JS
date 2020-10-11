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
import { withDesign, addClasses } from '@bodiless/fclasses';

/**
 * Base Menu Styles
 * ===========================================
 */
const withBaseMenuStyles = withDesign({
  Wrapper: addClasses('w-full bg-teal-600 text-white'),
  Item: addClasses('py-1 px-3 hover:bg-teal-500 min-w-100 leading-loose text-sm'),
});

/**
 * Base Sub Menu Styles
 * ===========================================
 */
const withBaseSubMenuStyles = withDesign({
  Wrapper: withDesign({
    List: addClasses('bg-teal-600 text-white my-1 z-10'),
  }),
  Item: addClasses('py-1 px-3 hover:bg-teal-500 min-w-100 leading-loose text-sm'),
});

/**
 * Simple Sub Menu Styles
 * ===========================================
 */
const asSimpleSubMenu = flow(
  withBaseSubMenuStyles,
);

const asSimpleSubMenuStyles = withDesign({
  SubMenu: asSimpleSubMenu,
});

/**
 * Simple Menu Styles
 * ===========================================
 */
const withSimpleMenuStyles = flow(
  withDesign({
    Item: asSimpleSubMenuStyles,
  }),
  withBaseMenuStyles,
);

export default withSimpleMenuStyles;
export {
  asSimpleSubMenu,
  withBaseMenuStyles,
  withBaseSubMenuStyles,
};