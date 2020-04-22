import Home from "../screens/Home";
import Fundamentals from "../screens/Fundamentals/Fundamentals";
import ThirdScreen from "../screens/ThirdScreen";

const navItemsAndroid = [
  {
    index: 0,
    name: 'Home',
    component: Home,
    navTitle: 'Home',
    headerTitle: 'Home screen',
  },
  {
    index: 1,
    name: 'Fundamentals',
    component: Fundamentals,
    navTitle: 'Fundamentals',
    headerTitle: 'Fundamentals screen',
  },
  {
    index: 2,
    name: 'ThirdScreen',
    component: ThirdScreen,
    navTitle: 'Third',
    headerTitle: 'Third screen',
  },
];

export default navItemsAndroid
