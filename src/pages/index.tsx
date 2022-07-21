import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SciChart from '@/components/SciChart';
import BaseChart from '@/components/BaseChart';
import Guide from '@/components/Guide';
import CollegeSelect from '@/components/CollegeSelect';

export default function index() {
  const [batchNo, setBatchNo] = useState('');
  const [modelDataType, setModelDataType] = useState([]);
  const [selectedDateType, setSelectedDataType] = useState('');
  const [rootTitle, setRootTitle] = useState([]);
  const [selectedRootTitle, setSelectedRootTitle] = useState('');
  const [secondTitle, setSecondTitle] = useState([]);
  const [selectedSecondTitle, setSelectedSecondTitle] = useState('');
  const [thirdTitle, setThirdTitle] = useState([]);
  const [selectedThirdTitle, setSelectedThirdTitle] = useState('');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (batchNo.length) {
      const modelDataUrl =
        '/dapi/v2/tool/data_management_v2_service/retrieve_model_data_type';
      const rootTitleUrl =
        '/dapi/v2/tool/data_management_v2_service/retrieve_model_type';
      const fetchData = async (url, info) => {
        const responses = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            batchNo: batchNo,
          }),
        });
        const data = await responses.json();
        if (info === 'model') setModelDataType(data);
        else if (info === 'rootTitle') {
          setRootTitle(data);
        }
      };
      fetchData(modelDataUrl, 'model');
      fetchData(rootTitleUrl, 'rootTitle');
    }
  }, [batchNo]);

  useEffect(() => {
    console.log(selectedDateType === '基础', 'ssssssss');
  }, [selectedDateType]);
  useEffect(() => {
    if (selectedDateType.length && selectedRootTitle.length) {
      const fetchData = async () => {
        const responses = await fetch(
          '/dapi/v2/tool/data_management_v2_service/retrieve_model_second_item',
          {
            method: 'POST',
            body: JSON.stringify({
              batchNo: batchNo,
              modelDataType: selectedDateType,
              root: selectedRootTitle,
            }),
          },
        );
        const data = await responses.json();
        setSecondTitle(data);
        // console.log(data);
      };
      fetchData();
    }
  }, [selectedDateType, selectedRootTitle]);

  useEffect(() => {
    if (
      selectedDateType.length &&
      selectedRootTitle.length &&
      selectedSecondTitle.length
    ) {
      const fetchData = async () => {
        const responses = await fetch(
          '/dapi/v2/tool/data_management_v2_service/retrieve_model_third_item',
          {
            method: 'POST',
            body: JSON.stringify({
              batchNo: batchNo,
              modelDataType: selectedDateType,
              root: selectedRootTitle,
              secondItem: selectedSecondTitle,
            }),
          },
        );
        const data = await responses.json();
        setThirdTitle(data);
      };
      fetchData();
    }
  }, [selectedDateType, selectedRootTitle, selectedSecondTitle]);

  useEffect(() => {
    if (
      selectedDateType.length &&
      selectedRootTitle.length &&
      selectedSecondTitle.length &&
      selectedThirdTitle
    ) {
      const fetchData = async () => {
        const responses = await fetch(
          '/dapi/v2/tool/data_management_v2_service/retrieve_full_items',
          {
            method: 'POST',
            body: JSON.stringify({
              batchNo: batchNo,
              modelDataType: selectedDateType,
              root: selectedRootTitle,
              secondItem: selectedSecondTitle,
              thirdItem: selectedThirdTitle,
            }),
          },
        );
        const data = await responses.json();
        setChartData(data);
        console.log(data, 'chartData');
      };
      fetchData();
    }
  }, [
    selectedDateType,
    selectedRootTitle,
    selectedSecondTitle,
    selectedThirdTitle,
  ]);

  useEffect(() => {
    if (chartData.length) {
      if (selectedDateType === '基础') {
        ReactDOM.render(
          <BaseChart data={chartData} />,
          document.getElementById('containerzzz'),
        );
      } else {
        ReactDOM.render(
          <SciChart info={chartData} syn={true} />,
          document.getElementById('containerzzz'),
        );
      }
    }
  }, [selectedDateType, chartData]);

  return (
    <>
      <Guide
        setBatchNo={setBatchNo}
        batchNo={batchNo}
        modelDataType={modelDataType}
        rootTitle={rootTitle}
        setSelectedDataType={setSelectedDataType}
        setSelectedRootTitle={setSelectedRootTitle}
        secondTitle={secondTitle}
        setSelectedSecondTitle={setSelectedSecondTitle}
        thirdTitle={thirdTitle}
        setSelectedThirdTitle={setSelectedThirdTitle}
      />
      <div
        style={{
          width: '100%',
          height: '1400px',
          position: 'relative',
          marginTop: '50px',
        }}
      >
        <div
          id="containerzzz"
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
          {/* {selectedDateType === '基础' ? (
            <BaseChart data={chartData}></BaseChart>
          ) : (
            <SciChart info={chartData}></SciChart>
          )} */}
        </div>
      </div>
    </>
  );
}
