import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'D:/icon/frontend (2)/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": _dvaDynamic({

      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
      LoadingComponent: require('D:/icon/frontend (2)/src/components/PageLoading/index').default,
    }),
    "routes": [
      {
        "path": "/",
        "redirect": "/Home",
        "exact": true
      },
      {
        "path": "/Home",
        "name": "Home",
        "icon": "dashboard",
        "component": _dvaDynamic({

          component: () => import(/* webpackChunkName: "p__Components__Pages__Home" */'../Components/Pages/Home'),
          LoadingComponent: require('D:/icon/frontend (2)/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "path": "/Chart",
        "icon": "table",
        "name": "Chart",
        "component": _dvaDynamic({

          component: () => import(/* webpackChunkName: "p__Components__Pages__Chart" */'../Components/Pages/Chart'),
          LoadingComponent: require('D:/icon/frontend (2)/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "path": "/Analysis",
        "icon": "table",
        "name": "Analysis",
        "routes": [
          {
            "path": "/Analysis",
            "redirect": "/Analysis/Detection",
            "exact": true
          },
          {
            "path": "/Analysis/Detection",
            "name": "DDoS Detection",
            "icon": "dashboard",
            "component": _dvaDynamic({

              component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Components/Pages/Analysis_Detection'),
              LoadingComponent: require('D:/icon/frontend (2)/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/Analysis/Clustering",
            "name": "Clustering",
            "icon": "dashboard",
            "component": _dvaDynamic({

              component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Components/Pages/Analysis_Clustering'),
              LoadingComponent: require('D:/icon/frontend (2)/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/Analysis/Prediction",
            "name": "Transaction Prediction",
            "icon": "dashboard",
            "component": _dvaDynamic({

              component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Components/Pages/Analysis_Prediction'),
              LoadingComponent: require('D:/icon/frontend (2)/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/icon/frontend (2)/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": _dvaDynamic({

          component: () => import(/* webpackChunkName: "p__404" */'../404'),
          LoadingComponent: require('D:/icon/frontend (2)/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/icon/frontend (2)/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/icon/frontend (2)/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
    <RendererWrapper0>
      <Router history={window.g_history}>
        {renderRoutes(routes, {})}
      </Router>
    </RendererWrapper0>
  );
}
