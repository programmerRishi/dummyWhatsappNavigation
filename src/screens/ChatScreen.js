import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';

class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          ChatScreen
        </Text>
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
export { ChatScreen };
