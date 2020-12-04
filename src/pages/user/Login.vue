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
          <q-input label="Nombre de usuario" dense></q-input>
          <q-input label="Contraseña" dense></q-input>
          <br>
          <div class="flex-center">

          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn  dense label="Ingresar" color="blue" style="padding: 5px"></q-btn>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
