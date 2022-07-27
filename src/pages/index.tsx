import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Chart from '../comp/Chart';
import Guide from '@/components/Guide';

export default function index() {
  const [dataInfo, setData] = useState([]);
  useEffect(() => {
    const asyncFunc = async function () {
      const res = await fetch(
        '/dapi/v2/tool/data_management_v2_service/retrieve_full_items',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await res.json();
      setData(data);
    };
    asyncFunc();
  }, []);

  return (
    <>
      <Guide />
      <div style={{ height: '80%', overflow: 'scroll', marginTop: '20px' }}>
        <Chart data={dataInfo} />
      </div>
    </>
  );
}
