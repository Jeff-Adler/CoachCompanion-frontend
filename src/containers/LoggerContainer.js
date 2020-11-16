import React from "react";
import { StyleSheet, View } from "react-native";
import LoggerStackNavigator from "../navigation/LoggerStackNavigator";

class LoggerContainer extends React.Component {
    state = {activities: null}
    //input POST request to input new log

    //input GET request to get list of user's activities, to be rendered
    // 3000/activities

    componentDidMount () {
        // const token = await this.props.getToken();
        const token = this.props.getToken();
        this.fetchActivities(token);
    }

    
    fetchActivities = (token) => {
        const configObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        fetch(`http://localhost:3000/api/v1/user/${this.props.currentUser.id}/activities`, configObj)
            .then((response) => response.json())
            .then((data) => {
                this.setState({activities : data})
            });
    }

    render() {
        const {activities} = this.state
        return (
            <View style={styles.container}>
                <LoggerStackNavigator 
                    activities={activities}
                />
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