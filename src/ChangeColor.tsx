/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';

export interface ChangeColorProps {

}

export function ChangeColor(props: ChangeColorProps) {
  const {} = props;
  const [state, setState] = React.useState({ value: '😭', color: 'red' });

  return (
    <SafeAreaView style={{ margin: 20, borderColor: '#999', borderWidth: 1 }}>
      <Text style={{ color: state.color }}>
        Input color changes at 5 chars. Current Color: {state.color}
      </Text>
      <TextInput
        multiline
        style={{ color: state.color }}
        value={state.value}
        placeholder="Placeholder"
        onChangeText={(value) => {
          setState({
            value: value,
            color: value.length >= 5 ? 'blue' : 'red',
          });
        }}
    />
    </SafeAreaView>
  );
}
