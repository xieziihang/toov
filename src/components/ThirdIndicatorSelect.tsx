import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const { Option } = Select;

interface Iprops {
  selected: string;
  detail: [];
}

const App: React.FC<Iprops> = (props) => {
  console.log('SecondIndicatorSelect接收到了', props.selected, props.detail);
  const [selected, setSelected] = useState<any>();
  const [list, setList] = useState<any>([]);
  const [defaultS, setDefaultS] = useState('全部');
  let t: any = [];
  useEffect(() => {
    for (let i = 0; i < props.detail.length; i++) {
      let tt: any = props.detail[i];
      if (props.selected == tt.secondIndicator) {
        t = tt.content;
      }
      setList(t);
    }
    return () => {
      handleChange('全部');
    };
  }, [props.selected]);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelected(value);
  };

  return (
    <>
      <br />
      <span style={{ fontSize: '18px' }}>三级指标：</span>
      <Select
        allowClear={true}
        defaultValue={list.length ? list[0].thirdIndecator : '全部'}
        style={{ width: 120, marginLeft: '10px', marginTop: '20px' }}
        onChange={handleChange}
      >
        <Option value="全部">全部</Option>
        {list.map((item: any) => {
          return (
            <Option value={item.thirdIndecator} key={nanoid()}>
              {item.thirdIndecator}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

export default App;
