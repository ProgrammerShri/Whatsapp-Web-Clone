import { useEffect, useState } from "react";

export const useProgress = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldVal) => {
        const newVal = oldVal + 10;

        if (newVal >= 100) {
          clearInterval(interval);
          setLoading(false);
        }

        return newVal;
      });
    }, 600);
  }, []);

  return { loading, value };
};
