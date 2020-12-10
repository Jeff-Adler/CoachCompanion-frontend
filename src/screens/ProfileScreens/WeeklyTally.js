import React from "react";

import { View, Text, StyleSheet } from "react-native";

class WeeklyTally extends React.Component {

    render() {
        const { weeklyTally } = this.props;
        return (
            <View style = {styles.container}>
                <Text>Weekly Tally{"\n"}</Text>
                <Text>Total: {weeklyTally.total_points}{"\n"}</Text>
                <Text>Vocation: {weeklyTally.vocation}{"\n"}</Text>
                <Text>Relationships: {weeklyTally.relationship}{"\n"}</Text>
                <Text>Social: {weeklyTally.social}{"\n"}</Text>
                <Text>Health: {weeklyTally.health}{"\n"}</Text>
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