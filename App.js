import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading'; // If you're using Expo
import LoginScreen from './android/app/src/components/LoginScreen';
import MainPage from './android/app/src/components/MainPage';

// Import the font
import * as Font from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = React.useState(false);

  // Load the font
  const loadFont = async () => {
    await Font.loadAsync({
      'Roboto-Light': require('./android/app/src/assets/fonts/Roboto-Light.ttf'), // Adjusted the font name and path
    });
    setIsFontLoaded(true);
  };

  React.useEffect(() => {
    loadFont();
  }, []);

  if (!isFontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: 'Main Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
