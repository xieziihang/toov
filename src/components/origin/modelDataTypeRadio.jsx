import { Radio } from 'antd';
import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>基础</Radio>
      <Radio value={2}>科创</Radio>
    </Radio.Group>
  );
};

export default App;
