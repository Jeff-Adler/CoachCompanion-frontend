import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

//Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import LoginStackNavigator from "./src/navigation/LoginStackNavigator";

import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [user,setUser] = useState()
  const [isSignedIn,setSignIn] = useState(false)

  async function storeToken(jwt) {
    try {
      await AsyncStorage.setItem("token", jwt);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  function getToken() {
    return AsyncStorage.getItem("token");
  }

  loginHandler = (userInfo) => {
    const configObj = {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    };

    fetch("http://localhost:3000/api/v1/login", configObj)
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          storeToken(data.jwt);
          setUser(data.user)
          setSignIn(true)
        } 
      });
  };

  signupHandler = (userObj) => {
    const configObj = {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    };

    fetch("http://localhost:3000/api/v1/users", configObj)
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          setUser(data.user)
          loginHandler(userObj)
        } 
      });
  };

  logoutHandler = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setSignIn(false);
    } catch (exception) {
      console.log("Couldn't logout");
    }
  };

  return (
    <View style = {styles.container}>
      {
        isSignedIn === true ? (
          <View style = {styles.container}>
            <NavigationContainer>
              <MainTabNavigator
                currentUser={user}
                getToken={getToken}
                logoutHandler={logoutHandler}
              />
            </NavigationContainer>
          </View>
        ) : (
          <View style = {styles.container}> 
            <NavigationContainer>
              <LoginStackNavigator
                loginHandler={loginHandler}
                signupHandler={signupHandler}
              />
            </NavigationContainer>
          </View>
        )
      }
    </View>
  )

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
