import { StyleSheet, View } from 'react-native'
import React from 'react'
import StickerItem from './StickerItem'

export enum Stickers {
  whatsup1 = "whatsup1",
  whatsup2 = "whatsup2",
  whatsup3 = "whatsup3",
  whatsup4 = "whatsup4",
  whatsup5 = "whatsup5",
  whatsup6 = "whatsup6",
  whatsup7 = "whatsup7",
  whatsup8 = "whatsup8",
  whatsup9 = "whatsup9",
  whatsup10 = "whatsup10",
  whatsup11 = "whatsup11",
  whatsup12 = "whatsup12",
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
    aspectRatio: 3/2,
    width: "25%",
    alignSelf: "center",
  },
});