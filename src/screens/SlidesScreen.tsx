import React, { useContext, useRef, useState } from 'react';

import {
  Button,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/Navigator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<RootStackParamList, 'SlidesScreen'> {
}
export const SlidesScreen = ({ navigation }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisibleRef = useRef<boolean>(false);
  const { theme: { colors } } = useContext(ThemeContext);
  const { opacity, fadeIn } = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View style={{ ...styles.imageContainer, backgroundColor: colors.background }}>
        <Image
          source={item.img}
          style={{ width: 350, height: 400, resizeMode: 'center' }}
        />
        <Text style={{ ...styles.imageTitle, color: colors.primary }}>{item.title}</Text>
        <Text style={{ ...styles.imageDescription, color: colors.text }}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      <Carousel
        mode="parallax"
        style={{ width: screenWidth }}
        pagingEnabled={false}
        windowSize={2}
        snapEnabled
        width={screenWidth}
        // height={screenHeight}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
          parallaxAdjacentItemScale: 0.75,
        }}
        autoPlay={true}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisibleRef.current = true;
            fadeIn();
          }
        }}
        defaultIndex={activeIndex}
        height={screenHeight - 150}
      />
      <View style={{
        flexDirection: 'row',
        //justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
      }}>
        {items.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <TouchableOpacity key={i} onPress={() => setActiveIndex(i)}>
              <View
                style={{
                  backgroundColor: isActive ? colors.primary : '#5856d684',
                  //backgroundColor:'blue',
                  width: 10,
                  height: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          );
        })}
        <View style={{ flex: 1 }} />

        <Animated.View
          style={{
            opacity
          }}>
          <TouchableOpacity style={{
            flexDirection: 'row',
            backgroundColor: colors.primary,
            width: 140,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisibleRef.current) {
                navigation.navigate('HomeScreen');
              }
            }}
          >
            <Text style={{
              fontSize: 25,
              color: 'white'
            }}>
              Entrar
            </Text>
            <Icon
              name="chevron-forward-outline"
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>



      </View>


    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,

    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  imageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  imageDescription: {
    fontSize: 16,
    color: 'black',
  },
});