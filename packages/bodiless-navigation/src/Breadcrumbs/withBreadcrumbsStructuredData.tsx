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
import React, { ComponentType } from 'react';
import path from 'path';
import { Helmet } from 'react-helmet';

import { useBreadcrumbStore } from './BreadcrumbStoreProvider';
import type { BreadcrumbsProps } from './types';

// We need a full url in the breadcrumbs LD item.
const generateUrl = (url: string) => (
  typeof window !== 'undefined'
    ? path.join(window.location.hostname, url)
    : url
);

const withBreadcrumbsSD = (Component: ComponentType<BreadcrumbsProps>) => (
  props: BreadcrumbsProps,
) => {
  const store = useBreadcrumbStore();
  const breadcrumbItems = store
    ? store.breadcrumbTrail.map((item, index) => ({
      '@type': 'ListItem',
      // We increment in 1 to accomodate for the index offset ( starts from 0 )
      position: index + 1,
      name: item.title.data,
      ...item.link.data ? { item: generateUrl(item.link.data) } : {},
    }))
    : [];

  const breadcrumbsSDHeader = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [...breadcrumbItems],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsSDHeader)}
        </script>
      </Helmet>
      <Component {...props} />
    </>
  );
};

export default withBreadcrumbsSD;
