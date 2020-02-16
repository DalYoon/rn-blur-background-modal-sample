import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

// React.forwardRef means nothing, it's just a way to pass ref to this component, from parent component
// You can consider this as just a component
const LoremIpsum = React.forwardRef(({openModal}, ref) => (
  <Container ref={ref} contentContainerStyle={styles.contentContainer}>
    <Title>Lorem Ipsum</Title>
    <Button onPress={openModal}>
      <ButtonText>Blur Modal On (Please press here)</ButtonText>
    </Button>
    <Description>{LOREM_IPSUM}</Description>
    <SubtitleSection>
      <Col paddingRight={5}>
        <SubtitleWrapper backgroundColor={'#f11'}>
          <Subtitle>Lorem 1</Subtitle>
        </SubtitleWrapper>
      </Col>
      <Col paddingLeft={5}>
        <SubtitleWrapper backgroundColor={'#11f'}>
          <Subtitle>Lorem 1</Subtitle>
        </SubtitleWrapper>
      </Col>
    </SubtitleSection>
    <ContentSection>
      <Title>Lorem Ipsum</Title>
      <Description>{LOREM_IPSUM}</Description>
      <Description>{LOREM_IPSUM}</Description>
    </ContentSection>
  </Container>
));

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const ContentSection = styled.View`
  width: 100%;
  margin-top: 30px;
  align-items: center;
`;

const SubtitleSection = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Col = styled.View`
  flex: 1;
  ${({paddingLeft}) => paddingLeft && `padding-left: ${paddingLeft}px;`}
  ${({paddingRight}) => paddingRight && `padding-right: ${paddingRight}px;`}
`;

const SubtitleWrapper = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

const Subtitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const Description = styled.Text`
  margin-top: 15px;
  font-size: 15px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 50px;
  width: 100%;
  border-radius: 4px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #f51;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default LoremIpsum;
