import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements'

function ActivitySelection (props) {
    const {navigation,activities,activitySelector} = props

    function clickHandler (activity) {
            activitySelector(activity);
            navigation.navigate("TimePicker");
        };

    function mapActivities() {
        return activities.map((activity,i) => {
            return (
                <ListItem 
                    onPress={() => clickHandler(activity)}
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

    return (
        <View style = {styles.container}>
            <ScrollView>{mapActivities()}</ScrollView>
        </View>
    )
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