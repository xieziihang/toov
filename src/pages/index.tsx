import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Chart from '@/components/Chart';
import res from './basic-table-mode.json.json';
import Guide from '@/components/Guide';
import CollegeSelect from '@/components/CollegeSelect';

export default function index() {
  return (
    <>
      <Guide />
      {/* <CollegeSelect />
      <div
        id="container"
        style={{ position: 'absolute', left: '50px', marginTop: '30px' }}
      >
    </div> */}
      <div
        style={{
          width: '100%',
          height: '1400px',
          position: 'relative',
          marginTop: '50px',
        }}
      >
        <div
          style={{
            paddingTop: '30px',
            position: 'absolute',
            width: '1200px',
            height: '1000px',
            left: '50%',
            paddingLeft: '50px',
            paddingRight: '50px',
            backgroundColor: '#fff',
            marginLeft: '-600px',
          }}
        >
          <Chart data={res}></Chart>
        </div>
      </div>
    </>
  );
}
