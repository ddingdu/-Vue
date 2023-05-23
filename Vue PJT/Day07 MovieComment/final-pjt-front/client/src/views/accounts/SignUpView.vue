<template>
  <b-container fluid>
    <b-row class="min-vh-100 justify-content-center">
      <b-col md="6" lg="6" class="p-0">
        <!-- <div>
          <img src="@/assets/signupAbout.png" alt="">
        </div> -->
        <div class="image-container"></div>
      </b-col>
      <b-col md="6" lg="6" class="p-4">
        <div class="login-form p-4">
          <h1 class="text-center mb-4"><strong>Sign up to Reelix</strong></h1>

          <hr />
          <br />

          <b-row class="justify-content-center">
            <label for="input-username">아이디</label>
            <b-form-input
              id="input-username"
              placeholder="ID"
              v-model="username"
              aria-describedby="input-live-feedback"
              trim
              style="width: 70%"
            ></b-form-input>
            <!-- </b-col> -->
          </b-row>

          <br />
          <b-row class="align-items-center justify-content-center">
            <label for="input-password1">비밀번호1</label>

            <b-form-input
              id="input-password1"
              placeholder="PASSWORD1"
              v-model="password1"
              trim
              type="password"
              style="width: 70%"
            ></b-form-input>
          </b-row>
          <br />
          <b-row class="align-items-center justify-content-center">
            <label for="input-password2">비밀번호2</label>

            <b-form-input
              id="input-password2"
              placeholder="PASSWORD2"
              v-model="password2"
              trim
              type="password"
              style="width: 70%"
            ></b-form-input>
          </b-row>
          <br />
          <b-button class="custom-button" @click="signup">회원가입</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUpView",
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    signup() {
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/auth/signup/",
        data: {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        },
      })
        .then((res) => {
          console.log(res);
          this.$store.dispatch("signUp", res.data);
          alert("로그인 창으로 이동합니다");
          this.$router.push({ name: "LogInView" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.signup-form {
  margin: auto;
}

.image-container {
  background-image: url("@/assets/signupAbout.png");
  background-size: cover;
  background-position: center;
  height: 100%;
}

.custom-button {
  background-color: #8D81A6;
  color: #fff;
  border: none;
}
</style>
