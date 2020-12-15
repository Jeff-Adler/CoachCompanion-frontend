import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ActivityTitle from '../screens/ActivityScreens/ActivityTitle'
import Audible from '../screens/ActivityScreens/Audible'
import Category from '../screens/ActivityScreens/Category'
import EnergyType from '../screens/ActivityScreens/EnergyType'
import PointValue from '../screens/ActivityScreens/PointValue'
import SubActivity from '../screens/ActivityScreens/SubActivity'

const ActivityStack = createStackNavigator();

const ActivityStackNavigator = (props) => {
  const { submitActivity, title, pointValue, category, audible, energyType, setTitle, setPointValue, setCategory, setAudible, setEnergyType } = props;

  return (
    <ActivityStack.Navigator style={styles.container} initialRouteName="ActivityTitle">
      <ActivityStack.Screen name="ActivityTitle">
        {(props) => <ActivityTitle {...props} title={title} setTitle={setTitle} />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="PointValue">
        {(props) => <PointValue {...props} pointValue={pointValue} setPointValue={setPointValue}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="Category">
        {(props) => <Category {...props} category={category} setCategory={setCategory}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="Audible">
        {(props) => <Audible {...props} audible={audible} setAudible={setAudible}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="EnergyType">
        {(props) => <EnergyType {...props} energyType={energyType} setEnergyType={setEnergyType} />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="SubActivity">
        {(props) => <SubActivity {...props} submitActivity={submitActivity} />} 
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
