import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons from FontAwesome5
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import AttendancePage from '../components/AttendancePage'; // Import the AttendancePage component

const MainPage = ({ navigation }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearch = () => {
    // Handle search functionality here
    console.log("Search for:", searchText);
  };

  const clearSearch = () => {
    setShowSearchBar(false);
    setSearchText('');
  };

  const navigateToScreen = (screenName) => {
    if (screenName === 'Attendance') {
      navigation.navigate('AttendancePage'); // Navigate to 'AttendancePage' route
    } else {
      navigation.navigate(screenName);
    }
  };

  const options = [
    { title: 'Attendance', screenName: 'Attendance', arrowStyle: { fontSize: 32 } },
    { title: 'Issue History', screenName: 'BookIssueHistory', arrowStyle: { fontSize: 32 } },
    { title: 'Due Books', screenName: 'OverdueBooks', arrowStyle: { fontSize: 32 } },
    { title: 'Book Search', screenName: 'BookSearch', arrowStyle: { fontSize: 32 } },
    { title: 'Availability', screenName: 'BookAvailability', arrowStyle: { fontSize: 32 } },
    { title: 'Request', screenName: 'RequestIssuance', arrowStyle: { fontSize: 32 } },
  ];

  const carouselItems = [
    { title: '"Libraries allow children to ask questions about the world and find the answers. And the wonderful thing is that once a child learns to use a library, the doors to learning are always open." - Laura Bush', background: ['#71722a', '#ef992c'] },
    { title: '"The only way to do great work is to love what you do. If you have not found it yet, keep looking. Dont settle. As with all matters of the heart, you will know when you find it." - Steve Jobs', background: ['#ea6e86','#594893'] },
    { title: '"The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education." - Martin Luther King Jr.', background: ['#f1bd40','#57e9f4'] },
    { title: '"Educationists should build the capacities of the spirit of inquiry, creativity, entrepreneurial and moral leadership among students and become their role model. - A.P.J. Abdul Kalam"', background: ['#8ec99e','#016c7a'] },
  ];

  const renderCard = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => navigateToScreen(item.screenName)}
      >
        <Text style={styles.optionTitle}>
          {item.title}
          {item.arrowStyle && <Text style={item.arrowStyle}>{'\u2192'}</Text>}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCarouselItem = ({ item, index }) => {
    if (item.background) {
      return (
        <LinearGradient
          colors={item.background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.carouselCard]}
        >
          <Text style={styles.carouselTitle}>{item.title}</Text>
        </LinearGradient>
      );
    } else {
      return (
        <View style={[styles.carouselCard, { backgroundColor: item.backgroundColor }]}>
          <Text style={styles.carouselTitle}>{item.title}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo_user.png')}
            style={{ width: 24, height: 24, marginRight: 5, borderRadius: 12 }}
          />
          <Text style={styles.heading}>Welcome Back, Harleen</Text>
        </View>
        <TouchableOpacity onPress={toggleSearchBar}>
          <FontAwesome5 name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {showSearchBar && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={clearSearch}>
            <FontAwesome5 name="times" size={20} color="black" />
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.contentContainer}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={carouselItems}
            renderItem={renderCarouselItem}
            sliderWidth={400}
            itemWidth={300}
            layout={'default'}
          />
        </View>
        
        <View style={styles.optionsContainer}>
          {options.map((option, index) => renderCard({ item: option, index }))}
        </View>
      </ScrollView>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="envelope" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="cog" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    zIndex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontFamily: 'Roboto-Light',
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    marginTop: 80, // Adjust this value according to your design
  },
  carouselContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
  },
  optionsContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionCard: {
    width: '48%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7aa85',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    padding: 20,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    textAlign: 'justify',
  },
  carouselCard: {
    width: '100%',
    height: 300,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    padding: 20,
  },
  carouselTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 24,
    textAlign: 'justify',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  navItem: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '300',
    fontFamily: 'Roboto-Light',
    color: 'black',
  },
});

export default MainPage;
