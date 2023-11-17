import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import LocationDisplay from './components/LocationDisplay';


function App() {
  
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationData = async (postalCode) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      const data = await response.json();

      if (response.ok) {
        setLocationData({
          country: data.country,
          state: data.places[0].state,
          placeName: data.places[0]['place name'],
        });
      } else {
        if (data.message){
          setError(data.message);
        }
        else{
          setError('Invalid postal code entered')
        }
      }
    } catch (err) {
      setError('Please enter valid postal code');
    } finally {
      setLoading(false);
    }
  };

  const handleClearLocation = () => {
    setLocationData(null);
  };


  return (
    <div className='App'>
    <div className='card'>
      <h2>Zip Code Information App</h2>
      <InputForm 
        loading = {loading}
        fetchLocationData = {fetchLocationData}
      />
      <LocationDisplay 
        locationData = {locationData}
        loading = {loading}
        error = {error}
        onClearLocation = { handleClearLocation }
      />
    </div>
    </div>
  );
}

export default App;
