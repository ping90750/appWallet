import React, { PropTypes, Component } from "react";

import AppNavigator from "./Navigator";
import { createAppContainer } from "react-navigation";

const NavigatorView = createAppContainer(AppNavigator);

// class NavigatorView extends Component {
//   static displayName = "NavigationView";
//
//   static propTypes = {};
//
//   render() {
//     return <AppNavigator />;
//   }
// }
//
// export default NavigatorView;

export default NavigatorView;
