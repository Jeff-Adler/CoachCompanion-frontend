import React from "react";

import { ListItem } from 'react-native-elements'

import { View, ScrollView, StyleSheet } from "react-native";

class ActivitySelection extends React.Component {

    mapActivities = () => {
        return this.props.activities.map((activity,i) => {
            return (
                <ListItem key={i} bottomDivider>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default ActivitySelection;