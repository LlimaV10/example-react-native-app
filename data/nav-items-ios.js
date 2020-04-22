import Home from "../screens/Home";
import Fundamentals from "../screens/Fundamentals/Fundamentals";
import Design from "../screens/Design/Design";
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
    iosIcon: 'ios-planet',
  },
  {
    index: 2,
    name: 'Design',
    component: Design,
    navTitle: 'Design',
    headerTitle: 'Design and layout',
    iosIcon: 'ios-brush',
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
