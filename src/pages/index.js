import React, { useState } from "react";
import Link from '@docusaurus/Link';
import { Select, Space, ConfigProvider } from 'antd';
import SearchBar from '@theme/SearchBar';
import Layout from '@theme/Layout';

const provinceData = ['中国', 'Jiangsu'];
const cityData = {
  '中国': ['江西', '广东', '北京'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};



import styles from './index.module.css'
export default () => {

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0])

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };


  return (
    <div style={{ backgroundColor: "rgb(249, 249, 249)" }}>
      <Layout>
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#74BC1F',
          },
        }} >
          <div className={styles.selectBox}>
            <div className={styles.centerBox}>
              <h1 className={styles.seleH}>ROCK Documentation</h1>
              <p className={styles.seleP}>Single Board Computer</p>
              <Space wrap>
                <Select
                  placement='bottomRight'
                  bordered='false'
                  defaultValue={provinceData[0]}
                  style={{
                    width: 200,
                  }}
                  onChange={handleProvinceChange}
                  options={provinceData.map((province) => ({
                    label: province,
                    value: province,
                  }))}
                />
                <Select
                  bordered='false'
                  style={{
                    width: 200,
                  }}
                  value={secondCity}
                  onChange={onSecondCityChange}
                  options={cities.map((city) => ({
                    label: city,
                    value: city,
                  }))}
                />
              </Space>
              <div style={{ float: 'right' }}>
              </div>
              <SearchBar />
            </div>
          </div>
          <div className={styles.list}>
            <h1>ROCK 5 Model B</h1>
            <ul className={styles.card} >
              <li>
                <div className={styles.goTo}>
                  <h1 className={styles.goH1}>Hardware</h1>
                  <div className={styles.goToIcon}></div>
                </div>
                <p>A text about getting started，A text about getting started</p>
              </li>
              <li>
                <div className={styles.goTo}>
                  <h1 className={styles.goH1}>Driver Tools</h1>
                  <div className={styles.goToIcon}></div>
                </div>
                <p>A text about getting started，A text about getting started</p>
              </li>
              <li>
              </li>
              <li>
                <div className={styles.goTo}>
                  <h1 className={styles.goH1}>Hardware</h1>
                  <div className={styles.goToIcon}></div>
                </div>
                <p>A text about getting started，A text about getting started</p>
              </li>
              <li>
                <div className={styles.goTo}>
                  <h1 className={styles.goH1}>Driver Tools</h1>
                  <div className={styles.goToIcon}></div>
                </div>
                <p>A text about getting started，A text about getting started</p>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </ConfigProvider>
      </Layout>
    </div>
  )
}