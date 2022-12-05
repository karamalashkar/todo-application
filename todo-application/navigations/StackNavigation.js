import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/register/RegisterScreen";
import LoginScreen from "../screens/login/LoginScreen";

export function StackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} >
      <RootStackNav.Navigator >

        <RootStackNav.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerLeft: () => {},
            cardStyle:{
              backgroundColor: 'white'
            }
          }}
        />

        <RootStackNav.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            cardStyle:{
              backgroundColor: 'white'
            }
          }}
        />
        
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}