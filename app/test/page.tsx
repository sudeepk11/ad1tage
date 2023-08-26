"use client"
import { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkZWVwazExIiwiYSI6ImNsbGlkbTZmczFmdjgzaG8zbHJoanJ1bjgifQ.YIDUFnb8f9uYhq2PJm30yQ'; // Replace with your Mapbox access token

const LocationForm = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.8718, 21.7679],
      zoom: 11,
    });

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([78.8718, 21.7679])
      .addTo(map);

    marker.on('dragend', async () => {
      const lngLat = marker.getLngLat();
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${mapboxgl.accessToken}`);
      const data = await response.json();
      const features = data.features[0];
      const newAddress = features.place_name || '';
      const newCity = features.context.find(ctx => ctx.id.includes('place')).text || '';
      const newCountry = features.context.find(ctx => ctx.id.includes('country')).text || '';
      const newPincode = features.context.find(ctx => ctx.id.includes('postcode')).text || '';
      
      setAddress(newAddress);
      setCity(newCity);
      setCountry(newCountry);
      setPincode(newPincode);

      setSelectedLocation(lngLat);
    });

    // Clean up the map on component unmount
    return () => map.remove();
  }, []);

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
    <div className="h-64">
          <div id="map" className="h-full"></div>
        </div>
      
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
