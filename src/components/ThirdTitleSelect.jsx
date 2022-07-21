import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const onSearch = (value) => {
  console.log('search:', value);
};

const App = (props) => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
    props.setSelectedThirdTitle(value);
  };

  return (
    <Select
      size="small"
      showSearch
      placeholder="请选择三级指标"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
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
