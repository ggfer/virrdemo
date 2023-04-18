import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MapMarker, } from "react-native-maps";

const UserMarker = () => {
  return (
    <MapMarker coordinate={{ latitude: 30, longitude: 100 }}>
      <View style={{
        width: 50, height: 50, backgroundColor: "blue", alignItems: "center", borderRadius: 10
      }}>

      </View>
    </MapMarker>
  )
}

export default UserMarker