'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      router.push('http://192.168.0.15:3000');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return null;
}

export default Home;
