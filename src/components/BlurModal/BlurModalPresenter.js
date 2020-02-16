import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import {BlurView} from '@react-native-community/blur';

export default ({
  isVisible,
  targetNodeHandle,
  closeModal,
  blurRadius,
  blurAmount,
}) => (
  <FullSizeModal isVisible={isVisible} hasBackdrop={false}>
    {targetNodeHandle && (
      <BlurCurtain
        viewRef={targetNodeHandle}
        blurType={'light'}
        blurRadius={blurRadius}
        blurAmount={blurAmount}
      />
    )}
    <ModalContent>
      <Button onPress={closeModal}>
        <ButtonText>Close Modal</ButtonText>
      </Button>
    </ModalContent>
  </FullSizeModal>
);

const FullSizeModal = styled(Modal)`
  margin: 0px;
`;

const BlurCurtain = styled(BlurView)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-width: 2px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #000;
`;
