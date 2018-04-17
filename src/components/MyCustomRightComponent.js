import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import * as actions from '../../redux/actions';

class MyCustomRightComponent extends Component {
  render() {
    return (
        <TouchableOpacity onPress={this.props.showSideBar}>
            <View style={styles.containerStyle}>
              <Icon
              name='ellipsis-v'
              type='font-awesome'
              size={20}
              color='#fff'
              />
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
    paddingLeft: 15,
    // borderWidth: 2,
    width: 25
  }
};

export default connect(null, actions)(MyCustomRightComponent);
