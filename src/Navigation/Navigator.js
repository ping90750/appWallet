import React from "react";
import {Platform, Text, Dimensions} from "react-native";
import { createStackNavigator,createSwitchNavigator, createBottomTabNavigator} from "react-navigation";

import HomeScreen from "../Screen/Home";

import HistoryScreen from "../Screen/History";

import OtherScreen from "../Screen/Other";

import SettingsScreen from "../Screen/Settings";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  navigationOptions: {
    headerTitleStyle: {
      flex: 1,
      color: "#fff",
      fontSize: width * 0.04,
      fontWeight: "bold",
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: "#60d199",
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff"
  }
});
const HistoryStack = createStackNavigator({
  History: {
    screen: HistoryScreen
  }
}, {
  navigationOptions: {
    headerTitleStyle: {
      flex: 1,
      color: "#fff",
      fontSize: width * 0.04,
      fontWeight: "bold",
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: "#60d199",
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff"
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen
  }
}, {
  navigationOptions: {
    headerTitleStyle: {
      flex: 1,
      color: "#fff",
      fontSize: width * 0.04,
      fontWeight: "bold",
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: "#60d199",
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff"
  }
});
const OtherStack = createStackNavigator({
  Other: {
    screen: OtherScreen
  }

}, {
  navigationOptions: {
    headerTitleStyle: {
      flex: 1,
      color: "#fff",
      fontSize: width * 0.04,
      fontWeight: "bold",
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: "#60d199",
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff"
  }
});

const AppTabNavigator = createBottomTabNavigator(
  {
  tabBarHome: {
    screen: HomeStack,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  tabBarOther: {
    screen: OtherStack,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  tabBarHistory: {
    screen: HistoryStack,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  tabBarSettings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarVisible: false
    }
  }
  },
  {
    backBehavior: "none",
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: "none"
  }

);

  const AppNavigator = createSwitchNavigator({

    App: AppTabNavigator,
    Home: HomeStack
  }, {initialRouteName: "App"});

  export default AppNavigator;
