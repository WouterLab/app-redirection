'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('http://192.168.0.15:3000');
  }, [router]);

  return null;
}

export default Home;
