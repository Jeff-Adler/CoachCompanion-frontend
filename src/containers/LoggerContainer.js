import React from "react";
import { StyleSheet, View } from "react-native";
import LoggerStackNavigator from "../navigation/LoggerStackNavigator";

class LoggerContainer extends React.Component {
    state = {
                activities: null,
                activity: null,
                time: null
            }
    //input POST request to input new log

    async componentDidMount () {
        const token = await this.props.getToken();
        this.fetchActivities(token);
    }

    logActivity = () => {

    }

    activitySelector = (activityObj) => {
        this.setState({activity : activityObj})
    }

    timeSelector = (timeObj) => {
        this.setState({time : timeObj}, () => {console.log(this.state.time)})
    }

    fetchActivities = (token) => {
        const configObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/activities`, configObj)
            .then((response) => response.json())
            .then((data) => {
                this.setState({activities : data})
            });
    }

    render() {
        const {activities,activity} = this.state
        return (
            <View style={styles.container}>
            { this.state.activities ?
                <LoggerStackNavigator 
                    activities={activities}
                    activity={activity}
                    activitySelector={this.activitySelector}
                    timeSelector={this.timeSelector}
                    logActivity={this.logActivity}
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
    //   alignItems: "center",
    //   justifyContent: "center",
    },
  });

export default LoggerContainer