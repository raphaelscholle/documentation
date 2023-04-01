import React, { useState } from "react";
import Link from '@docusaurus/Link';
import { Select, Space, ConfigProvider } from 'antd';
import SearchBar from '@theme/SearchBar';
import Layout from '@theme/Layout';
import styles from './index.module.css'
import { getDocs } from "../utils/getDocs";

import { getProduct_Line, getProduct_Name, getProduct_doc } from "../utils/getPriducts";


// const provinceData = ['中国', 'Jiangsu'];
// const cityData = {
//   '中国': ['江西', '广东', '北京'],
//   Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// };

export default () => {
  const homeDoc = getDocs().Home.sidebar_custom_props.product_docs
  const provinceData = getProduct_Line(homeDoc)
  const cityData = getProduct_Name(homeDoc)

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0])

  const element = getProduct_doc(homeDoc, secondCity)

  const handleProvinceChange = (value) => {
    console.log(value);
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
              <h1 className={styles.seleH}>Radxa Documentation Center</h1>
              <p className={styles.seleP}>Choose a product</p>
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
            <h1>
              {secondCity === "ROCK 5B" ? 'ROCK 5 Model B' : secondCity === "ROCK 5A" ? 'ROCK 5 Model A' : nill}
            </h1>
            <ul className={styles.card} >
              {
                element.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link to={item.url}>
                        <div className={styles.goTo}>
                          <h1 className={styles.goH1}>{item.title}</h1>
                          <div className={styles.goToIcon}></div>
                        </div>
                        <p>{item.info}</p>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </ConfigProvider>
      </Layout>
    </div>
  )
}
