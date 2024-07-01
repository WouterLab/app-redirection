// import { Loader } from '@/components/Loader/Loader';
// import axiosPrivate from '@/services/axiosPrivate';
// import { selectUserData, setUserData } from '@/store';
// import { useRouter } from 'next/router';
// import { ComponentType, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// export default function withAuth(
//   Component: ComponentType<any>,
//   noRedirect?: boolean,
// ) {
//   return function WithAuth(props: any) {
//     const userData = useSelector(selectUserData);
//     const dispatch = useDispatch();
//     const router = useRouter();

//     useEffect(() => {
//       const fetchUserData = async () => {
//         if (!userData) {
//           try {
//             const res = await axiosPrivate.get('/user');

//             if (!res) return;

//             if (res.data) {
//               dispatch(setUserData(res.data.user));
//             }
//           } catch (error) {
//             if (noRedirect) return;
//             router.replace('/auth/login');
//           }
//         }
//       };

//       fetchUserData();
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     if (!userData && !noRedirect) return <Loader fullScreen />;

//     return <Component {...props} />;
//   };
// }
