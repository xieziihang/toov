import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const App = () => (
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
    <Option value="jack">浙大城市学院</Option>
    <Option value="lucy">宁波理工</Option>
    <Option value="tom">中药大学</Option>
  </Select>
);

export default App;
