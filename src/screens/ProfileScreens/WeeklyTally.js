import React from "react";

import { View, Text, StyleSheet } from "react-native";

class WeeklyTally extends React.Component {

    render() {
        const { weeklyTally } = this.props;
        return (
            <View style = {styles.container}>
                <Text>Weekly Tally: {weeklyTally.total_points}</Text>
                <Text>Vocation: {weeklyTally.vocation}</Text>
                <Text>Relationships: {weeklyTally.relationship}</Text>
                <Text>Social: {weeklyTally.social}</Text>
                <Text>Health: {weeklyTally.health}</Text>
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
  
  export default WeeklyTally;