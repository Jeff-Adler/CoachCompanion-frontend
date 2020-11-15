import React from "react";
import { StyleSheet, View, Text } from "react-native";

class LoggerContainer extends React.Component {

    //input POST request to input new log

    //input GET request to get list of user's activities, to be rendered
    // 3000/activities

    componentDidMount () {
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
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>LoggerContainer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default LoggerContainer