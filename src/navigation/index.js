import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from 'src/screens';
import useStyle from 'src/hooks/useStyle';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [Colors, Style] = useStyle();

  const isloading = useSelector(state => state.sessionReducer.isLoading);
  const headerStyle = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Home"
          component={Screens.Home}
          options={{headerShown: false}}
        />
        {/*<Stack.Screen
          name="Moving"
          component={Screens.Moving}
          options={headerStyle}
  />*/}
        <Stack.Screen
          name="Splash"
          component={Screens.Splash}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {isloading && (
        <View style={Style.loader}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
