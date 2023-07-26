import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from '../../utils/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: hp(100),
    width: wp(100),
  },
  textContainer: {
    position: 'absolute',
    bottom: hp(25),
    left: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
  },
  pagination: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: wp(100) / 30,
    color: '#888',
    margin: 3,
  },
  pagingActiveText: {
    fontSize: wp(100) / 25,
    color: Colors.errorRed,
    margin: 3,
  },
  navigationButtons: {
    alignSelf: 'center',
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  navButton: {
    marginHorizontal: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  progressRing: {
    bottom: 0,
    left: 75,
    position: 'absolute',
  },
});
