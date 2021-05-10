import React, {useState} from 'react';
import {URIFile} from '../../utils/image/types';
import Submit from './Submit';
import {showImagePicker} from '../../utils/image';
import {
  Container,
  PhotoImage,
  ImageContainer,
  EmptyStateImage,
} from './PhotoPickerStyles';

type Props = {
  initialImage?: URIFile;
  onSubmit: (photo: URIFile) => void;
};

const PhotoPicker: React.FC<Props> = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState<URIFile | undefined>(
    props.initialImage,
  );

  const onAddPhotoPressed = () => {
    showImagePicker((file: URIFile) => {
      setCurrentPhoto(file);
    });
  };

  return (
    <Container>
      <ImageContainer>
        {currentPhoto ? (
          <PhotoImage source={currentPhoto} />
        ) : (
          <EmptyStateImage />
        )}
      </ImageContainer>

      {currentPhoto && (
        <Submit text={'Переснять'} onPress={onAddPhotoPressed} />
      )}
      <Submit
        text={!currentPhoto ? 'Сделать фото' : undefined}
        onPress={() => {
          currentPhoto ? props.onSubmit(currentPhoto) : onAddPhotoPressed();
        }}
      />
    </Container>
  );
};

export default PhotoPicker;
