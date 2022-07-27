import { Select } from 'antd';
import React, { useState, useEffect } from 'react';
const { Option } = Select;

const App = (props) => {
  const [collegeInfos, setCollegeInfos] = useState([]);
  const onChange = (value) => {
    props.setBatchNo(value);
  };
  const onSearch = (value) => {
    props.setBatchNo(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const responses = await fetch(
        '/dapi/v2/tool/data_management_v2_service/retrieve_all_school',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await responses.json();
      let infoList = [];
      for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        for (const batchNoInfo in obj) {
          const collegeInfo = Object.assign(
            {},
            { batchNo: batchNoInfo, schoolName: obj[batchNoInfo] },
          );
          infoList.push(collegeInfo);
        }
      }
      setCollegeInfos(infoList);
    };
    fetchData();
  }, []);

  return (
    <Select
      size="small"
      showSearch
      placeholder="请选择学校"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      {collegeInfos.length
        ? collegeInfos.map((collegeInfo) => {
            return (
              <Option value={collegeInfo.batchNo}>
                {collegeInfo.schoolName}
              </Option>
            );
          })
        : null}
    </Select>
  );
};

export default App;
