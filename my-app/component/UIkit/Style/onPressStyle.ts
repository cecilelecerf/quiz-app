import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from './Colors';
import { BorderProps } from './Border';
import { defaultTextStyle } from './Text';

export interface PressedStyleProps {
  outline?: boolean;
  isPressed: boolean;
}

export const bgPressedStyle = ({ outline, isPressed }: PressedStyleProps) =>
  outline
    ? [stylesPress.bgOutline, isPressed && stylesPress.bgOutlinePressed]
    : [stylesPress.bgDefault, isPressed && stylesPress.bgDefaultPressed];
export const textPressedStyle = ({ outline, isPressed }: PressedStyleProps) =>
  outline
    ? [stylesPress.textOutline, isPressed && stylesPress.textOutlinePressed]
    : [stylesPress.textDefault];
export const stylesPress = StyleSheet.create({
  bgDefault: {
    backgroundColor: colors.primary.default,
  },

  bgDefaultPressed: {
    backgroundColor: colors.primary.dark,
  },

  bgOutline: {
    borderWidth: 1,
    borderColor: colors.primary.default,
  } as BorderProps,

  bgOutlinePressed: {
    backgroundColor: colors.primary.default,
  },

  textDefault: {
    color: colors.white,
  } as TextStyle,

  textOutline: {
    color: colors.primary.default,
  } as TextStyle,

  textOutlinePressed: {
    color: colors.white,
  } as TextStyle,
});
