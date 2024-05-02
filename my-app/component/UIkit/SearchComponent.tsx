import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from '@gluestack-ui/themed';

export interface SearchComponentProps {
  placeholder?: string;
}

const SearchComponent = ({
  placeholder = 'Rechercher...',
}: SearchComponentProps) => {
  return (
    <Input variant='rounded'>
      <InputSlot pl='$3'>
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField placeholder={placeholder} />
    </Input>
  );
};

export default SearchComponent;
