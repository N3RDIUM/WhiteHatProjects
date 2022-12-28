import Feeds from './feed';
import CreateStory from './createStory';
import Profile from './ProfileScreen';
import Story from './StoryScreen';
import LoginScreen from './LoginScreen';
import LoadingScreen from './LoadingScreen';
import DashboardScreen from './DashboardScreen';

const Screens = {
  feed: Feeds,
  createStory: CreateStory,
  profile: Profile,
  story: Story,
  login: LoginScreen,
  loading: LoadingScreen,
  dashboard: DashboardScreen,
};

export default Screens;
