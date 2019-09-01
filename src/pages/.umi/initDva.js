import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('D:/icon/frontend (2)/src/models/global.js').default) });
app.model({ namespace: 'menu', ...(require('D:/icon/frontend (2)/src/models/menu.js').default) });
app.model({ namespace: 'setting', ...(require('D:/icon/frontend (2)/src/models/setting.js').default) });
