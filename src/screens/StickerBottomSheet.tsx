import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import StickerPicker from './StickerPicker';

const StickerBottomSheet = React.forwardRef<BottomSheet>((props, sheetRef) => {
  const insets = useSafeAreaInsets();


  // callbacks
  const handleSheetChange = useCallback((index: Number) => {
    console.log("handleSheetChange", index);
    if (index == -1) {
      Keyboard.dismiss();
    }
  }, []);

  const initialSnapPoints = useMemo(() => ["40%"], []);


  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={initialSnapPoints}
      index={-1}
      enablePanDownToClose={true}
      backgroundStyle={{ borderRadius: 30 }}
      onChange={handleSheetChange}
      keyboardBehavior={"interactive"}
      keyboardBlurBehavior={"restore"}
    >
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <StickerPicker />
      </View>
    </BottomSheet>
  );
});

export default StickerBottomSheet;

const styles = StyleSheet.create({})