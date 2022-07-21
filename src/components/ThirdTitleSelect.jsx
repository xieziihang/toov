import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const App = (props) => {
  const onChange = (value) => {
    props.setSelectedThirdTitle(value);
  };

  return (
    <Select
      size="small"
      showSearch
      placeholder="请选择三级指标"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      {props.thirdTitle
        ? props.thirdTitle.map((title) => {
            return <Option value={title}>{title}</Option>;
          })
        : null}
    </Select>
  );
};

export default App;
