import '../styles/locationDisplay.css'

const LocationDisplay = ({locationData, loading, error, onClearLocation}) => {

  return (
    <div className='location-container'>
      {(()=>{
        if (loading) {
          return <p>Loading...</p>;
        }
      
        if (error) {
          return <p>{error}</p>;
        }
      
        if (!locationData) {
          return null;
        }
      else{
        return(
          <>
            <h2>Location Information</h2>
            <p>Country: {locationData.country}</p>
            <p>State: {locationData.state}</p>
            <p>Place Name: {locationData.placeName}</p>
            <button onClick={onClearLocation} className='clear-btn'>Clear Info</button>
          </>
          )
        }
      })
      ()}
    </div>
  )
}

export default LocationDisplay