import React from "react";
import { StyleSheet, View, Text } from "react-native";

import ProfileStackNavigator from "../navigation/ProfileStackNavigator"

class ProfileContainer extends React.Component {
    state = {
        weeklyActivities: null,
        weeklyTally: null
    }

    //input request to retrieve all posts from the week
    async componentDidMount () {
        const token = await this.props.getToken();
        this.fetchWeeklyActivities(token);
        this.fetchWeeklyTally(token);
    }

    fetchWeeklyActivities = (token) => {
        const configObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/weekly_activities`, configObj)
            .then((response) => response.json())
            .then((data) => {
                this.setState({weeklyActivities : data})
            });
    }

    fetchWeeklyTally = (token) => {
        const configObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/weekly_tally`, configObj)
            .then((response) => response.json())
            .then((data) => {
                this.setState({weeklyTally : data})
            });
    }

    render() {
        const {weeklyTally} = this.state
        return (
            <View style={styles.container}>
            { weeklyTally ?
                <ProfileStackNavigator 
                    weeklyTally={weeklyTally}
                />
            : null }
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
  
export default ProfileContainer