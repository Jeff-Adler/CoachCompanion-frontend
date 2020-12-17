import React from "react";

import { View, Text, StyleSheet } from "react-native";

function WeeklyTally (props) {
    const { weeklyTally } = props;
    return (
        <View style = {styles.container}>
            <Text style={{fontWeight: "bold",fontSize: 50}}>Weekly Tally{"\n"}</Text>
            <Text style={{fontSize: 20}}>Total: {weeklyTally.total_points}{"\n"}</Text>
            <Text style={{fontSize: 20}}>Vocation: {weeklyTally.vocation}{"\n"}</Text>
            <Text style={{fontSize: 20}}>Relationships: {weeklyTally.relationship}{"\n"}</Text>
            <Text style={{fontSize: 20}}>Social: {weeklyTally.social}{"\n"}</Text>
            <Text style={{fontSize: 20}}>Health: {weeklyTally.health}{"\n"}</Text>
        </View>
    )
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