<template>
  <q-page class="" padding>
    <div class="q-pa-md row items-start q-gutter-md">

      <q-card v-for="(item,index) in items" :key="index" bordered style="max-width: 300px">

        <q-card-section>

          <q-img height="200"
                 src="https://www.nexia.es/clientes/frontend/web/img/product/default.png"
                 width="200px">
          </q-img>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="q-pt-none q-ma-none">
          <div class="row full-width">
            <h6>Precio: S/. {{ item.price }}</h6>
          </div>
          {{item.description}}

        </q-card-section>
        <q-card-section>
          <div class="row q-gutter-md">

            <q-btn @click="deleteProduct(item.id)" class="col-5" color="red" dense>
              <i class="fas fa-trash-alt"></i>Borrar
            </q-btn>
            <q-btn class="col" color="secondary" dense>
              <i class="fas fa-money-bill-wave"></i>Comprar
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      items: []
    };
  },
  created() {
    this.getItems();
  },
  computed: {
    // eslint-disable-next-line vue/no-async-in-computed-properties
  },
  methods: {
    async getItems() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      const { data } = await this.$axios.get('/product/getAll');
      this.items = data;
      console.log(this.items);
    },
    async deleteProduct(myid){
      const { data } = await this.$axios.post('/product/delete',{
        id:myid
      });
      console.log(data);

    }
  }

};
</script>
