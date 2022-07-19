import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import SecondIndicatorSelect from '@/components/SecondIndicatorSelect';

interface Iprops {
  list: [];
  detail: [];
}

const App: React.FC<Iprops> = (props) => {
  const [value, setValue] = useState<string>('1');
  console.log('FirstIndicatorRadio接收到的是', props.detail);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        {props.list.map((i) => {
          return (
            <Radio value={i} key={nanoid()}>
              {i}
            </Radio>
          );
        })}
      </Radio.Group>
      <SecondIndicatorSelect selected={value} detail={props.detail} />
    </>
  );
};

export default App;
