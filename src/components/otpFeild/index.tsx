import React, {FC, memo, useCallback, useEffect, useRef, useState} from 'react';
import {
  AppState,
  InteractionManager,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
  TextStyle,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {checkIsOtp} from '../../utils/helper';
import styles from './styles';

/**
 * @inputsCount No of input boxes
 * @onComplete  return OTP
 * @hasError Return Error
 * @inputStyle For styling input box
 */

interface Props extends TextInputProps {
  inputsCount: number;
  onComplete?: (value: string) => void;
  hasError?: boolean;
  inputStyle?: StyleProp<TextStyle>;
}

const OtpInput: FC<Props> = ({
  inputsCount,
  hasError = false,
  onComplete,
  inputStyle,
}) => {
  const appState = useRef(AppState.currentState);
  const focusRef = useRef<TextInput | null>(null);
  const [nextFocus, setNextFocus] = useState(0);
  const [otpArray, setOtpArray] = useState<Array<string>>([]);

  const getRef = useCallback(
    (ref: TextInput | null, current: number) => {
      if (current === nextFocus) {
        focusRef.current = ref;
      }
    },
    [nextFocus],
  );

  useEffect(() => {
    if (otpArray.length === inputsCount && !otpArray.includes('')) {
      onComplete && onComplete(otpArray.join(''));
    }
  }, [inputsCount, onComplete, otpArray, otpArray.length]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          const text = await Clipboard.getString();
          if (checkIsOtp(text, inputsCount)) {
            const newOtpArray = text.split('');
            setOtpArray(newOtpArray);
          }
        }
        appState.current = nextAppState;
      },
    );

    return () => {
      subscription.remove();
    };
  }, [inputsCount]);

  const handleNextFocus = useCallback(() => {
    focusRef.current?.focus();
  }, []);

  const handleTextInputChange = useCallback(
    (text: string, index: number) => {
      const newOtpArray = [...otpArray];
      newOtpArray[index] = text;
      if (text) {
        handleNextFocus();
      }
      setOtpArray(newOtpArray);
    },
    [handleNextFocus, otpArray],
  );

  const onKeyPress = useCallback(
    (
      {nativeEvent: {key}}: NativeSyntheticEvent<TextInputKeyPressEventData>,
      index: number,
    ) => {
      const text = key === 'Backspace' || key.length > 1 ? '' : key;
      handleTextInputChange(text, index);
      if (!text && index !== 0 && otpArray[index - 1] !== '') {
        setNextFocus(index - 1);
        InteractionManager.runAfterInteractions(() => {
          focusRef.current?.focus();
        });
      }
    },
    [handleTextInputChange, otpArray],
  );

  const onChangeText = useCallback(
    (text: string) => {
      if (text.length > 1 && checkIsOtp(text, inputsCount)) {
        const newOtpArray = text.split('');
        setOtpArray(newOtpArray);
      }
    },
    [inputsCount],
  );

  return (
    <>
      {Array(inputsCount)
        .fill(0)
        .map((_, index) => (
          <TextInput
            ref={ref => getRef(ref, index)}
            key={index}
            selectTextOnFocus={true}
            onFocus={() => setNextFocus(index + 1)}
            value={otpArray[index]}
            onChangeText={onChangeText}
            maxLength={index === 0 ? 6 : 1}
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            style={[
              styles.input,
              index === inputsCount - 1 && styles.lastItem,
              hasError && styles.error,
              inputStyle,
            ]}
            keyboardType="numeric"
            onKeyPress={e => onKeyPress(e, index)}
          />
        ))}
    </>
  );
};



export default memo(OtpInput);