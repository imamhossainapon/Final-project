import React, { useState } from 'react';
import Cover from '../../shared/Cover/Cover';
import img from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import Order from './order/Order';
import { useParams } from 'react-router';

const OurShop = () => {
  let categories =['salad','pizza','soup','dessert','drinks']
  let {Cd}=useParams()
  let initValue = categories.indexOf(Cd)
    const [tabIndex, setTabIndex] = useState(initValue);
    let [menu,setMenu]=useMenu()
    let Salad = menu.filter(item=>item.category === 'salad')
    let pizza= menu.filter(item=>item.category === 'pizza')
    let soup = menu.filter(item=>item.category === 'soup')
    let dessert= menu.filter(item=>item.category === 'dessert')
    let drinks = menu.filter(item=>item.category === 'drinks')


  
    
    return (
        <div>

            <Cover img={img} h1={'OUR SHOP'} p={'Would you like to try a dish?'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>pizza</Tab>
        <Tab>soups</Tab>
        <Tab>desserts</Tab>
        <Tab>drinks</Tab>


      </TabList>
      
      <TabPanel><Order   key={Salad._id}  items={Salad}></Order>  </TabPanel>
      <TabPanel><Order  key={pizza._id}  items={pizza}></Order> </TabPanel>
      <TabPanel><Order  key={soup._id} items={soup}></Order> </TabPanel>
      <TabPanel><Order key={dessert._id} items={dessert}></Order> </TabPanel>
      <TabPanel><Order  key={drinks._id} items={drinks}></Order></TabPanel>
     
     
    </Tabs>
        
        </div>
    );
};

export default OurShop;