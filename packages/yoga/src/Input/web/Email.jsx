import React, { forwardRef } from 'react';
import Input from './Input';

const EmailRenderer = (props, ref) => (
  <Input {...props} ref={ref} type="email" />
);

const Email = forwardRef(EmailRenderer);

export default Email;
