import { Select } from 'antd';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ThirdIndicatorSelect from '@/components/ThirdIndicatorSelect';

const { Option } = Select;

interface Iprops {
  selected: string;
  detail: [];
}

const App: React.FC<Iprops> = (props) => {
  const [select, setSelect] = useState<any>(undefined);
  let t: any = [];
  for (let i = 0; i < props.detail.length; i++) {
    let tt: any = props.detail[i];
    if (props.selected == tt.firstIndicator) {
      t = tt.content;
    }
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelect(value);
  };

  return (
    <>
      <br />
      <span style={{ fontSize: '18px' }}>二级指标：</span>
      <Select
        defaultValue="全部"
        style={{ width: 120, marginLeft: '10px', marginTop: '20px' }}
        onChange={handleChange}
      >
        {t.map((item: any) => {
          return (
            <Option value={item.secondIndicator} key={nanoid()}>
              {item.secondIndicator}
            </Option>
          );
        })}
      </Select>
      <ThirdIndicatorSelect selected={select} detail={t} />
    </>
  );
};

export default App;
