import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
      console.log('inside fetchWeatherData ---> ' + url);

      const res = await fetch(url);

      const data = await res.json();
      //console.log(data);
      setWeather(data);
    } catch (error) {
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      console.log('inside useEffect --->');
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Location permission has been denied by user');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
      });

      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};
