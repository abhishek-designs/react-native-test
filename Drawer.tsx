import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
// import {Text, View} from 'react-native/types';

const Drawer = createDrawerNavigator();

const Feed = () => {
  return (
    <View>
      <Text>This is a Feed</Text>
    </View>
  );
};

const Article = () => {
  return (
    <View>
      <Text>This is an Article</Text>
    </View>
  );
};
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
