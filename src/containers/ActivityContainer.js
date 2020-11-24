import React from "react";
import { StyleSheet, View } from "react-native";
import ActivityStackNavigator from "../navigation/ActivityStackNavigator";

class ActivityContainer extends React.Component {

    submitActivity = async (activityObj) => {
        const token = await this.props.getToken();

        const configObj = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              accepts: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify({ activity: activityObj }),
          };

        fetch(
        `http://localhost:3000/api/v1/users/${this.props.currentUser.id}/submit_activity`,
        configObj
        ).then((response) => response.json());
    }

    render() {
        return (
            <View style={styles.container}>
                <LoggerStackNavigator 
                    submitActivity={this.submitActivity}
                />
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

export default ActivityContainer