import { useEffect, useState } from 'react';

export function useInterval(value = 100, delay: number, callback: () => void) {
  const [intervalValue, setIntervalValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setInterval(() => {
        if (intervalValue > 0) {
          setIntervalValue(intervalValue - 1);
        } else {
          callback && callback();
          clearInterval(handler);
        }
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      return () => {
        // callback && callback();
        clearInterval(handler);
      };
    },
    [intervalValue, setIntervalValue, delay, callback] // Only re-call effect if value or delay changes
  );
  return intervalValue;
}
