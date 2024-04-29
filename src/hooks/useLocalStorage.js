import { useState } from "react";

export const useLocalStorage = (key, value, initialValue) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    const jsonData = JSON.parse(storedData);
    if (jsonData) {
      return jsonData;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const handleChange = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };
  return [data, handleChange];
};
