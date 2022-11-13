import { useEffect, useState } from 'react';

export function useBooleanTimeout(value = 100, delay: number, callback: () => void) {
  const [timeoutValue, setTimeoutValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        if (timeoutValue > 0) {
          setTimeoutValue(0);
        } else {
          callback && callback();
          clearTimeout(handler);
        }
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      return () => {
        callback && callback();
        clearTimeout(handler);
      };
    },
    [timeoutValue, setTimeoutValue, delay, callback] // Only re-call effect if value or delay changes
  );
  return timeoutValue;
}
