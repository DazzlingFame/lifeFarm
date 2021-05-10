import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AvatarStyles} from './AvatarStyles';

type Props = {
  onLongPress: () => void;
  source: ImageSourcePropType;
};

const Avatar: React.FC<Props> = ({source, onLongPress}) => {
  console.log('source', source);
  return (
    <View style={AvatarStyles.shadowContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={onLongPress}
        style={AvatarStyles.container}>
        <Image
          source={source}
          style={AvatarStyles.image}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
