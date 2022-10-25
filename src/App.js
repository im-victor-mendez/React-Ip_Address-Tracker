import { useEffect } from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import IpData from './components/layout/IpData';
import IpInput from './components/layout/IpInput';
import Map from './components/layout/Map';
import { setCurrentPosition, setIpData } from './components/stateManagement/ipSlice';
import { ipApi } from './utils/ipApi';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    ipApi()
    .then(
      data => {
        dispatch(
          setCurrentPosition(
            {
              ip: data.ip,
              location: {
                country: data.country_name,
                region: data.city,
                city: data.city,
                lat: data.latitude,
                lng: data.longitude,
                timezone: data.time_zone.offset
              },
              as: {
                asn: data.asn.asn
              }
            }
          )
        )
      }
    )
  }, [])
  
  return <section id='app'>
    <IpInput />
    <IpData />
    <Map />
  </section>
}

export default App;
