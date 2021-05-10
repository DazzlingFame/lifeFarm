import styled from 'styled-components';
import {Image, View} from 'react-native';
const cameraIcon = require('../../assets/images/photo-camera.png');

export const Container = styled(View)`
  flex: 1;
  padding-top: 12px;
`;

export const ImageContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PhotoImage = styled(Image).attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;
`;

export const EmptyStateImage = styled(Image).attrs({
  resizeMode: 'contain',
  source: cameraIcon,
})`
  width: 128px;
  height: 128px;
`;
