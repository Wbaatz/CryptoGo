import React from 'react'
import  {Outlet,NavLink} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from '../components/Footer'


import { Layout, Typography, Space } from 'antd';
const Root = () => {
  return (
    <div className="app">
 <div className="navbar">
      <Navbar/>

    </div>
        <div className='main'>
            <Layout>
            <div className='routes'>
            
              <Outlet/>
            
          
            </div>
            </Layout>
          
     


   <div className="footer">
       {/* <Footer/> */}
       <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
        Cryptoverse <br/>
        All Rights Reserved
       </Typography.Title>
       <Space>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/exchanges'>Exchanges</NavLink>
        <NavLink to='/news'>News</NavLink>
       </Space>
   </div>
   </div>
     

    </div>
  )
}

export default Root


    