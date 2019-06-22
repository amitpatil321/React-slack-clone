import { createStore } from 'redux';
import SlackReducer from './SlackReducer';

const store = createStore(SlackReducer);

export default store;
