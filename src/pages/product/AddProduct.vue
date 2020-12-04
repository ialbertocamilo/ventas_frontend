<template>
  <q-page class="" padding>
    <div class="q-pa-md  q-gutter-md ">

      <q-card class="my-card q-pa-md "
              style="max-width: 350px; width: 350px">
        <q-card-section>
          <q-input v-model="description" label="Descripcion" rounded />
          <q-input v-model="price" label="Precio S/." rounded />
          <q-input v-model="unity" label="Unidad" rounded />
          <q-input v-model="stock" label="Stock" rounded />
          <q-select v-model="category" :options="categories" label="Categorias"></q-select>
          <br>
          <center>
            <q-btn color="blue" label="Agregar" @click="addItem"></q-btn>
          </center>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data() {
    return {
      description: '',
      price: '',
      unity: '',
      stock: '',
      category: '',
      status: '',
      image: '',
      categories: [
        'Teclado',
        'Mouse',
        'Impresoras',
        'Laptops',
        'Pc de escritorio',
        'Otro'
      ]
    };
  },
  methods: {
    async addItem() {
      if (this.description && this.price) {

        const { data } = await this.$axios.post('/product/save', {
          description: this.description,
          price: this.price,
          unity: this.unity,
          stock: this.stock,
          product_category_id: 1,
          product_status_id: 1,
          image: ''
        });
        if (data) {
          this.$q.notify({
            message: 'Se agrego el producto correctamente.',
            color: 'green'
          });
        }
      }else{
        this.$q.notify({
          message: 'Completar los campos',
          color: 'red'
        });
      }
    }
  }
};
</script>
