import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MapView, { Animated as AnimatedMap, Camera, Geojson, MAP_TYPES, PanDragEvent, Polygon } from "react-native-maps";
import { TouchableOpacity } from 'react-native-gesture-handler';
import type BottomSheet from '@gorhom/bottom-sheet';
import StickerBottomSheet from './StickerBottomSheet';
import UserMarker from './UserMarker';
import statusUtils from '../utils/statusUtils';
import { runOnJS } from 'react-native-reanimated';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");


const MapHomeScreen = () => {

  const mapViewRef = useRef<MapView>();
  const [scrollEnabled, setScrollEnabled] = useState(true)

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


  const handlePanDrag = (event: PanDragEvent) => {
    console.log("pan");
    setScrollEnabled(true);
    // left side
    if (event.nativeEvent.position.x / screenWidth < 0.9) {
      return;
    }
    let zoom = -(event.nativeEvent.position.y / screenHeight - 0.5) * 1 * (30 - 10) + 8;
    if (zoom < 2) {
      zoom = 2;
    } else if (zoom > 19) {
      zoom = 19;
    }
    let altitude = (40.075 * 1000000) / Math.pow(2, zoom - 1);
    let camera: Partial<Camera> = {
      altitude: altitude,
      zoom: zoom,
    };
    mapViewRef.current?.animateCamera(camera);

  };



  return (
    <View style={styles.map}>
      <AnimatedMap
        ref={mapViewRef}
        style={StyleSheet.absoluteFill}
        onPanDrag={handlePanDrag}
        scrollEnabled={scrollEnabled}
      >
        <UserMarker />
        {new Array(1000).fill(0).map(() => <UserMarker />)}
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