<template>
  <div class="user-info">
    <b-img
      v-if="dataUser.avatar_url"
      class="user-info__img"
      thumbnail
      :src="dataUser.avatar_url"
      v-bind="mainProps"
      rounded="circle"
      alt="Circle image"
    ></b-img>
    <h3 v-if="dataUser.name" @click="redirect('home')" class="user-info__name">
      {{ dataUser.name }}
    </h3>
    <h5 v-if="dataUser.login" class="user-info__login">{{ dataUser.login }}</h5>
    <div v-if="dataUser.company" class="user-info__company">
      <b-icon class="user-info__icon" icon="building"></b-icon
      >{{ dataUser.company }}
    </div>
    <div class="user-info__follow">
      <b-icon class="user-info__icon" icon="people"></b-icon>
      {{ dataUser.followers }} followers · {{ dataUser.following }} following
    </div>
    <div v-if="dataUser.blog" @click="redirect('blog')" class="user-info__blog">
      <b-icon class="user-info__icon" icon="link"></b-icon>
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
.user-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.user-info__icon {
  margin-right: 5px;
}

.user-info__img {
  margin-bottom: 10px;
}

.user-info__name,
.user-info__blog {
  cursor: pointer;
}
</style>