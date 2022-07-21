import { Radio } from 'antd';
import React, { useEffect, useState } from 'react';

const App = (props) => {
  console.log(props.dis, '##');
  const [modelData, setModelData] = useState([]);
  const [value, setValue] = useState(0);
  // console.log(props.modelDataType, 'sss');
  let modelDataTypes = props.modelDataType;
  const modelDataTypeNames = [];
  for (let i = 0; i < modelDataTypes.length; i++) {
    let modelDataTypeItem = modelDataTypes[i];
    for (const attribute in modelDataTypeItem) {
      modelDataTypeNames.push(attribute);
    }
  }
  useEffect(() => {
    setModelData(modelDataTypeNames);
  }, [props.modelDataType]);
  // console.log(modelData, 'tian');
  // console.log(modelDataTypeNames, 'jkl');
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    props.setSelectedDataType(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {modelData.map((t) => {
        return (
          <Radio value={t} key={t} disabled={props.dis}>
            {t}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default App;
