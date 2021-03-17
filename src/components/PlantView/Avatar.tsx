import {Image, ImageSourcePropType, View} from 'react-native';
import React from 'react';
import {AvatarStyles} from './AvatarStyles';

type Props = {
  source: ImageSourcePropType;
};

const Avatar: React.FC<Props> = ({source}) => (
  <View style={AvatarStyles.shadowContainer}>
    <View style={AvatarStyles.container}>
      <Image source={source} style={AvatarStyles.image} resizeMode={'center'} />
    </View>
  </View>
);

export default Avatar;
