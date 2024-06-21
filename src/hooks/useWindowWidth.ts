import { useEffect, useState } from 'react';

export const useWindowWidth = (options?: { defaultInnerWidth: boolean }) => {
  let stateVariant = undefined;

  if (options?.defaultInnerWidth)
    stateVariant =
      typeof window !== 'undefined' ? window.innerWidth : undefined;

  const [width, setWidth] = useState<number | undefined>(stateVariant);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
