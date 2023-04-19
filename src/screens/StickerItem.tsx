import React, { useContext, useEffect, useRef, useCallback, useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import ThumbUp from '../../assets/thumb-up.png'

const StickerItem = ({ name }) => {
  const handlStickerOnPress = () => {
    // TODO
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlStickerOnPress()}
      >
        <Image source={ThumbUp} style={styles.sticker}>

        </Image>
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
    // backgroundColor: "orange",
  },
});
