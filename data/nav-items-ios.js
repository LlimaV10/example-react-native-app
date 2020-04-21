import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import SettingsIos from "../screens/SettingsIos";

const navItemsIos = [
  {
    index: 0,
    name: 'Home',
    component: Home,
    navTitle: 'Home',
    headerTitle: 'Home screen',
    iosIcon: 'ios-home',
  },
  {
    index: 1,
    name: 'SecondScreen',
    component: SecondScreen,
    navTitle: 'Second',
    headerTitle: 'Second screen',
    iosIcon: 'logo-apple',
  },
  {
    index: 2,
    name: 'ThirdScreen',
    component: ThirdScreen,
    navTitle: 'Third',
    headerTitle: 'Third screen',
    iosIcon: 'ios-basketball',
  },
  {
    index: 3,
    name: 'Settings',
    component: SettingsIos,
    navTitle: 'Settings',
    headerTitle: 'Settings',
    iosIcon: 'ios-settings',
  },
];

export default navItemsIos
