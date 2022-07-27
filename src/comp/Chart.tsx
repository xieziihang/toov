import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Table } from 'antd';
import React, { useState, useEffect } from 'react';

type DataSourceType = {
  sid: React.Key;
  rootTitle?: string;
  secondTitle?: string;
  thirdTitle?: string;
  thirdInitScore?: string;
  fourthTitle?: string;
  fourthScore?: string;
  selfApply?: string;
  rowMemo?: string;
};

export default (props) => {
  const oriData = props.data.map((item) => {
    let obj: DataSourceType = {
      sid: '',
    };
    obj.sid = item.sid;
    switch (item.rootTitle) {
      case 'P':
        obj.rootTitle = '体育模型';
        break;
      case 'L':
        obj.rootTitle = '劳育模型';
        break;
      case 'M':
        obj.rootTitle = '德育模型';
        break;
      case 'D':
        obj.rootTitle = '扣分模型';
        break;
      case 'T':
        obj.rootTitle = '德创模型';
        break;
      case 'M':
        obj.rootTitle = '美育模型';
        break;
    }
    obj.secondTitle = item.secondTitle;
    obj.thirdTitle = item.thirdTitle;
    obj.fourthTitle = item.fourthTitle;
    obj.thirdInitScore = item.thirdInitScore;
    obj.fourthScore = item.fourthScore;
    obj.selfApply = item.selfApply;
    obj.rowMemo = item.rowMemo;
    // console.log(obj);
    return obj;
  });
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  useEffect(() => {
    setDataSource(oriData);
    setEditableRowKeys(props.data.map((item) => item.sid));
  }, [props.data]);

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    oriData.map((item) => item.sid),
  );

  const [selectRowKeys, setSelectRowKeys] = useState<number[]>([]);
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '操作',
      valueType: 'option',
      width: 80,
      render: () => {
        return null;
      },
    },
    {
      title: '数据ID',
      dataIndex: 'sid',
      width: 120,
      readonly: true,
    },
    {
      title: '一级指标',
      dataIndex: 'rootTitle',
      width: 120,
      valueType: 'select',
      valueEnum: {
        体育模型: {
          text: '体育模型',
        },
        劳育模型: {
          text: '劳育模型',
        },
        德育模型: {
          text: '德育模型',
        },
        扣分模型: {
          text: '扣分模型',
        },
        德创模型c: {
          text: '德创模型',
        },
        美育模型: {
          text: '美育模型',
        },
      },
    },
    {
      title: '二级指标',
      width: 180,
      key: 'secondTitle',
      dataIndex: 'secondTitle',
      valueType: 'select',
      valueEnum: {
        劳动教育加分: {
          text: '劳动教育加分',
        },
        劳动教育基础分: {
          text: '劳动教育基础分',
        },
      },
    },
    {
      title: '三级指标',
      width: 180,
      key: 'thirdTitle',
      dataIndex: 'thirdTitle',
      valueType: 'select',
      valueEnum: {
        五星文明寝室: {
          text: '五星文明寝室',
        },
        五星文明寝室寝室长: {
          text: '五星文明寝室寝室长',
        },
        五星文明楼栋: {
          text: '五星文明楼栋',
        },
        五星文明楼栋寝室长: {
          text: '五星文明楼栋寝室长',
        },
        优良学风寝室: {
          text: '优良学风寝室',
        },
      },
    },
    {
      title: '四级指标',
      dataIndex: 'fourthTitle',
      width: 200,
    },
    {
      title: '初始分',
      dataIndex: 'thirdInitScore',
      width: 80,
    },
    {
      title: '赋分',
      dataIndex: 'fourthScore',
      width: 80,
    },
    {
      title: '是否由学生申报',
      dataIndex: 'selfApply',
      width: 120,
      valueType: 'select',
      valueEnum: {
        是: {
          text: '是',
        },
        否: {
          text: '否',
        },
      },
    },
    {
      title: '情况说明',
      dataIndex: 'rowMemo',
      width: 200,
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        tableAlertRender={false}
        rowSelection={{
          // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
          // 注释该行则默认不显示下拉选项
          selectedRowKeys: selectRowKeys,
          columnTitle: '修改',
          columnWidth: 50,
          preserveSelectedRowKeys: false,
        }}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          onChange: (page) => console.log(page),
        }}
        style={{
          width: 1200,
          margin: '0 auto',
          right: -8,
          position: 'relative',
        }}
        headerTitle="可编辑表格"
        columns={columns}
        rowKey="sid"
        scroll={{
          y: 800,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          position: 'top',
          record: () => ({
            sid: Date.now(),
          }),
        }}
        toolBarRender={() => {
          return [
            <Button
              type="primary"
              key="save"
              onClick={() => {
                // dataSource 就是当前数据，可以调用 api 将其保存
                console.log(dataSource);
              }}
            >
              保存数据
            </Button>,
          ];
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.delete];
          },
          onValuesChange: (record, recordList) => {
            if (record?.sid) setSelectRowKeys([...selectRowKeys, +record.sid]);
            console.log(record, 'zzz');
            setDataSource(recordList);
          },
          onChange: setEditableRowKeys,
        }}
      />
      {/* <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '80%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard> */}
    </>
  );
};
