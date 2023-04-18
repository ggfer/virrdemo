import { StyleSheet, View } from 'react-native'
import React from 'react'
import StickerItem from './StickerItem'

export enum Stickers {
  whatsup1 = "whatsup1",
  whatsup2 = "whatsup2",
  whatsup3 = "whatsup3",
  whatsup4 = "whatsup4",
}



const StickerPicker = () => {
  return (
    <View style={styles.container}>
      {Object.keys(Stickers).map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          <StickerItem name={item} />
        </View>
      ))}
    </View>
  )
}

export default StickerPicker

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
    aspectRatio: 3 / 2,
    width: "25%",
    alignSelf: "center",
  },
});