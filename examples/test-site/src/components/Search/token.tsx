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

import React from 'react';
import {
  I,
  addClasses,
  withDesign,
  addClassesIf,
  asToken,
  Design,
} from '@bodiless/fclasses';
import { withChild } from '@bodiless/core';
import { asPageContainer, asDesktopOnly, asTextWhite } from '../Elements.token';

const Icon = asToken(
  addClasses('material-icons cursor-pointer align-middle bg-white text-gray-500'),
)(I);

const withIcon = (icon: string) => withChild(
  () => <Icon>{icon}</Icon>,
  'Icon',
);

const isEven = (item: number) => item % 2 === 0;
const isOdd = (item: number) => item % 2 === 1;

const withSuggestionsBorder = addClasses('border border-black');
const withSuggestionItemStyles = withDesign({
  Wrapper: asToken(
    addClasses('hover:text-white hover:bg-teal-400'),
    addClassesIf(({ position }: any) => isEven(position))('bg-white'),
    addClassesIf(({ position }: any) => isOdd(position))('bg-teal-200'),
  ),
});
const withSearchInputOutline = addClasses('outline-none focus:outline-black');

const withSuggestionsDefaultDesign = withDesign({
  Wrapper: asToken(
    addClasses('absolute top-full z-50 w-full'),
    withSuggestionsBorder,
  ),
  Item: asToken(
    withSuggestionItemStyles,
    withDesign({
      Wrapper: asToken(
        addClasses('flex px-2'),
      ),
      Count: addClasses('ml-auto mr-1'),
    }),
  ),
});

const searchDesign: Design = {
  SearchWrapper: asToken(
    asDesktopOnly,
    addClasses('my-4 border border-black align-middle relative'),
  ),
  SearchInput: asToken(
    withSearchInputOutline,
    addClasses('px-2 align-middle text-1xl'),
  ),
  SearchButton: withIcon('search'),
  Suggestions: withSuggestionsDefaultDesign,
};

const responsiveSearchDesign = {
  Wrapper: addClasses('h-full'),
  SearchWrapper: asToken(asPageContainer, addClasses('absolute w-full p-3 flex z-10 bg-gray-700 inset-x-0')),
  SearchInput: asToken(
    withSearchInputOutline,
    addClasses('align-middle w-full p-2'),
  ),
  ToggleButton: asTextWhite,
  SearchButton: asToken(
    withIcon('search'),
    addClasses('flex absolute right-0 self-center mr-4'),
  ),
  Suggestions: asToken(
    withSuggestionsDefaultDesign,
    withDesign({
      Wrapper: addClasses('-my-3 left-0 px-3'),
    }),
  ),
};

const searchInlineDesign = {
  SearchWrapper: addClasses('inline-flex border border-black align-middle border-gray-500 relative'),
  SearchInput: asToken(
    withSearchInputOutline,
    addClasses('px-2 align-middle text-1xl'),
  ),
  SearchButton: withIcon('search'),
  Suggestions: withSuggestionsDefaultDesign,
};

const asSimpleSearch = withDesign(searchDesign);
const asInlineSearch = withDesign(searchInlineDesign);
const asResponsiveSearch = withDesign(responsiveSearchDesign);

const searchResultDesign = {
  SearchResultWrapper: addClasses('py-2'),
  SearchResultList: addClasses('py-2'),
  SearchResultSummary: addClasses('text-sm italic'),
  SearchResultListItem: withDesign({
    ItemAnchor: addClasses('my-4 text-blue-500 underline'),
    ItemParagraph: addClasses('text-sm'),
    ItemList: addClasses('my-4'),
  }),
};

const asSimpleSearchResult = withDesign(searchResultDesign);

export {
  asSimpleSearch,
  asInlineSearch,
  asSimpleSearchResult,
  asResponsiveSearch,
};
