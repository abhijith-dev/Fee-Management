import React from 'react'
import {Route,Routes} from 'react-router-dom'
import BusDetails from './components/BusDetails'
import Dashboard from './components/Dashboard'
import FeeEntry from './components/FeeEntry'
import FeesManager from './components/FeesManager'
import Header from './components/Header'
import Bus from './components/inner-components/Bus'
import Entry from './components/inner-components/Entry'
import View from './components/inner-components/View'
import Navigation from './components/Navigation'
import Info from './components/inner-components/Info'
import {updateFireBaseData} from './actions'
import {useDispatch} from  'react-redux'
import { syncFireStoreToLocalState } from './utils'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
export default function DashboardRouting() {
   const dispatch = useDispatch()
   const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: 'scale',
    color:'red'
  };
   React.useEffect(()=>{
     const sync = async()=>{
      let data = await syncFireStoreToLocalState()
      dispatch(updateFireBaseData(data))
     }
     sync()
   },[])
    return (
       <>
        <Provider template ={AlertTemplate} {...options}>
        <Header />
        <Navigation />
        <Routes>
          <Route exact path ="/" element ={ <Dashboard />} />
          <Route exact path ="/feesEntry" element ={ <FeeEntry />} />
          <Route exact path ="/busDetails" element ={ <BusDetails />} />
          <Route exact path ="/feesManagement" element ={<FeesManager />} />
          <Route exact path ="/:id" element ={ <View />} />
          <Route exact path ="/feesEntry/:id" element ={ <Entry />} />
          <Route exact path ="/busDetails/:id" element ={ <Bus/>} />
          <Route exact path ="/feesManagement/:id" element ={<Info />} />
        </Routes>
        </Provider>
       </>
    )
}
