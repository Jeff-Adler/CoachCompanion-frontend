import React, {useState, useEffect} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View } from "react-native";

import ProfileStackNavigator from "../navigation/ProfileStackNavigator"

function ProfileContainer (props) {
  const {currentUser, getToken} = props
  const [weeklyActivities, setWeeklyActivities] = useState()
  const [weeklyTally, setWeeklyTally] = useState()

  async function retrieveTally () {
    const token = await getToken();
    fetchWeeklyTally(token);
  }

  useEffect (() => {
    retrieveTally()
  },[])

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const refetchWeeklyTally = () => {
        try {
          if (isActive) {
            retrieveTally()
          }
        } catch (e) {
          console.log(e);
        }
      };

      refetchWeeklyTally();

      return () => {
        isActive = false;
      };
    }, [])
  );

  fetchWeeklyActivities = (token) => {
      const configObj = {
          method: "GET",
          headers: {
              Authorization: `Bearer ${token}`,
          }
      }
      fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/weekly_activities`, configObj)
          .then((response) => response.json())
          .then((data) => {
              setWeeklyActivities(data)
          });
  }

  fetchWeeklyTally = (token) => {
      const configObj = {
          method: "GET",
          headers: {
              Authorization: `Bearer ${token}`,
          }
      }
      fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/weekly_tally`, configObj)
          .then((response) => response.json())
          .then((data) => {
              setWeeklyTally(data)
          });
  }

  return (
    <View style={styles.container}>
    { weeklyTally ?
      <View style={styles.container}>
          <ProfileStackNavigator 
              weeklyTally={weeklyTally}
          />
      </View>
    : null }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
    },
  });
  
export default ProfileContainer