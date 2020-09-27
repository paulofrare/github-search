<template>
  <div class="repos-list">
    <div
      v-if="loading"
      class="repos-list__loading d-flex justify-content-center mb-3"
    >
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <b-list-group v-if="list.length > 0">
        <b-list-group-item
          class="repos-list__item"
          @click="redirect(item.url)"
          v-for="item in list"
          :key="item.name"
          >{{ item.name }}</b-list-group-item
        >
      </b-list-group>
      <div v-else>Nenhum repositório para listar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "repos-list",
  props: ["list", "loading"],
  methods: {
    redirect(url) {
      window.open(url);
    },
  },
};
</script>
<style>
.repos-list__loading {
  margin-top: 100px;
}

.repos-list__item {
  cursor: pointer;
}
</style>