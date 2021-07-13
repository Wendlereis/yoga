import React, { forwardRef } from 'react';
import Input from './Input';

const InputNumberRenderer = (props, ref) => (
  <Input {...props} ref={ref} type="number" />
);

const InputNumber = forwardRef(InputNumberRenderer);

export default InputNumber;
