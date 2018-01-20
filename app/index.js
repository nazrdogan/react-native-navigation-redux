import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";
import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import * as reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';



Navigation.registerComponent('Screen1', () => Screen1, store, Provider);
Navigation.registerComponent('Screen2', () => Screen2, store, Provider);
Navigation.registerComponent('Screen3', () => Screen3, store, Provider);
Navigation.registerComponent('Screen4', () => Screen4, store, Provider);
Navigation.registerComponent('Tab1Screen', () => Tab1Screen, store, Provider);
Navigation.registerComponent('Tab2Screen', () => Tab2Screen, store, Provider);



export default class App extends Component {

  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch({ type: "ROOT_CHANGED", payload: "login" });
  }

  onStoreUpdate() {
    let { root } = store.getState().app;
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
    switch (root) {
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Screen1', // unique ID registered with Navigation.registerScreen
            title: 'Welcome', // title of the screen as appears in the nav bar (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
          },
        });
        return;

      case 'after-login':
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: 'Home',
              screen: 'Tab1Screen',
              title: 'Hey',
              overrideBackPress: false,
              navigatorStyle: {}
            },

            {
              label: 'Search',
              screen: 'Tab2Screen',

              title: 'Hey',
              navigatorStyle: {}
            }

          ],
        });
        return;

      default:
        console.log("Not Root Found");
    }
  }
}