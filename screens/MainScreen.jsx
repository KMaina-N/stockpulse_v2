import { FlatList, Text, StyleSheet } from 'react-native';
import FeaturesGrid from '../components/FeaturesGrid';
// import Module from '../data/Features';
import { FEATURES } from '../data/Features';

// import { CATEGORIES } from '../data/dummy-data';

import { useNavigation } from '@react-navigation/native';

function MainScreen() {
  const navigation = useNavigation();
    function renderFeatureItem(itemData) {
      function pressHandler() {
        console.log('Pressed: ' + itemData.item.title);
        navigation.navigate(itemData.item.title, {itemId: itemData.item.id})
      }
      return (
        <FeaturesGrid title={itemData.item.title} icon={itemData.item.icon} onPress={pressHandler}/>
        );
      }
    return (
      
      <FlatList style={styles.container}
        data={FEATURES}
        keyExtractor={(item) => item.id}
        renderItem={renderFeatureItem}
        numColumns={3}
      />
    );
  }

export default MainScreen;

const styles = StyleSheet.create({
  // set background color for flatlist
  container: {
    // backgroundColor: 'red',
    padding: 16,
    
  },
})