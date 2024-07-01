// import { useRouter } from 'next/router';
// import { selectUserData, setUserData } from '@/store';
// import { ComponentType, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axiosPrivate from '@/services/axiosPrivate';

// export default function withoutAuth(Component: ComponentType) {
//   return function WithoutAuth(props: any) {
//     const userData = useSelector(selectUserData);
//     const router = useRouter();
//     const dispatch = useDispatch();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const fetchUserData = async () => {
//         if (!userData) {
//           try {
//             const res = await axiosPrivate.get('/user');

//             if (!res) return;

//             if (res.data) {
//               dispatch(setUserData(res.data.user));
//               router.push('/profile');
//             }
//           } catch (error) {
//             setLoading(false);
//             return;
//           }
//         }

//         router.push('/profile');
//       };

//       fetchUserData();
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     if (loading) return null;

//     return <Component {...props} />;
//   };
// }
