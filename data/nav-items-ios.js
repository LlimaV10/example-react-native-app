import Home from "../screens/Home";
import Fundamentals from "../screens/Fundamentals/Fundamentals";
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
    name: 'Fundamentals',
    component: Fundamentals,
    navTitle: 'Fundamentals',
    headerTitle: 'Fundamentals screen',
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
