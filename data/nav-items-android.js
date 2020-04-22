import Home from "../screens/Home";
import Fundamentals from "../screens/Fundamentals/Fundamentals";
import Design from "../screens/Design/Design";

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
    headerTitle: 'Fundamentals',
  },
  {
    index: 2,
    name: 'Design',
    component: Design,
    navTitle: 'Design',
    headerTitle: 'Design and layout',
  },
];

export default navItemsAndroid
