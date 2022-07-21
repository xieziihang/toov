import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

// const onSearch = (value) => {
//   console.log('search:', value);
// };

const App = (props) => {
  console.log(props.secondTitle, 'z');
  const onChange = (value) => {
    props.setSelectedSecondTitle(value);
    // console.log(`selected ${value}`);
  };
  return (
    <Select
      size="small"
      showSearch
      placeholder="请选择二级指标"
      optionFilterProp="children"
      onChange={onChange}
      // onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      {props.secondTitle
        ? props.secondTitle.map((title) => {
            return <Option value={title}>{title}</Option>;
          })
        : null}
    </Select>
  );
};

export default App;
