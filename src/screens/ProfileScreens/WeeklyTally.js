import React from "react";

import { View, Text, StyleSheet } from "react-native";

function WeeklyTally (props) {
    const { weeklyTally } = props;
    return (
        <View style = {styles.container}>
            <Text style={{fontWeight: "bold",fontSize: 50}}>Weekly Tally{"\n"}</Text>
            <Text style={styles.mainText}>Total: {weeklyTally.total_points}{"\n"}</Text>
            <Text style={styles.mainText}>Vocation: {weeklyTally.vocation}{"\n"}</Text>
            <Text style={styles.mainText}>Relationships: {weeklyTally.relationship}{"\n"}</Text>
            <Text style={styles.mainText}>Social: {weeklyTally.social}{"\n"}</Text>
            <Text style={styles.mainText}>Health: {weeklyTally.health}{"\n"}</Text>
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
    mainText: {
        fontSize: 20
    }
  });
  
  export default WeeklyTally;