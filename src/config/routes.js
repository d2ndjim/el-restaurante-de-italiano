import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
//   {
//     element: <PrivateRoutes />, // <-- check if user authenticated
//     children: [
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//       {
//         path: "/reservation",
//         element: <Reservation />,
//       },
//       {
//         path: "/my-reservations",
//         element: <MyReservations />,
//       },
//       {
//         path: "/halls",
//         element: <Halls />,
//       },
//       {
//         path: "/halls/:id",
//         element: <HallDetails />,
//       },
//     ],
//   },
//   {
//     element: <AdminRoutes />, // <-- check if user authenticated
//     children: [
//       {
//         path: "/admin/dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "/admin/dashboard/halls",
//         element: <Hall />,
//       },
//       {
//         path: "/admin/dashboard/users",
//         element: <Users />,
//       },
//       {
//         path: "/admin/dashboard/pending-requests",
//         element: <ManageRequests />,
//       },
//       {
//         path: "/admin/dashboard/requests",
//         element: <AllRequests />,
//       },
//     ],
//   },
];

export default routesConfig;
