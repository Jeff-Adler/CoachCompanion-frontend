import React from "react";
import { StyleSheet, View } from "react-native";
import ActivityStackNavigator from "../navigation/ActivityStackNavigator";

class ActivityContainer extends React.Component {
    state = {
        activityTitle : null,
        pointValue : null,
        category : null,
        audible : null,
        energyType : null
    }

    onChangeText = (name) => (text) => {
      this.setState({ [name]: text });
    }

    onChangeValue = (type,value) => {
      if (type === "audible") {
        this.setState({ [type] : !this.state.audible });
      } else {
        this.setState({ [type] : value });
      }
    }

    submitActivity = async () => {
        const token = await this.props.getToken();

        const configObj = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              accepts: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify({ activity: this.state }),
          };

        fetch(
        `http://localhost:3000/api/v1/users/${this.props.currentUser.id}/submit_activity`,
        configObj
        ).then((response) => response.json());
    }

    render() {
        const { activityTitle, pointValue, category, audible, energyType  } = this.state
        return (
            <View style={styles.container}>
                <ActivityStackNavigator 
                    submitActivity={this.submitActivity}
                    onChangeText={this.onChangeText}
                    onChangeValue={this.onChangeValue}
                    activityTitle={activityTitle}
                    pointValue={pointValue}
                    category={category}
                    audible={audible}
                    energyType={energyType}
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