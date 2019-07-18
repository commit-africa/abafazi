import { useEffect, useRef } from 'react';

// based on  https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(
  callback,
  delay,
  fireOnLoad,
  restartTrackParams = null
) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick(isInitial) {
      savedCallback.current(isInitial);
    }

    if (fireOnLoad) {
      tick(true);
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return null;
  }, restartTrackParams || [delay]);
}
