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
import { asStatic } from '@bodiless/core';
import { withBurgerMenuWrapper, BurgerMenuDefaultToggler } from '@bodiless/navigation';

import { $asSiteBurgerMenu, withBurgerMenuTogglerStyles } from './BurgerMenu.token';
import { BodilessMenuBase } from './Menu';

const BodilessBurgerMenuToggler = flow(
  withBurgerMenuTogglerStyles,
)(BurgerMenuDefaultToggler);

const BodilessBurgerMenu = flow(
  withBurgerMenuWrapper,
  $asSiteBurgerMenu,
  asStatic,
)(BodilessMenuBase);

export default BodilessBurgerMenu;
export {
  BodilessBurgerMenuToggler,
};
