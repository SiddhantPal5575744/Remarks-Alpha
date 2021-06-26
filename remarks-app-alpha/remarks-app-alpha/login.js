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

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
  }

  alerter() {
    alert('Your email account has been jammed ');
  }

  enter() {
    alert('Please enter a value');
  }

  goToWarning=()=>{
  this.props.navigation.navigate('Warning');
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: 'rgba(3, 58, 156,1)' }}>
          <Header
            backgroundColor={'rgba(55, 72, 102,1)'}
            centerComponent={{
              text: 'Remarks  Alpha',
              style: {
                color: 'rgba(0, 255, 255,1)',
                fontSize: 20,
                fontFamily: 'algerian',
              },
            }}
          />

          <TextInput
            style={styles.inputBox}
            placeholder="Enter your email ID"
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
             value={this.state.email}
          />

          <TextInput
            style={styles.inputBox}
            placeholder="Verify your password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            
            }}
              value={this.state.password}
          />
          <TouchableOpacity 
            style={styles.goButton}
            onPress={
             this.goToWarning
            }>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>      
    );
  }
}

const styles = StyleSheet.create({
  goButton: {
    backgroundColor: 'rgba(0, 255, 255,1)',
    width: 100,
    height: 50,
    borderRadius: 20,
    marginLeft: 120,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
  },

  buttonText: {
    fontFamily: 'algerian',
  },

  inputBox: {
    marginTop: 10,
    marginLeft: 20,

    width: '50%',
    alignSelf: 'center',
    height: 35,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
    backgroundColor: 'cyan',
    borderColor: 'yellow',
  },
});
