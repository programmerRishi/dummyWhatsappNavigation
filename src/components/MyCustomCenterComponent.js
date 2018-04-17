import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class MyCustomLeftComponent extends Component {
  render() {
    return (
          <View style={styles.viewStyle}>
              <Icon name='search' size={25}color='#fff' />
          </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    paddingLeft: 160,
    paddingBottom: 8
  },
  headerTextStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
};

export default MyCustomLeftComponent;
