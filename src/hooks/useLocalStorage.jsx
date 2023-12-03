import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [item, setItem] = useState(
    JSON.parse(window.localStorage.getItem(key)) || initialValue || ''
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(item));
  }, [item, key]);

  return [item, setItem];
}

export default useLocalStorage;
