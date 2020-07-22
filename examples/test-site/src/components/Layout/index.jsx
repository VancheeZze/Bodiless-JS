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
import { flow, flowRight } from 'lodash';
import Helmet from 'react-helmet';
import { flowRight } from 'lodash';
import { StaticQuery, graphql } from 'gatsby';
import { Div } from '@bodiless/fclasses';
import {
  withMeta,
  withMetaStatic,
  withMetaHtml,
  asBodilessHelmet,
  withEvent,
  withMetaForm,
} from '@bodiless/components';
import Header from './header';
import Footer from './footer';
import { asPageContainer, asYMargin } from '../Elements.token';

const withMetaTitle = withMeta({
  name: 'title',
  type: 'text',
  label: 'Title',
});

const withMetaDescription = withMeta({
  name: 'description',
  type: 'textarea',
  label: 'Description',
});

const withMetaPageType = withMeta({
  name: 'pagetype',
  type: 'text',
  label: 'Page type',
});

const useGetMenuOptions = () => () => [
  {
    name: 'seo',
    icon: 'category',
    label: 'SEO',
  },
];

const seoFormHeader = {
  title: 'SEO Data Management',
  description: `Enter the page level data used for SEO. 
  This is metadata needed for SEO that will go in the page header.`,
};

const ExampleHelmet = flowRight(
  withMetaForm(useGetMenuOptions, seoFormHeader),
  asBodilessHelmet('meta'),
  withMetaTitle('page-title', 'Rec 30-65 char'),
  withMetaDescription('description', 'Rec < 160 char'),
  withMetaPageType('page-type'),
  withMetaStatic('bl-brand', 'brand', 'site'),
  withMetaStatic('bl-country', 'country', 'site'),
  withMetaHtml('en'),
)(Helmet);

const ExampleGTMHelmetEvent = flowRight(
  asBodilessHelmet('datalayer'),
  withEvent(
    'digitalData',
    {
      event: 'Page Loaded',
      page: {
        country: 'US',
        language: 'EN',
        hostname: 'bodilessjs.com',
      },
    },
    'page-loaded',
  ),
)(Helmet);

const Container = flow(
  asPageContainer,
  asYMargin,
)(Div);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            logo
          }
        }
      }
    `}
    render={data => (
      <>
        <ExampleHelmet />
        <ExampleGTMHelmetEvent />
        <Header siteLogo={data.site.siteMetadata.logo} />
        <Container>{children}</Container>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
);

export default Layout;
