import { Select } from 'antd';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import ModelRadio from '@/components/ModelRadio';
import FirstIndicatorRadio from '@/components/FirstIndicatorRadio';

const { Option } = Select;

const onSearch = (value: string) => {
  console.log('search:', value);
};

const App: React.FC = () => {
  const [college, setCollege] = useState([]);
  const [collegeId, setCollegeId] = useState<any>(1);
  const [modelAndIndicator, setModelAndIndicator] = useState<any>();
  const [indicatorDetail, setIndicatorDetail] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const responses = await fetch('/college/get');
      const data = await responses.json();
      setCollege(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const responses = await fetch(`/college/gett/${collegeId}`);
      const data = await responses.json();
      setModelAndIndicator(data);
    };
    fetchData();
  }, [collegeId]);

  useEffect(() => {
    const fetchData = async () => {
      const responses = await fetch(`/college/get/${collegeId}/detail`);
      const data = await responses.json();
      setIndicatorDetail(data);
      console.log(data, 'sss');
    };
    fetchData();
  }, [collegeId]);

  const onChange = (value: string) => {
    setCollegeId(value);
  };

  return (
    <div style={{ marginLeft: '50px', marginTop: '60px', fontSize: '18px' }}>
      <Select
        defaultValue={'浙大城市学院'}
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        size="large"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
      >
        {college.map((c: any) => (
          <Option key={nanoid()} value={c.id}>
            {c.name}
          </Option>
        ))}
      </Select>
      <br />
      <br />
      <span>指标分类</span>
      <br />
      {modelAndIndicator !== undefined ? (
        <ModelRadio list={modelAndIndicator.model} />
      ) : null}
      <br />
      <br />
      <span>模型选择</span>
      <br />
      {modelAndIndicator !== undefined ? (
        <FirstIndicatorRadio
          list={modelAndIndicator.firstIndicator}
          detail={indicatorDetail}
        />
      ) : null}
      <br />
    </div>
  );
};

export default App;
