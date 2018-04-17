import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import * as actions from '../../redux/actions';

class MyCustomLeftComponent extends Component {
  render() {
    const headerText = 'WhatsApp';
    return (
      <View style={styles.viewStyle}>
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.headerTextStyle}>{headerText}</Text>
            </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
};

export default connect(null, actions)(MyCustomLeftComponent);
