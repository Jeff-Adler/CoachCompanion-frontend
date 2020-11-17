import React from "react";

import { ListItem } from 'react-native-elements'

import { View, ScrollView, StyleSheet } from "react-native";

class ActivitySelection extends React.Component {

    clickHandler = async (activity) => {
        await this.props.activitySelector(activity);
        this.props.navigation.navigate("TimePicker");
    };

    mapActivities = () => {
        return this.props.activities.map((activity,i) => {
            return (
                <ListItem 
                    onPress={() => this.clickHandler(activity)}
                    key={i} 
                    bottomDivider
                >
                    <ListItem.Content>
                        <ListItem.Title>{activity.title}</ListItem.Title>
                        <ListItem.Subtitle>{activity.category}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            )
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>{this.mapActivities()}</ScrollView>
            </View>
        )
    }
}


//need to stretch bullet items
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "stretch",
    //   justifyContent: "center",
    },
  });
  
  export default ActivitySelection;