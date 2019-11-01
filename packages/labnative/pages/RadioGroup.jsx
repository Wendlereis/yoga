import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioGroup } from '@gympass/yoga';

const RadioGroupPage = () => {
  const [selectedValue, setSelectedValue] = useState('24h');
  return (
    <View>
      <RadioGroup
        selectedValue={selectedValue}
        onChange={({ value }) => setSelectedValue(value)}
      >
        <RadioGroup.Button value="24h">24 hours</RadioGroup.Button>
        <RadioGroup.Button value="now">Open now</RadioGroup.Button>
        <RadioGroup.Button value="sundays">At Sundays</RadioGroup.Button>
      </RadioGroup>
    </View>
  );
};

export default RadioGroupPage;
