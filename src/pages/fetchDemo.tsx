import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { request } from 'umi';

export default function index() {
  useEffect(() => {
    const fetchData = async () => {
      const responses = await fetch(
        '/dapi/v2/tool/data_management_v2_service/retrieve_full_items',
        {
          method: 'POST',
        },
      );
      const data = await responses.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>你好，世界</div>
    </>
  );
}
