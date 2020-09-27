<template>
  <div class="user">
    <user-info :dataUser="dataUser"></user-info>
    <user-nav :dataUser="dataUser"></user-nav>
  </div>
</template>

<script>
import UserInfo from "@/components/user-info.vue";
import UserNav from "@/components/user-nav.vue";
export default {
  name: "user",
  props: ["dataUser"],
  components: {
    UserInfo,
    UserNav,
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.user {
  margin-top: 50px;
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width: 900px) {
  .user {
    grid-template-columns: 1fr;
  }
}
</style>