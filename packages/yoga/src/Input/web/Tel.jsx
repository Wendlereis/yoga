import React, { forwardRef } from 'react';
import Input from './Input';

const TelRenderer = (props, ref) => <Input {...props} ref={ref} type="tel" />;

const Tel = forwardRef(TelRenderer);

export default Tel;
