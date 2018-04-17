import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Menu extends Component {
  render() {
    console.log(this.props);
    if (this.props.show) {
      return (
        <View style={styles.container}>
          <Text>
            Menu
          </Text>
        </View>
      );
    }
    return null;
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

export default Menu;
