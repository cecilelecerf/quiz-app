import React, { ReactNode } from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Button, ButtonIcon, ButtonText, View } from '@gluestack-ui/themed';

export interface ButtonComponentProps {
  text: ReactNode;
  icon?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const ButtonComponent = ({ text, icon, onPress }: ButtonComponentProps) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 50,
    },
  });
  return (
    <Button style={styles.button} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
      {icon && <ButtonIcon as={icon} />}
    </Button>
  );
};

export default ButtonComponent;
