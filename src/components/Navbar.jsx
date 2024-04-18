import React ,{useState,useEffect} from 'react'
import {Button,Menu,Typography,Avatar} from 'antd';
import { NavLink } from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'



import icon from '../images/cryptogo.png';
const Navbar = () => {
  const [activeMenu, setactiveMenu] = useState(true)
  const [screenSize, setscreenSize] = useState(true)


  useEffect(()=>{
    const handleResize=()=> setscreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);

    handleResize();

    return()=> window.removeEventListener('resize',handleResize);
  },[]);


useEffect(()=>{

if(screenSize<768){
  setactiveMenu(false);
} else{
  setactiveMenu(true);
}


},[screenSize])


  return (
    <div className='nav-container'>
        <div  className='logo-container'>
      <Avatar size="large" src={icon}/>
      <Typography.Title level={2} className='logo'>
        <NavLink  to='/'>Crytoverse</NavLink>
      </Typography.Title>

      <Button className="menu-control-container" onClick={()=>setactiveMenu(!activeMenu)}  >
            <MenuOutlined/>
      </Button>
        </div>
       
   {activeMenu && (
 <Menu theme="dark">
 <Menu.Item icon={<HomeOutlined/>}>
   <NavLink to="/">Home</NavLink>
 </Menu.Item>
 <Menu.Item icon={<FundOutlined/>}>
   <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
 </Menu.Item>
 <Menu.Item icon={<BulbOutlined/>}>
   <NavLink to="/news">News</NavLink>
 </Menu.Item>

</Menu>
   )}
       
        
        </div>
  )
}

export default Navbar