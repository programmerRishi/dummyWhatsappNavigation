import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import CustomHeader from '../components/CustomHeader';
import SideBar from '../components/SideBar';
import { TabRouter } from '../components/Router';

class MainScreen extends Component {
  componentWillMount() {
    this.props.dispatchNavigation(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
          <CustomHeader />
          <TouchableWithoutFeedback
            disabled={this.props.disabled}
            onPress={this.props.hideSideBar}
          >
              <View style={{ flex: 1 }}>
                  <TabRouter />
              </View>
          </TouchableWithoutFeedback>
          <SideBar />
      </View>
    );
  }
}

const styles = {
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
        },
      };

const mapStateToProps = ({ sideBarReducer }) => {
  const { disabled } = sideBarReducer;
  return { disabled };
};

export default connect(mapStateToProps, actions)(MainScreen);
