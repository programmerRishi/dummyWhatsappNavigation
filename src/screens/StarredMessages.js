import React, { Component } from 'react';
import { View, Text } from 'react-native';

class StarredMessages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          StarredMessages
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
export { StarredMessages };
