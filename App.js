/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {View, Text} from "react-native";
import Navigator from "./src/Navigation/NavigatorView";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<View style={{
        flex: 1
      }}>
      <Navigator/>
    </View>);
  }
}
