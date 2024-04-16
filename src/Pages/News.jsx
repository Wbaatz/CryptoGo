import React, { useState, useEffect } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ flag }) => {
  
  const count=flag ?10:100;
  const { data:d1 } = useGetCryptosQuery(count);
  const [cryptos1, setCryptos1] = useState([]);



  const [newsCategory,setNewsCategory]=useState('cryptocurrency');
  const { data:d, isFetching} = useGetCryptoNewsQuery({Search:newsCategory});
  const [cryptos, setCryptos] = useState([]);


  useEffect(() => {
    if (d1?.data?.coins) {
      // Update cryptos state when data is available
      setCryptos1(d1.data.coins);
    
     
    }
  },d1);
  console.log(cryptos1)



  useEffect(() => {
    if (d?.data) {
     
      setCryptos(d?.data);
    }

  }, [d,newsCategory]);

  console.log(cryptos)

if(flag){
 if(isFetching) return "loading..."
}



const demoImg='http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'
  return (
    <div>
    <Row gutter={[24,24]}>
     {!flag &&(
      <Col span={24}>
        <Select
          showSearch
          className='select-news'
          placeholder="Select a crypto"
          optionFilterProp='children'
          onChange={(value)=>setNewsCategory(value)}
          filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLocaleLowerCase())>=0}


        >
           <Option value="Cryptocurrency">Cryptocurrency</Option>
           {d1?.data?.coins.map((coin)=> <Option value={coin.name}>{coin.name}</Option>)}
        </Select>
      </Col>
     )}


    {cryptos.slice(0, (flag ? 6 : 100)).map((item,i) => (
     <Col xs={24} sm={12} lg={8} key={i}>
      <Card hoverable className="news-card">
       
       <a href={item.url} target="_blank" rel="noreferrer">
        <div className="news-image-container">
          <Title classname=" news-title" level={5}>
            {item.title}
          </Title>
          <img height="70px" width="70px" src={item.image||demoImg}/>
        </div>
       </a>
       <p1>
       {item.excerpt.replace(/<[^>]+>/g, '') >100 ? `${item.excerpt.substring(0,100).replace(/<[^>]+>/g, '')}...` : item.excerpt.replace(/<[^>]+>/g, '')} 
       </p1>
       <div className='provider-container'>
         <div>
          <br></br>
          <Text>{item.relativeTime}</Text>
         </div>
       </div>
        

          

      </Card>
     </Col>
    ))}
    </Row>
    </div>
  );
};

export default News;
