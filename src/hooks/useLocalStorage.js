import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
  const [item, setItem] = useState(
    JSON.parse(window.localStorage.getItem(key)) || JSON.parse(defaultValue)
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(item));
  }, [item, key]);

  return [item, setItem];
}

export default useLocalStorage;
