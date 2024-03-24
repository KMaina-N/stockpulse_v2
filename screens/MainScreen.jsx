import { FlatList, Text, StyleSheet, View, Image } from 'react-native';
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
      
      <View>
        
        <View>
        <View style={styles.summary}>
          <View style={[styles.summary_inner_container, {backgroundColor: '#5DE2E7'}]}>
            
            <Image style={styles.summary_image} source={require('../assets/icons/sales.png')} />
            <Text style={styles.summaryText}>Sales</Text>
            <Text style={styles.summaryValue}>KES. 2000</Text>
          </View>
         <View style={[styles.summary_inner_container, {backgroundColor: '#98F5F9'}]}>
            <Image style={styles.summary_image} source={require('../assets/icons/sales.png')} />
            <Text style={styles.summaryText}>Sales</Text>
            <Text style={styles.summaryValue}>KES. 2000</Text>
          </View>
         <View style={[styles.summary_inner_container, {backgroundColor: '#7DDA58'}]}>
            <Image style={styles.summary_image} source={require('../assets/icons/sales.png')} />
            <Text style={styles.summaryText}>Sales</Text>
            <Text style={styles.summaryValue}>KES. 2000</Text>
          </View>
        </View>
        </View>
        <FlatList style={styles.container}
        data={FEATURES}
        keyExtractor={(item) => item.id}
        renderItem={renderFeatureItem}
        numColumns={3}
      />
      </View>
    );
  }

export default MainScreen;

const styles = StyleSheet.create({
  // set background color for flatlist
  container: {
    // backgroundColor: 'red',
    padding: 16,
    
  },
  summary : {
    borderRadius :10,
    backgroundColor: '#E3EDF8',
    padding: 16,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5
  },
  summary_inner_container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    // paddinng: 40
  },
  summary_image : {
    width: 30,
    height: 30,
    // borderRadius: 10,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})