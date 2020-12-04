<template>
  <q-page padding>

    <div class="q-pa-md">
      <q-card class="my-card " style="max-width: 350px; width: 350px">
        <q-card-section class="row ">
          <q-avatar size="150px" rounded class="col justify-center">
            <q-img
              width="150px"
              src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-silueta-de-avatar-de-hombre-de-negocios-by-vexels.png"></q-img>
          </q-avatar>
        </q-card-section>

        <q-card-section>
          <q-input v-model="username" label="Nombre de usuario" dense></q-input>
          <q-input v-model="password" label="Contraseña" dense type="password"></q-input>
          <q-input v-model="myname" label="Nombre" dense ></q-input>
          <q-select label="Rol" :options="roles" v-model="rol">
          </q-select>
          <q-input v-model="nro_document" label="Nro. Documento" dense ></q-input>
          <q-select label="Sexo" :options="['hombre','mujer','otro']" v-model="gender">
          </q-select>
          <q-input v-model="phone" label="Telefono" dense ></q-input>
          <q-input v-model="email"  label="Email" dense ></q-input>
          <q-input v-model="address"  label="Direccion" dense ></q-input>
          <br>

        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-center">
          <q-btn @click="register" dense label="Guardar" color="blue" style="padding: 5px"></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data(){
    return{
      roles:[
        "administrador",
        "usuario"
      ],
      rol:'',
      username:'',
      password:'',
      myname:'',
      nro_document:'',
      gender:'',
      phone:'',
      email:'',
      address:''
    }
  },
  methods:{
    async register(){
      const { data } = await this.$axios.post('/user/save',{
        "name": this.myname,
        "username": this.username,
        "password": this.password,
        "role_id": this.rol=='administrador'?1:3,
        "n_document": this.nro_document,
        "gender": this.gender,
        "phone": this.phone,
        "email": this.email,
        "address": this.address
      });
      console.log( data);
    }
  }
}
</script>
