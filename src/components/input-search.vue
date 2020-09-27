<template>
  <b-input-group class="input-search" size="lg">
    <b-input-group-prepend is-text>
      <b-icon icon="search"></b-icon>
    </b-input-group-prepend>
    <b-form-input
      placeholder="Digite o usuário e tecle enter"
      autofocus
      v-model="user"
      v-on:keyup.enter="search"
    ></b-form-input>
  </b-input-group>
</template>

<script>
export default {
  name: "input-search",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    search() {
      this.$emit("search-user", this.user);
    },
  },
};
</script>

<style scoped>
.input-search {
  max-width: 400px;
  margin: 20px;
}
</style>