import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {camera, gallery} from '../../utils/images';
import styles from './styles';

type Props = {
  visibility: boolean;
  setVisibility: (val: boolean) => void;
  cancelable?: boolean;
  onImageSelected: (imageData: any) => void;
  onImageCaptured: (imageData: any) => void;
};

const ImageOptionsModal: React.FC<Props> = props => {
  const {
    visibility,
    setVisibility,
    cancelable = true,
    onImageSelected,
    onImageCaptured,
  } = props;

  const chooseImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      cropping: true,
      maxFiles: 3,
      multiple: true,
    })
      .then((image: any) => {
        onImageSelected(image);
      })
      .finally(() => {
        setVisibility(!visibility);
      });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image: any) => {
        onImageCaptured([image]);
      })
      .catch((err: any) => {
        console.log('err====>', err);
      })
      .finally(() => {
        setVisibility(!visibility);
      });
  };

  const requestCancel = () => {
    if (cancelable) setVisibility(!visibility);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
      onRequestClose={requestCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.rowWithCenter}>
            <TouchableOpacity style={styles.option} onPress={chooseImage}>
              <Image
                source={gallery}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.textStyle}>Library </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={openCamera}>
              <Image
                source={camera}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.textStyle}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImageOptionsModal;
