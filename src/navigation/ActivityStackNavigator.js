import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const ActivityStack = createStackNavigator();

const ActivityStackNavigator = (props) => {
  const { submitActivity } = props;

  return (
    <ActivityStack.Navigator style={styles.container} initialRouteName="Activity">
      <ActivityStack.Screen name="Activity">
        {/* {(props) => <Activity {...props} submitActivity={submitActivity} />}  */}
      </ActivityStack.Screen>
    </ActivityStack.Navigator>
  );
};

export default ActivityStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
