import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AvatarStyles} from './AvatarStyles';
import {URIFile} from '../../utils/image/types';

type Props = {
  onLongPress: () => void;
  source: URIFile;
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
          resizeMode={'center'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
