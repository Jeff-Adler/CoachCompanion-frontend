import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

//Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import LoginStackNavigator from "./src/navigation/LoginStackNavigator";

import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends React.Component {
  state = {
    user: null,
    isSignedIn: false
  }

  async storeToken(jwt) {
    try {
      await AsyncStorage.setItem("token", jwt);
    } catch (error) {
      console.log("Something went wrong", error);
    }
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
          this.storeToken(data.jwt);
          this.setState({ user: data.user, isSignedIn: true });
        } 
        // else {
        //   this.setState({ authenticationError: data.message });
        // }
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
          this.setState(
            {
              user: data.user,
            },
            () => {
              this.loginHandler(userObj);
            }
          );
        } 
        // else {
        //   this.setState({
        //     signupError: data.error,
        //   });
        // }
      });
  };

  logoutHandler = async () => {
    try {
      await AsyncStorage.removeItem("token");
      this.setState({ isSignedIn: false });
    } catch (exception) {
      console.log("Couldn't logout");
    }
  };

  render () {
    const {isSignedIn , user} = this.state
    return (
      <View style = {styles.container}>
        {
          isSignedIn === true ? (
            <View>
              <NavigationContainer>
                <MainTabNavigator
                  currentUser={user}
                  logoutHandler={this.logoutHandler}
                />
              </NavigationContainer>
            </View>
          ) : (
            <View style = {styles.container}> 
              <NavigationContainer>
                <LoginStackNavigator
                  loginHandler={this.loginHandler}
                  signupHandler={this.signupHandler}
                />
              </NavigationContainer>
            </View>
          )
        }
      </View>
    )
  }
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
