import { createStore } from 'react-hooks-global-state';
import reducer, { INITIAL_STATE } from './reducer';

const { GlobalStateProvider, useGlobalState, dispatch } = createStore(reducer, INITIAL_STATE);

export { GlobalStateProvider, useGlobalState, dispatch };