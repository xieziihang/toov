import { Divider, Steps } from 'antd';
import './Guide.css';
import CollegeSelect from '@/components/origin/CollegeSelect';
import RootTitleRadio from '@/components/origin/RootTitleRadio';
import ModelDataTypeRadio from '@/components/origin/modelDataTypeRadio';
import SecondTitleSelect from '@/components/origin/SecondTitleSelect';
import ThirdTitleSelect from '@/components/origin/ThirdTitleSelect';
import React, { useState } from 'react';
const { Step } = Steps;

const Guide = (props) => {
  return (
    <>
      <p
        style={{
          margin: '0 auto',
          width: '1200px',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        数据筛选
      </p>
      <div id="container">
        <div id="header-container">
          <div id="header-decoration">
            <div className="header-decoration-circle" id="first-circle">
              1
            </div>
            <div className="header-decoration-line"></div>
            <div className="header-decoration-circle" id="second-circle">
              2
            </div>
            <div className="header-decoration-line"></div>
            <div className="header-decoration-circle" id="third-circle">
              3
            </div>
            <div id="header-describtion">
              <p id="fir">选择学校</p>
              <p id="sec">大类指标</p>
              <p id="thir">细分筛选</p>
            </div>
          </div>
          <div id="header-controller">
            <div id="header-controller-left">
              学校：
              <CollegeSelect
                id="header-controller-left-select"
                setBatchNo={props.setBatchNo}
              />
            </div>
            <div id="header-controller-middle">
              <div>
                模型选择：
                {props.batchNo ? (
                  <ModelDataTypeRadio
                    modelDataType={props.modelDataType}
                    setSelectedDataType={props.setSelectedDataType}
                  />
                ) : (
                  <ModelDataTypeRadio
                    modelDataType={[{ 基础: '基础' }, { 科创: '科创' }]}
                    dis={true}
                  />
                )}
              </div>
              <div style={{ marginTop: '20px' }}>
                指标分类：
                {props.batchNo ? (
                  <RootTitleRadio
                    rootTitle={props.rootTitle}
                    setSelectedRootTitle={props.setSelectedRootTitle}
                  />
                ) : (
                  <RootTitleRadio
                    rootTitle={[
                      {
                        P: '体育模型',
                      },
                      {
                        L: '劳育模型',
                      },
                      {
                        M: '德育模型',
                      },
                      {
                        D: '扣分模型',
                      },
                    ]}
                    dis={true}
                  />
                )}
              </div>
            </div>
            <div id="header-controller-right">
              <div>
                二级指标：
                <SecondTitleSelect
                  secondTitle={props.secondTitle}
                  setSelectedSecondTitle={props.setSelectedSecondTitle}
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                三级指标：
                <ThirdTitleSelect
                  thirdTitle={props.thirdTitle}
                  setSelectedThirdTitle={props.setSelectedThirdTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
