import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';
import {
  ChatScreen,
  StatusScreen,
  CallsScreen,
  NewGroup,
  NewBroadcast,
  WhatsappWeb,
  StarredMessages,
  Settings
} from '../screens';
import MainScreen from '../screens/MainScreen';
import { stackNavigationOptions } from './stackNavigatorNavigationOptions';
import { tabNavigationOptions } from './tabNavigatorNavigationOptions';

const NewGroupStack = StackNavigator(
  {
    newGroup: {
      screen: NewGroup,
      navigationOptions: stackNavigationOptions
    },
  }
);
const NewBroadcastStack = StackNavigator(
  {
    newBroadcast: {
      screen: NewBroadcast,
      navigationOptions: stackNavigationOptions
    },
  }
);
const WhatsappWebStack = StackNavigator(
  {
    whatsappWeb: {
      screen: WhatsappWeb,
      navigationOptions: stackNavigationOptions
    },
  }
);
const StarredMessagesStack = StackNavigator(
  {
    starredMessages: {
      screen: StarredMessages,
      navigationOptions: stackNavigationOptions
    },
  }
);
const SettingsStack = StackNavigator(
  {
    settingsScreen: {
      screen: Settings,
      navigationOptions: stackNavigationOptions
    }
  }
);

const TabRouter = TabNavigator(
  {
    map: {
      screen: ChatScreen,
      navigationOptions: tabNavigationOptions
    },
    deck: {
      screen: StatusScreen,
      navigationOptions: tabNavigationOptions
    },
    deck2: {
      screen: StatusScreen,
      navigationOptions: tabNavigationOptions
    },
    deck3: {
      screen: StatusScreen,
      navigationOptions: tabNavigationOptions
    },
    review: {
      screen: CallsScreen,
      navigationOptions: tabNavigationOptions
    }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      // scrollEnabled enables scrolling between multiple tabs extending out of the screen
      scrollEnabled: true,
      tabStyle: {
        top: -10,
        height: 50
      },
      showIcon: true,
      upperCaseLabel: true,
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold'
      },
      indicatorStyle: {
        backgroundColor: '#fff'
      },
      style: {
        backgroundColor: '#075e54',
        elevation: 5
      }
    }
  }
);
/* The navigation prop which a screen Component receives can navigate to sibling screens
within the same Router.
for eg. The screen in the SwitchNavigator below can navigate among themselves with their
navigation prop but cannot navigate to screens in the TabNavigator declared above
*/
const Router = SwitchNavigator(
  {
    main: {
      screen: MainScreen
    },
    group: {
      screen: NewGroupStack
    },
    broadcast: {
      screen: NewBroadcastStack
    },
    web: {
      screen: WhatsappWebStack
    },
    starred: {
      screen: StarredMessagesStack
    },
    settings: {
      screen: SettingsStack
    }
  },
  {
    initialRouteName: 'main'
  }
);

export default Router;
export { TabRouter };
