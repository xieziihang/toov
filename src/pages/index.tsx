import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Sheet } from '@/components/Char';

export default function IndexPage() {
  fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/6420f338-9169-4b1f-b0f0-35f1a8295e67.json',
  )
    .then((res) => res.json())
    .then((data) => {
      ReactDOM.render(
        <Sheet data={data} />,
        document.getElementById('container'),
      );
    });
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div id="container"></div>
    </div>
  );
}
