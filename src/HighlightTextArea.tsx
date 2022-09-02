import React, {forwardRef, useMemo} from 'react';
import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {CustomInput} from './CustomInput';

const defaultContentStyle: StyleProp<ViewStyle> = {
  minHeight: 300,
  paddingVertical: 8,
};
const highlightColor: StyleProp<TextStyle> = {color: 'red'};

interface HighlightTextAreaProps {
  value?: string;
  onChangeText?: (val: string) => void;
  /** highlight rules */
  markRules?: RegExp[];
}

export const HighlightTextArea = forwardRef<any, HighlightTextAreaProps>(
  (props, ref) => {
    const {value = '', markRules, ...restProps} = props;
    const fmtText = useMemo(() => {
      const rules = Array.isArray(markRules) ? markRules : [];
      const expStr = `(${rules.map(i => i.source).join('|')})`;
      const splitExp = new RegExp(expStr);
      const list = value.split(splitExp);
      const eles = list
        .filter(i => !!i)
        .map((str, index) => (
          <Text
            key={index}
            style={splitExp.test(str) ? highlightColor : undefined}>
            {str}
          </Text>
        ));
      return eles;
    }, [value, markRules]);

    return (
      <CustomInput
        ref={ref}
        contentStyle={defaultContentStyle}
        blurOnSubmit={false}
        multiline
        {...restProps}>
        <Text>{fmtText}</Text>
      </CustomInput>
    );
  },
);
