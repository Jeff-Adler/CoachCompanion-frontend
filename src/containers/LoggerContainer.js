import React from "react";
import { StyleSheet, View, Text } from "react-native";

class LoggerContainer extends React.Component {

    //input POST request to input new log

    //input GET request to get list of user's activities, to be rendered
    // 3000/activities

    componentDidMount () {
        const token = await this.props.getToken();
        this.fetchActivities(token);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>LoggerContainer</Text>
            </View>
        )
    }

    fetchActivities = (token) => {
        const configObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        fetch(`http://localhost:3000/api/v1/user/${userId}/activities`, configObj)
            .then((response) => response.json())
            .then((data) => {
               
            });
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