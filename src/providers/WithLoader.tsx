// import { Loader } from '@/components/Loader/Loader';
// import { ProviderProps } from '@/types';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// export function WithLoader({ children }: ProviderProps) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = () => {
//       setLoading(true);
//     };
//     const handleComplete = () => {
//       setLoading(false);
//     };

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     };
//   });

//   if (loading) return <Loader fullScreen />;

//   return children;
// }
