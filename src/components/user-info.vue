<template>
  <div class="user__info">
    <b-img
      v-if="dataUser.avatar_url"
      class="user__img"
      thumbnail
      :src="dataUser.avatar_url"
      v-bind="mainProps"
      rounded="circle"
      alt="Circle image"
    ></b-img>
    <h3 v-if="dataUser.name" @click="redirect('home')" class="user__name">
      {{ dataUser.name }}
    </h3>
    <h5 v-if="dataUser.login" class="user__login">{{ dataUser.login }}</h5>
    <div v-if="dataUser.company" class="user__company">
      <b-icon class="user__company-icon" icon="building"></b-icon
      >{{ dataUser.company }}
    </div>
    <div class="user__follow">
      <b-icon class="user__follow-icon" icon="people"></b-icon>
      {{ dataUser.followers }} followers · {{ dataUser.following }} following
    </div>
    <div v-if="dataUser.blog" @click="redirect('blog')" class="user__blog">
      <b-icon class="user__blog-icon" icon="link"></b-icon>
      {{ dataUser.blog }}
    </div>
  </div>
</template>

<script>
export default {
  name: "user-info",
  props: ["dataUser"],
  data() {
    return {
      mainProps: {
        width: 200,
        height: 200,
      },
    };
  },
  methods: {
    redirect(item) {
      let url =
        item == "home"
          ? this.dataUser.html_url
          : `https://${this.dataUser.blog}`;
      window.open(url);
    },
  },
};
</script>

<style scoped>
.user__info,
.user__nav {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.user__company-icon,
.user__follow-icon,
.user__blog-icon {
  margin-right: 5px;
}

.user__img {
  margin-bottom: 10px;
}

.user__name,
.user__blog {
  cursor: pointer;
}
</style>