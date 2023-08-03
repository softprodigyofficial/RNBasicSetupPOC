import React from 'react';
import {View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import Animated from 'react-native-reanimated';
import {Colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

/* for animated circle */
const CIRCLE_LENGTH = 1000;
const RADIUS = 10 * 2 * Math.PI;

const CircularRing = ({index}: any) => {
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const calcProgress = () => {
    if (index === 0) {
      return 700;
    } else if (index === 1) {
      return 800;
    } else if (index === 2) {
      return 900;
    } else if (index === 3) {
      return 1000;
    }
  };

  return (
    <View style={styles.container}>
      <Svg style={{position: 'absolute'}}>
        <Circle
          cx={100}
          cy={100}
          r={RADIUS}
          stroke={'pink'}
          strokeWidth={2}
          fill={Colors.blackTransparent}
        />
        <AnimatedCircle
          cx={100}
          cy={100}
          r={RADIUS}
          stroke={Colors.red}
          strokeWidth={2}
          strokeDasharray={CIRCLE_LENGTH}
          strokeDashoffset={calcProgress()} // 600 - 1000
          strokeLinecap="square"
          fill={Colors.blackTransparent}
        />
        <View style={styles.rightArrow}>
          <Icon name="arrowright" color={Colors.white} size={24} />
        </View>
      </Svg>
    </View>
  );
};

export default CircularRing;
