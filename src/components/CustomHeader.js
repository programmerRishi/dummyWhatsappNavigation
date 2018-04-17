import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import MyCustomRightComponent from './MyCustomRightComponent';
import MyCustomCenterComponent from './MyCustomCenterComponent';
import MyCustomLeftComponent from './MyCustomLeftComponent';

class CustomHeader extends Component {
  render() {
    return (
      <Header
        outerContainerStyles={{ marginBottom: -1, height: 49.92 }}
        innerContainerStyles={{ bottom: -10 }}
        backgroundColor='#075e54'
        rightComponent={<MyCustomRightComponent />}
        centerComponent={<MyCustomCenterComponent />}
        leftComponent={<MyCustomLeftComponent />}
        statusBarProps={{ backgroundColor: '#075e54' }}
      />
          );
        }
      }

export default CustomHeader;
