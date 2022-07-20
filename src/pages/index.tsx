import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Chart from '@/components/Chart';
import res from './basic-table-mode.json.json';
import CollegeSelect from '@/components/CollegeSelect';

export default function index() {
  return (
    <>
      <CollegeSelect />
      <div
        id="container"
        style={{ position: 'absolute', left: '50px', marginTop: '30px' }}
      >
        <Chart data={res}></Chart>
      </div>
    </>
  );
}
