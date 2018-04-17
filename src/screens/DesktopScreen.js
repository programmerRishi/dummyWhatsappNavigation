import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class DesktopScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          DesktopScreen
        </Text>
        <Icon name='heartbeat' color='red' type='font-awesome' />
      </View>
          );
        }
      }
const styles = {
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      };
export { DesktopScreen };
