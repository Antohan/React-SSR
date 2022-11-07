/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import Html from '../Html';
import Spinner from '../Spinner';
import Content from "../Content";
import Error from '../Error';

export default function App({assets}) {
  return (
    <Html assets={assets} title="Hello">
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={Error}>
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}
