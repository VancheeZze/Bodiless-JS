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

import React, { ComponentType, useState } from 'react';
import { flow } from 'lodash';
import { useEditContext, withoutProps } from '@bodiless/core';
import {
  withDesign, addClasses, addProps, addClassesIf, removeClassesIf, stylable,
  addPropsIf,
} from '@bodiless/fclasses';
import { withSubListDesign } from '@bodiless/components';

import { useIsMenuOpen } from './withMenuContext';
/*
 * Utility Styles
 * ===========================================
 */
const isContextActive = () => {
  const { isActive, isEdit } = useEditContext();
  return isEdit && isActive;
};

const asVerticalSubMenu = withDesign({
  Wrapper: addClasses('flex-col'),
});

const asRelative = addClasses('relative');

const asExpandedOnActive = addClassesIf(isContextActive)('overflow-visible');

const asResponsiveSublist = withDesign({
  Wrapper: addClasses('min-w-full'),
});

const asToggleableSubMenu = (Component: ComponentType) => (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Component
      {...props}
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
      isSubmenuOpen={isOpen}
    />
  );
};

const useIsSubmenuOpen = ({ isSubmenuOpen }: any) => isSubmenuOpen;

const asStylableList = withDesign({
  Wrapper: stylable,
  Item: stylable,
  Title: stylable,
});

type WithAriaLabel = {
  'aria-label'?: string,
};

const asNav = <P extends WithAriaLabel>(Component: ComponentType<P>) => {
  const Nav = (props: P) => {
    const { 'aria-label': ariaLabel = 'Navigation Menu' } = props;
    return (
      <nav aria-label={ariaLabel}>
        <Component {...props} />
      </nav>
    );
  };
  return Nav;
};

/**
 * Accessibility Features
 * ===========================================
 */
const asAccessibleMenu = withDesign({
  Wrapper: flow(asNav, addProps({ role: 'menubar', 'aria-label': 'Navigation Menu' })),
  Item: addProps({ role: 'menuitem', 'aria-haspopup': false }),
});

const asAccessibleSubMenu = flow(
  withoutProps('isSubmenuOpen'),
  // Note that we use 'style' here instead of the css class name to avoid
  // issues with class specificity. For example, if `overflow-visible`
  // class is used there is a risk of it being overwritten by the site builder
  // by adding another `overflow` or `display` classes to `WrapperItem`
  // which will break the functionality. 'style' is a safer alternative
  // that will guarantee that the toggle functionality will continue to function as designed.
  addPropsIf(useIsSubmenuOpen)({ style: { overflow: 'visible' } }),
  withDesign({
    Wrapper: addProps({ role: 'menu', 'aria-label': 'Navigation Sub Menu' }),
    Title: addProps({ role: 'menuitem' }),
  }),
  asToggleableSubMenu,
);

const asAccessibleSimpleMenu = flow(
  withSubListDesign(1)({ SubMenu: asAccessibleSubMenu }),
  asAccessibleMenu,
);

/*
 * Base Menu Styles
 * ===========================================
 */
const withHoverStyles = withDesign({
  Item: flow(
    addClasses('hover:overflow-visible'),
    removeClassesIf(useIsMenuOpen)('hover:overflow-visible'),
  ),
});

const withBaseMenuStyles = flow(
  withHoverStyles,
  withDesign({
    Wrapper: addClasses('relative flex'),
    Item: addClasses('overflow-hidden'),
  }),
);

/*
 * Base Sub Menu Styles
 * ===========================================
 */
const withBaseSubMenuStyles = withDesign({
  Wrapper: addClasses('flex absolute left-0'),
});

/*
 * Simple Sub Menu Styles
 * ===========================================
 */
const asSimpleSubMenu = flow(
  asResponsiveSublist,
  asVerticalSubMenu,
  withBaseSubMenuStyles,
  asExpandedOnActive,
  asRelative,
);

/*
 * Simple Menu Sub Menu Styles
 * ===========================================
 */
const asSimpleSubMenuStyles = withDesign({
  SubMenu: asSimpleSubMenu,
});

/*
 * Simple Menu Styles
 * ===========================================
 */
const asSimpleMenuTopNav = flow(
  withDesign({
    Item: asSimpleSubMenuStyles,
  }),
  withBaseMenuStyles,
  asAccessibleSimpleMenu,
);

export default asSimpleMenuTopNav;
export {
  withBaseSubMenuStyles,
  withBaseMenuStyles,
  asSimpleSubMenu,
  asStylableList,
  asRelative,
  asAccessibleMenu,
  asAccessibleSubMenu,
  asToggleableSubMenu,
  useIsSubmenuOpen,
};
