import React from 'react';
import {HighlightTextArea} from './HighlightTextArea';

export interface HighLightDemoProps {}

export function HighLightDemo(props: HighLightDemoProps) {
  const {} = props;
  const [text, setText] = React.useState('');

  return (
    <HighlightTextArea
      value={text}
      onChangeText={setText}
      markRules={[/{happy}/]}
    />
  );
}
