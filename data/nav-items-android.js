import Home from "../screens/Home";
import Fundamentals from "../screens/Fundamentals/Fundamentals";
import Design from "../screens/Design/Design";
import MoreComponents from "../screens/MoreComponents/MoreComponents";

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
  {
    index: 3,
    name: 'MoreComponents',
    component: MoreComponents,
    navTitle: 'More components',
    headerTitle: 'More components',
  },
];

export default navItemsAndroid
