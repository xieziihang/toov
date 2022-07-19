import React, { useEffect, useState } from 'react';
import CollegeSelect from '@/components/CollegeSelect';
import Search from '@/components/Search';
import { TableSheet } from '@antv/s2';

export default function index() {
  const [data, setData] = useState([]);

  fetch('/college/data')
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'zzz');
      const container: any = document.getElementById('container');
      const s2DataConfig = {
        fields: {
          columns: [
            'collegeID',
            'collegeName',
            'model',
            'firstIndicator',
            'secondaryIndicator',
            'thirdIndicator',
            'awards',
            'point',
            'level',
            'weightOfLevel',
            'team',
            'personalTeamRank',
            'personalWeightOfteam',
            'condition',
          ],
        },
        meta: [
          {
            field: 'collegeID',
            name: '学校ID',
          },
          {
            field: 'collegeName',
            name: '学校名称',
          },
          {
            field: 'model',
            name: '指标分类',
          },
          {
            field: 'firstIndicator',
            name: '模型选择',
          },

          {
            field: 'secondaryIndicator',
            name: '二级指标',
          },
          {
            field: 'thirdIndicator',
            name: '三级指标',
          },
          {
            field: 'awards',
            name: '奖项',
          },
          {
            field: 'point',
            name: '分数',
          },
          {
            field: 'level',
            name: '级别',
          },
          {
            field: 'weightOfLevel',
            name: '级别权重',
          },
          {
            field: 'secondaryIndicator',
            name: '二级指标',
          },
          {
            field: 'team',
            name: '团队个人',
          },
          {
            field: 'personalTeamRank',
            name: '队内排名',
          },
          {
            field: 'personalWeightOfteam',
            name: '团队个人权重',
          },
          {
            field: 'condition',
            name: '情况说明',
          },
        ],
        data,
      };

      const s2Options = {
        width: 1600,
        height: 800,
        showSeriesNumber: true,
      };
      const s2 = new TableSheet(container, s2DataConfig, s2Options);

      s2.render();
    });
  return (
    <>
      <CollegeSelect />
      <Search />
      <div
        id="container"
        style={{ marginLeft: '50px', marginTop: '50px' }}
      ></div>
    </>
  );
}
