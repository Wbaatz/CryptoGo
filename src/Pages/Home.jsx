import React from 'react'
import millify from 'millify';
import { Typography,Row,Col,Statistic,Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News'
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
const {Title}=Typography;
const Home = () => {
  const {data,isfetching}=useGetCryptosQuery(10);

 



const globalStats=data?.data?.stats;
//very awesome feature. put this in video as well.
if(!globalStats?.total) return <Loader/>;
   console.log(data)

  return (
    <>
  

<Title level={2} className='heading'>Global Crypto Stats</Title>
<Row>
   <Col span={12}><Statistic title="Total Crptocurrencies" value={globalStats?.total}/></Col>
  <Col span={12}><Statistic title="Total Exchanges" value={globalStats?.totalExchanges}/></Col>
  <Col span={12}><Statistic title="Total Market Cup" value={millify(globalStats?.totalMarketCap)}/></Col>
  <Col span={12}><Statistic title="Total 24th Volume" value={millify(globalStats?.total24hVolume)}/></Col>
  <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)}/></Col>

</Row>

   
     <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world  </Title> 
      <Title level={3} className='show-more'><NavLink to="/cryptocurrencies">Show more</NavLink> </Title> 
     </div>
    <Cryptocurrencies flag={true}/>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest Crypto News </Title> 
      <Title level={3} className='show-more'><NavLink to="/news">Show more</NavLink> </Title> 
     </div>
    <News flag={true}/>
    </>
  )
}

export default Home