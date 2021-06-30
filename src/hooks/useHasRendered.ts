import { useState, useEffect } from "react";

export const useHasRendered = (): boolean => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return rendered;
};
