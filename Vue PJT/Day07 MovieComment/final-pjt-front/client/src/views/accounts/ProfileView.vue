<template>
  <div>
    <h1>프로필 페이지</h1>
    <div v-if="profile">
      <p>이름: {{ profile.name }}</p>
      <p>이메일: {{ profile.email }}</p>
      <!-- 필요한 프로필 정보를 표시하세요 -->
    </div>
    <div v-else>
      <p>프로필을 불러오는 중입니다...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "ProfileView",
  data() {
    return {
      profile: null,
      
    };
  },
  created() {
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      axios
        .get(`${API_URL}/accounts/profile/`)
        .then((response) => {
          this.profile = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
