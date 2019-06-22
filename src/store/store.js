import { createStore } from 'redux';
import SlackReducer from './store/SlackReducer';

const store = createStore(SlackReducer);

export default store;
