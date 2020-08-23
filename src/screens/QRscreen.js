import React from 'react';
import {Image, View} from 'react-native';

export default function QRscreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        style={{width: 300, height: 300}}
        source={{
          uri:
            'https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        }}
      />
    </View>
  );
}
