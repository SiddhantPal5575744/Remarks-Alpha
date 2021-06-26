import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';

export default class Warning extends React.Component {
  //   warn(){
  // alert('Your Password has leaked to an unauthorised breach')
  //   }

  handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://youtu.be/4EoAHdwGBvU');
  };

  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            backgroundColor={'red'}
            centerComponent={{
              text: 'WARNING',
              style: {
                color: 'yellow',
                fontSize: 30,
                fontWeight: 'bold',
              },
            }}
          />
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            Virus Defender Alert:
          </Text>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            Error Code # 0x000314CE
          </Text>

          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            Please do not shut down yor device
          </Text>

          <Text
            style={{
              color: 'red',
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            (2)Virus has been detected on your device
          </Text>

          <Text
            style={{
              color: 'red',
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 15,
            }}>
            Your device has been severely damaged by (2)Virus.Take immediate
            action before the damage is permanent.
          </Text>

          <Text
            style={{
              color: 'red', 
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 50,
            }}>
            Click Here To Scan Your Device
          </Text>
        <Button
          title="Scan"
          onPress={this.handleOpenWithWebBrowser}
          
        />
        </View>
      </SafeAreaProvider>
    );
  }
}
