import React, { useContext, useEffect, useRef, useCallback, useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";

const StickerItem = ({ name }) => {
  const handlStickerOnPress = () => {
    // TODO
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlStickerOnPress()}
      >
        <View style={styles.sticker}></View>
      </TouchableOpacity>
    </View>
  );
};

export default StickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  sticker: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 10,
    width: 60,
    height: 60,
    maxWidth: 60,
    backgroundColor: "orange",
    borderRadius: 100,
  },
});
