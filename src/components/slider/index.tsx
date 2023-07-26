import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import CircularRing from '../circularRing';
import {onboardingScreens} from '../../utils/constant';
import styles from './styles'

const {width} = Dimensions.get('window');

const Slider = () => {
  const [active, setActive] = useState(0);
  const scrollViewRef = useRef<any>();

  const handlePagination = (event: any) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) setActive(slide);
  };

  const moveCarousel = (direction: any) => {
    const nextScreen = active + direction;
    if (nextScreen === onboardingScreens.length - 1) {
      // Scroll to the first screen (index 0) with no animation for seamless transition
      scrollViewRef.current.scrollTo({x: 0, animated: false});
      setActive(0);
    } else if (nextScreen >= 0 && nextScreen < onboardingScreens.length - 1) {
      // If the next screen is within the range of the actual screens
      scrollViewRef.current.scrollTo({x: nextScreen * width, animated: true});
      setActive(nextScreen);
    } else if (nextScreen === -1) {
      // If the user tries to swipe left from the first screen
      // Scroll to the duplicate last screen (index onboardingScreens.length - 2) with no animation for seamless transition
      const lastScreenIndex = onboardingScreens.length - 2;
      scrollViewRef.current.scrollTo({
        x: lastScreenIndex * width,
        animated: false,
      });
      setActive(lastScreenIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{backgroundColor: 'black'}}
        ref={scrollViewRef}
        pagingEnabled
        horizontal
        onScroll={handlePagination}
        showsHorizontalScrollIndicator={false}
        >
        {onboardingScreens.map((screen, index) => {
          return (
            <View key={index}>
              <Image
                source={{uri: screen.image}}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{screen.title}</Text>
                <Text style={styles.description}>{screen.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <>
        <View style={styles.pagination}>
          {onboardingScreens.map((_, index) => {
            return (
              <Text
                key={index}
                style={
                  index === active ? styles.pagingActiveText : styles.pagingText
                }>
                ⬤
              </Text>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.progressRing}
          onPress={() => moveCarousel(1)}>
          <CircularRing index={active} elem={onboardingScreens.length} />
        </TouchableOpacity>
      </>
    </View>
  );
};

export default Slider;

