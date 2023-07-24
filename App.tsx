import * as React from 'react';
import {store} from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import Navigator from './src/navigation/navigator';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
