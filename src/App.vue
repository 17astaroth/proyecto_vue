<template>
  <div class="container">
    <div class="row">
      <div class="col m12 card-panel">
        <form @submit.prevent="agregarUsuario">
          <div class="row">
            <div class="col m4">
              <label>Nombre completo</label>
              <input type="text" v-model="nombre">
            </div>

            <div class="col m4">
              <label>Edad</label>
              <input type="number" v-model="edad">
            </div>

            <div class="col m4">
              <label>Correo</label>
              <input type="email" v-model="correo">
            </div>

          </div>

          <div class="row">
            <div class="col m4">
              <label>¿Cuántos minutos pasas en la ducha?</label>
              <input type="number" v-model="ducha">
            </div>

            <div class="col m4">
              <label>¿Lava la ropa a mano o utiliza una lavadora?</label>
              <select v-model="lavar_ropa">
                <option value="">Seleccione</option>
                <option v-for="estado in lavarRopaOp" v-bind:key="estado" v-bind:value="estado.id1">
                  {{ estado.descripcion1 }}</option>
              </select>
            </div>

            <div class="col m4">
              <label>¿Lava los trastes a mano o utiliza un lavavajillas?</label>
              <select v-model="lavar_ropa">
                <option value="">Seleccione</option>
                <option v-for="estado in lavarTrastesOp" v-bind:key="estado" v-bind:value="estado.id2">
                  {{ estado.descripcion2 }}</option>
              </select>
            </div>
          </div>


          <div class="row">
            <div class="col m4">
              <label>¿Cuántos días a la semana trapeas el suelo de tu casa o patio?</label>
              <input type="number" v-model="trapeando">
            </div>

            <div class="col m4">
              <label>¿Cuántos días al mes lavas tu auto? (Si no tienes un auto, por favor, pon 0)</label>
              <input type="number" v-model="lavarAuto">
            </div>

            <div class="col m4">
              <label>¿Cuántas veces al día descargas el inodoro?</label>
              <input type="number" v-model="inodoro">
            </div>

          </div>


          <div class="row">
            <form @submit.prevent="agregarLugar">
              <div class="col m4 card-panel">
                <label>Ingrese los lugares que visita a diario en los que es consciente de que consume agua</label>
                <input type="text" v-model="lugar">
                <button type="submit" class="btn indigo darken-3">AGREGAR lugar <i
                    class="material-icons right">add_circle</i></button>
                <br>
                <ul>
                  <li v-for="lugar in lugars" v-bind:key="lugar">{{ lugar.id }} -
                    {{ lugar.descripcion }}
                    <a href="#!"><i class="material-icons">close</i></a>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col m4">
              <label><input type="checkbox" v-model="confirmacion"><span>Conscientemente ¿sientes que en tu día a día
                  desperdicias agua?</span></label>
            </div>
          </div>

          <div class="row">
            <button type="submit" class="btn indigo darken-4">ENVIAR <i class="material-icons right">send</i></button>
          </div>
        </form>
      </div>
    </div>

    <!-- Aqui empieza la tabla -->

    <div class="row">
      <div class="col m12">
        <table class="table bordered striped">
          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>Edad</th>
              <th>Correo</th>
              <th>Lugares</th>
              <th>Son concientes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" v-bind:key="usuario">
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.edad }}</td>
              <td>{{ usuario.correo }}</td>
              <td>
                <ul>
                  <li v-for="lugar in usuario.lugars" v-bind:key="lugar">{{ lugar.id }} - {{
                    lugar.descripcion }}</li>
                </ul>
              </td>
              <td><label><input type="checkbox" disabled v-model="usuario.confirmacion"><span></span></label></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div>
    <button type="button" class="btn indigo darken-4">RECOMENDACIONES <i
        class="material-icons right">local_drink</i></button>
  </div>
  <br>
</template>



<!-- Aqui empieza el SCRIPT -->

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  data() {
    return {
      nombre: '',
      edad: 0,
      correo: '',
      ducha: 0,
      lavar_ropa: '',
      lavar_trastes: '',
      trapeando: 0,
      lavarAuto: 0,
      inodoro: 0,

      confirmacion: false,
      lugar: '',
      lugars: [],
      usuarios: [],

      select_instances1: [],

      lavarRopaOp: [
        {
          id1: 'L',
          descripcion1: 'Lavadora'
        },
        {
          id1: 'F',
          descripcion1: 'Fregando'
        }
      ],
      select_instances2: [],

      lavarTrastesOp: [
        {
          id2: 'MM',
          descripcion2: 'Lavavajillas'
        },
        {
          id2: 'M',
          descripcion2: 'A mano'
        }
      ]
    }
  },
  mounted() {
    var elems1 = document.querySelectorAll('select');
    this.select_instances1 = M.FormSelect.init(elems1, null);

    var elems2 = document.querySelectorAll('select');
    this.select_instances2 = M.FormSelect.init(elems2, null);

  },
  methods: {
    redireccion() {
      location.href = "ventana.html"
    },
    agregarUsuario() {
      var data = {
        nombre: this.nombre,
        edad: this.edad,
        correo: this.correo,
        lugars: this.lugars,
        confirmacion: this.confirmacion
      };
      this.usuarios.push(data);
      this.nombre = '';
      this.edad = 0;
      this.correo = '';
      this.lugar = '';
      this.lugars = [];
      this.confirmacion = false;
    },
    agregarLugar() {
      var total = this.lugars.length;
      var ultimo = 0;
      if (total > 0) {
        ultimo = this.lugars[total - 1].id;
      }
      var data = {
        id: ultimo + 1,
        descripcion: this.lugar
      };
      this.lugars.push(data);
      this.lugar = '';
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: graycale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  color: #363062 !important;
  font-size: 15px !important;
  font-weight: bold !important;

}

.row {
  padding: 2%;
}
</style>