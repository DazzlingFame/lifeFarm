import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const TouchableContainer = styled(TouchableOpacity)`
  margin-bottom:8px;
  padding: 8px;
`;

const ClickableText = styled(Text)`
  color: blue;
`;

type Props = {
  text: string;
  onPress: () => void;
};

const ActionText: React.FC<Props> = ({text, onPress}) => (
  <TouchableContainer onPress={onPress}>
    <ClickableText>{text}</ClickableText>
  </TouchableContainer>
);

export default ActionText;
