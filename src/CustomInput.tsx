import React from 'react';
import {TextInput as NativeInput, TouchableOpacity} from 'react-native';
import {themes} from './styles';

export const CustomInput = function (props: any) {
  return (
    <TouchableOpacity style={themes.border as any}>
      <NativeInput
        style={themes.input}
        placeholderTextColor={'#999999'}
        selectionColor="#843f16"
        placeholder="input something"
        textAlign="left"
        textAlignVertical="top"
        {...props}
      />
    </TouchableOpacity>
  );
};
