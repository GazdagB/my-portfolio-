import Timer from "./Timer";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

type WeatherData = {
  current: {
    temp_c: number;
    condition: { icon: string };
  };
};

const Forcast = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  async function fetchWeather() {
    const url =
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Mannheim&aqi=no`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setWeather(data);
      setError(false);
    } catch (error: unknown) {
      setError(true);
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    fetchWeather()
  }, []);

  return (
    <div className="flex gap-2 items-center">
      {loading ? (
        <div className="flex items-center justify-center gap-1 text-gray-500">
          <FaSpinner className="h-5 w-5 animate-spin" />
          Loading Weather...
        </div>
      ) : error ? (
        <p className="">Couldn’t load weather 😕</p>
      ) : (
        weather && (
          <>
            <img
              className="h-8"
              src={weather.current.condition.icon}
              alt="weather icon"
            />
            <p>{weather.current.temp_c}° Mannheim,</p>
          </>
        )
      )}
      <Timer />
    </div>
  );
};

export default Forcast;
