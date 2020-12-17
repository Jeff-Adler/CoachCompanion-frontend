import React, {useState, useEffect}  from "react";
import { StyleSheet, View } from "react-native";
import LoggerStackNavigator from "../navigation/LoggerStackNavigator";

import { useFocusEffect } from '@react-navigation/native';

function LoggerContainer (props) {
  const {currentUser,getToken} = props

  const [activities,setActivities] = useState()
  const [activity,setActivity] = useState()
  const [time,setTime] = useState()
  
  useEffect (() => {
    retrieveActivities()
  },[])

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const refetchActivities = () => {
        try {
          if (isActive) {
            retrieveActivities ()
          }
        } catch (e) {
          console.log(e);
        }
      };

      refetchActivities();
      
      return () => {
        isActive = false;
      };
    }, [])
    );
    
  async function retrieveActivities () {
    const token = await getToken();
    fetchActivities(token)
  }

  logActivity = async () => {
      const token = await getToken();

      const logObj = {activity_id: activity.id,
                      timestamp: time}

      const configObj = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            accepts: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({ activity: logObj }),
        };

      fetch(
      `http://localhost:3000/api/v1/users/${currentUser.id}/log_activity`,
      configObj
      ).then((response) => response.json());
  }

  activitySelector = (activityObj) => {
    setActivity(activityObj)
  }

  timeSelector = (timeObj) => {
    setTime(timeObj)
  }

  fetchActivities = (token) => {
    const configObj = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/activities`, configObj)
        .then((response) => response.json())
        .then((data) => {
            setActivities(data)
        });
  }

  return (
    <View style={styles.container}>
    {activities ?
        <View style={styles.container}>
            <LoggerStackNavigator 
                activities={activities}
                activity={activity}
                activitySelector={activitySelector}
                timeSelector={timeSelector}
                logActivity={logActivity}
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
    //   alignItems: "center",
    //   justifyContent: "center",
    },
  });

export default LoggerContainer