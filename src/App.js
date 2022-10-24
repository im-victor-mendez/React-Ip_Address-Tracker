import './App.css';
import IpData from './components/layout/IpData';
import IpInput from './components/layout/IpInput';
import Map from './components/layout/Map';

function App() {
  return <section id='app'>
    <IpInput />
    <IpData />
    <Map />
  </section>
}

export default App;
