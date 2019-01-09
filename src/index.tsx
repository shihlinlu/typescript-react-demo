import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from '@containers/HelloContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from '@reducers/helloReducer';
import { EnthusiasmAction } from '@actions/helloActions';
import { StoreState } from 'types/index';

import './index.css';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
