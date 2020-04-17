import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

const navItems = [
  {
    index: 0,
    name: 'Home',
    component: Home,
    navTitle: 'Home',
    headerTitle: 'Home screen'
  },
  {
    index: 1,
    name: 'SecondScreen',
    component: SecondScreen,
    navTitle: 'Second',
    headerTitle: 'Second screen'
  },
  {
    index: 2,
    name: 'ThirdScreen',
    component: ThirdScreen,
    navTitle: 'Third',
    headerTitle: 'Third screen'
  },
];

export default navItems
