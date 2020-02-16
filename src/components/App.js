import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import LoremIpsum from './LoremIpsum';
import BlurModal from './BlurModal';
import {findNodeHandle} from 'react-native';

export default () => {
  const blurTargetRef = useRef(); // target ref to blur (for android)
  const targetNodeHandle = useRef(); // targets node handle
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  useEffect(() => {
    if (blurTargetRef.current) {
      targetNodeHandle.current = findNodeHandle(blurTargetRef.current);
    }
  }, []);

  return (
    <>
      <Container>
        <LoremIpsum ref={blurTargetRef} openModal={openModal} />
      </Container>
      <BlurModal
        isVisible={modalVisible}
        closeModal={closeModal}
        targetNodeHandle={targetNodeHandle.current}
      />
    </>
  );
};

const Container = styled.View`
  flex: 1;
`;
