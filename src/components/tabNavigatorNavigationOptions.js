import React from 'react';
import { Icon } from 'react-native-elements';

const iconName = { map: 'chat', deck: 'rss-feed', review: 'call' };
const tabBarLabel = { map: 'Chats', deck: 'Status', review: 'Calls' };

const tabNavigationOptions = ({ navigation }) => {
  const routeName = navigation.state.routeName;
    return (
      {
          tabBarLabel: tabBarLabel[routeName],
          // tabBarIcon: ({ tintColor }) => {
          //   return <Icon name={iconName[routeName]} size={20} color={tintColor} />;
          // },
      }
    );
};

export { tabNavigationOptions };
