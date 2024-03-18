import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons from FontAwesome5
import Carousel from 'react-native-snap-carousel';

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
    navigation.navigate(screenName);
  };

  const options = [
    { title: 'View Attendance', screenName: 'ViewAttendance' },
    { title: 'Book Issue History', screenName: 'BookIssueHistory' },
    { title: 'Overdue Books', screenName: 'OverdueBooks' },
    { title: 'Book Search', screenName: 'BookSearch' },
    { title: 'Book Availability', screenName: 'BookAvailability' },
    { title: 'Request Issuance', screenName: 'RequestIssuance' },
   
  ];

  const carouselItems = [
    { title: 'Card 1' },
    { title: 'Card 2' },
    { title: 'Card 3' },
    { title: 'Card 4' },
  ];

  const renderCard = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => navigateToScreen(item.screenName)}
      >
        <Text style={styles.optionTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={styles.carouselCard}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.logoContainer}>
      <Image
  source={require('../assets/logo_user.png')} // Replace '../assets/logo_user.png' with the actual path to your image file
  style={{ width: 24, height: 24, marginRight: 5, borderRadius: 12 }} // Set the borderRadius to half of the width or height to make it curved
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
            itemWidth={300} // Increased item width
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
          <FontAwesome5 name="cog" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="plus" size={24} color="black" />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
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
    fontFamily: 'Roboto-Light', // Add fontFamily
    fontSize: 16, // Increase font size
    color: '#333', // Change text color
  },
  searchButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {

    color: 'white',
    fontFamily: 'Roboto-Light', // Add fontFamily
    fontSize: 16, // Increase font size
  },
  closeButton: {
    padding: 10,
  },
  contentContainer: {
    flex: 1,
  },
  carouselContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8', // Change background color to off-white
    borderRadius: 10, // Add border radius for a modern look
    padding: 20, // Add padding for spacing
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
    backgroundColor: '#f8f8f8', // Change background color to off-white
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    padding: 20, // Add padding for spacing
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  },
  carouselCard: {
    width: '100%',
    height: 300, // Increased height
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Change background color to off-white
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    padding: 20, // Add padding for spacing
  },
  carouselTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
   
    textAlign: 'center',
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
    fontWeight: '300', // Increase font weight
    fontFamily: 'Roboto-Light', // Add fontFamily
    color: 'black', // Change text color to grey
  },
});

export default MainPage;