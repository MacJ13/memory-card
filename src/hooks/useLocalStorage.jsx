import { useEffect, useState } from "react";

function getStorageValue(keyName, defaultValue) {
  const savedValue = localStorage.getItem(keyName);
  const initialValue = JSON.parse(savedValue);

  return initialValue || defaultValue;
}

const useLocalStorage = (keyName, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(keyName, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(keyName, value);
  }, [keyName, value]);

  const localValue = JSON.parse(localStorage.getItem(keyName));

  return [localValue, setValue];
};

export default useLocalStorage;
