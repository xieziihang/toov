import { Radio } from 'antd';
import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [rootTitleList, setRootTitleList] = useState([]);
  const [value, setValue] = useState(0);
  const tRootTitleList = [];
  for (let i = 0; i < props.rootTitle.length; i++) {
    let rt = props.rootTitle[i];
    for (let attribute in rt) {
      let obj = Object.assign({}, { name: rt[attribute], value: attribute });
      tRootTitleList.push(obj);
    }
  }
  useEffect(() => {
    setRootTitleList(tRootTitleList);
  }, [props.rootTitle]);
  const onChange = (e) => {
    props.setSelectedRootTitle(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {rootTitleList.map((t) => {
        return (
          <Radio value={t.value} key={t.value} disabled={props.dis}>
            {t.name.substr(0, 2)}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default App;
