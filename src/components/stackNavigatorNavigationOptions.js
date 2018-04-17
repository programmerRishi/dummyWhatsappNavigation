import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const title = {
    newGroup: 'New Group',
    newBroadcast: 'New Broadcast',
    whatsappWeb: 'Whatsapp Web',
    starredMessages: 'Starred Messages',
    settingsScreen: 'Settings'
};

const stackNavigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state;
    return (
      {
          title: title[routeName],
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20
          },
          headerLeft: (
              <View style={{ paddingLeft: 10 }}>
                  <Icon
                  name='arrow-back'
                  color='#fff'
                  size={25}
                  onPress={() => navigation.navigate('main')}
                  />
              </View>
          ),
          headerStyle: {
            backgroundColor: '#075e54'
          }
      }
    );
};

export { stackNavigationOptions };
