/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


// const Appredux=()=>
// (
//     <Provider store={store}>
//       <App />
//     </Provider>
// )

AppRegistry.registerComponent(appName, () => App);
