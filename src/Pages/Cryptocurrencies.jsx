import React,{useState,useEffect} from 'react'
import millify from 'millify';
import {NavLink} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';
import {useGetCryptosQuery} from '../services/cryptoApi';
const Cryptocurrencies = ({flag}) => {
  const count=flag ?10:100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
const [searchTerm,setSearchTerm]=useState('');




  useEffect(() => {
    if (data?.data?.coins) {
      // Update cryptos state when data is available
      // setCryptos(data.data.coins);
      const filteredData=data?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setCryptos(filteredData);
    }
  }, [data,searchTerm]);

if(isFetching) return 'loading...';
console.log(cryptos)
  return (
   <>
   {!flag &&(
    <div className="search-crypto">
<input placeholder='Search cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)} />
</div>
   )}




   <Row gutter={[32,32]} className='crypto-card-container'>
    {cryptos.map((currency)=>(
      <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
       <NavLink to={`/crypto/${currency.uuid}`}>

        <Card title={`${currency.rank}. ${currency.name}`} 
              extra={<img className='crypto-image' src={currency.iconUrl} />}
              hoverable
        >
             <p>Price: {millify(currency.price)}</p>
             <p>Market Cap: {millify(currency.marketCap)}</p>
             <p>Daily Change: {millify(currency.change)}%</p>


        </Card>


       </NavLink>
      </Col>
    ))}
   </Row>
   </>
  )
}

export default Cryptocurrencies