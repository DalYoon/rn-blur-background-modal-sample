import React from 'react';
import {Platform} from 'react-native';
import BlurModalPresenter from './BlurModalPresenter';

export default ({isVisible, targetNodeHandle, closeModal}) => {
  const isIOS = Platform.OS === 'ios';
  const blurRadius = isIOS ? 1 : 7; // for Android
  const blurAmount = isIOS ? 20 : 1; // for IOS

  return (
    <BlurModalPresenter
      isVisible={isVisible}
      targetNodeHandle={targetNodeHandle}
      closeModal={closeModal}
      blurRadius={blurRadius}
      blurAmount={blurAmount}
    />
  );
};
