"use client"
import { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';

const GOOGLE_API_KEY = 'AIzaSyCMZy8u-38-N7KZpHWXJ6HWmE1T6fV2DUM'; // Replace with your Google API key

const LocationForm = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');

  const { ref } = usePlacesWidget({
    apiKey: GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      setAddress(place.formatted_address);
      // Parse the address components to extract city, country, pincode, etc.
      const components = place.address_components;
      const cityComponent = components.find(comp => comp.types.includes('locality'));
      const countryComponent = components.find(comp => comp.types.includes('country'));
      const pincodeComponent = components.find(comp => comp.types.includes('postal_code'));

      setCity(cityComponent ? cityComponent.long_name : '');
      setCountry(countryComponent ? countryComponent.long_name : '');
      setPincode(pincodeComponent ? pincodeComponent.long_name : '');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data as needed
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="p-2 border rounded w-full"
          ref={ref}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Pincode"
          className="p-2 border rounded w-full"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
