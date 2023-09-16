/* eslint-disable react/display-name */
import { Suspense } from 'react';
import LoadingScreen from './LoadingScreen.jsx';

export const Loading = (Component) => (props) => {
    return (
      <Suspense fallback={<LoadingScreen  />}>
        <Component {...props} />
      </Suspense>
    );
  };