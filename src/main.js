import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import axios from "axios";
import VueAxios from "vue-axios";

// componentes
import Formulario from "./Formulario.vue";
import PracticasComponente from "./PracticasComponente.vue";

const routes = [
  {
    path: "/",
    component: Formulario,
  },
  {
    path: "/detail",
    component: PracticasComponente,
  },
];

// crear objeto rutas de vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// instancia de Vue
const app = createApp(App);

app.use(router, VueAxios, axios);

app.mount("#app");
