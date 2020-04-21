import { useEffect, useState } from 'react';

const useFormInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default {
  useFormInput
}