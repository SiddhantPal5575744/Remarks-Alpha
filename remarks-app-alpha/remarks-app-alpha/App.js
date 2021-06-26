import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Warning from './warning';
import Login from './login';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Login: Login,
  Warning: Warning,
});

const AppContainer = createAppContainer(AppNavigator);
