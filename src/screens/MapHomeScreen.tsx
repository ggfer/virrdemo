import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import MapView, { Animated as AnimatedMap, Geojson, MAP_TYPES, Polygon } from "react-native-maps";
import { TouchableOpacity } from 'react-native-gesture-handler';
import type BottomSheet from '@gorhom/bottom-sheet';
import StickerBottomSheet from './StickerBottomSheet';
import UserMarker from './UserMarker';
import statusUtils from '../utils/statusUtils';


const MapHomeScreen = () => {

  const mapViewRef = useRef<MapView>();

  // sticker
  const stickerBottomSheetRef = useRef<BottomSheet>(null);
  const handleStickerButtonPress = useCallback((index: number) => {
    stickerBottomSheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    mapViewRef.current?.animateCamera(
      {
        altitude: statusUtils.convertZoomToAltitude(12),
        zoom: 12,
        center: { latitude: 30, longitude: 100 },
        heading: 0,
        pitch: 0,
      },
      { duration: 400 }
    );
  }, []);



  return (
    <View style={styles.map}>
      <AnimatedMap
        ref={mapViewRef}
        style={StyleSheet.absoluteFill}
      >
        <UserMarker />
      </AnimatedMap>
      <View style={{ position: "absolute", bottom: 100, left: 50, }}>
        <TouchableOpacity onPress={() => handleStickerButtonPress(0)}>
          <View style={{ width: 70, aspectRatio: 1, backgroundColor: "red", borderRadius: 20 }}></View>
        </TouchableOpacity>
      </View>
      <StickerBottomSheet ref={stickerBottomSheetRef} />

    </View>
  )
}

export default MapHomeScreen

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  }
})