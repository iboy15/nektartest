import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const homeStack = createStackNavigator(
  {
    Home,
    Detail
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(homeStack);

export default AppContainer;
