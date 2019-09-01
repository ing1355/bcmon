export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // Routes: ['src/pages/Authorized'],
    // authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/Home' },
      {
        path: '/Home',
        name: 'Home',
        icon: 'dashboard',
        component: './Components/Pages/Home',
      },
      // list
      {
        path: '/Chart',
        icon: 'table',
        name: 'Chart',
        component: './Components/Pages/Chart'
      },
      {
        path: '/Analysis',
        icon: 'table',
        name: 'Analysis',
        routes: [
          {
            path: '/Analysis',
            redirect: '/Analysis/Detection',
          },
          {
            path: '/Analysis/Detection',
            name: 'DDoS Detection',
            icon: 'dashboard',
            component: './Components/Pages/Analysis_Detection'
          },
          {
            path: '/Analysis/Clustering',
            name: 'Clustering',
            icon: 'dashboard',
            component: './Components/Pages/Analysis_Clustering'
          },
          {
            path: '/Analysis/Prediction',
            name: 'Transaction Prediction',
            icon: 'dashboard',
            component: './Components/Pages/Analysis_Prediction'
          },
        ]
      },
      {
        component: '404',
      },
    ],
  },
];
