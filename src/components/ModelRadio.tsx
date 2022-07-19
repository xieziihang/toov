import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

interface Iprops {
  list: [];
}

const App: React.FC<Iprops> = (props) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {props.list.map((i) => {
        return (
          <Radio value={i} key={nanoid()}>
            {i}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default App;
