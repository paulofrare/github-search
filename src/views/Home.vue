<template>
  <b-container class="home">
    <h2>Github Search</h2>
    <input-search @search-user="search"></input-search>
    <div v-if="error" class="home__message-error">
      Usuário não encontrado. Favor realizar a busca novamente.
    </div>
    <user :dataUser="dataUser" v-if="ready"></user>
    <div
      v-if="loading"
      class="home__loading d-flex justify-content-center mb-3"
    >
      <b-spinner label="Loading..."></b-spinner>
    </div>
  </b-container>
</template>

<script>
import { api } from "@/services.js";
import InputSearch from "@/components/input-search.vue";
import User from "@/components/user.vue";

export default {
  name: "Home",
  components: { InputSearch, User },
  data() {
    return {
      ready: false,
      error: false,
      dataUser: {},
      loading: false,
    };
  },
  methods: {
    search(user) {
      this.loading = true;
      this.ready = false;
      this.error = false;
      api
        .get(`${user}`)
        .then((r) => {
          this.dataUser = r.data;
          this.ready = true;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
          this.error = true;
        });
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}

.home__loading {
  margin-top: 100px;
}

.home__message-error {
  color: red;
}
</style>
