/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import Second from "./pages/second/second";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducer from "./redux/store/rootReducer";

let store = createStore(reducer);


Navigation.registerComponentWithRedux(`navigation.playground.WelcomeScreen`, () => App, Provider, store);

Navigation.registerComponentWithRedux("navigation.second", () => Second, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setDefaultOptions({
    topBar: {
      visible: false
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "navigation.playground.WelcomeScreen"
          }
        }]
      }
      
    }
  });
});
