<template>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab @click="fetchRepo('repos')" title="Repositórios" active
        ><repos-list
          v-if="item == 'repos'"
          :list="reposList"
          :loading="loading"
        ></repos-list
      ></b-tab>
      <b-tab @click="fetchRepo('starred')" title="Repositórios mais visitados"
        ><repos-list
          v-if="item == 'starred'"
          :list="reposList"
          :loading="loading"
        ></repos-list
      ></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { api } from "@/services.js";
import ReposList from "@/components/repos-list.vue";

export default {
  name: "user-nav",
  props: ["dataUser"],
  components: {
    ReposList,
  },
  data() {
    return {
      reposList: [],
      item: "",
      loading: false,
    };
  },
  methods: {
    fetchRepo(endpoint) {
      this.loading = true;
      this.item = endpoint;
      this.reposList = [];
      api
        .get(`${this.dataUser.login}/${endpoint}`)
        .then((r) => {
          r.data.forEach((el) => {
            this.reposList.push({
              name: el.name,
              url: el.svn_url,
            });
          });
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
  created() {
    this.fetchRepo("repos");
  },
};
</script>


<style>
</style>