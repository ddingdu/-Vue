<template>
  <b-container fluid>
    <b-row class="min-vh-100 justify-content-center">
      <b-col md="6" lg="6" class="p-0">
        <div class="image-container"></div>
      </b-col>

      <b-col md="6" lg="6" class="p-4">
        <div class="login-form p-4">
          <h1 class="text-center mb-4"><strong>Sign in to Reelix</strong></h1>
          <hr />

          <div class="text-end">
            Not a member?
            <router-link :to="{ name: 'SignUpView' }" id="notAmember">
              Sign up now</router-link
            >
          </div>

          <br />

          <div style="padding: 0 200px 0 200px">
            <b-row class="align-items-center justify-content-center">
              <div class="text-start">
                <label for="input-username"> <p>아이디</p> </label>
              </div>
              <b-form-input
                id="input-username"
                placeholder="ID"
                v-model="username"
                aria-describedby="input-username-feedback"
                trim
                style="width: 450px; border-color: lightgray"
                class="form-control"
              ></b-form-input>

              <!-- <b-form-invalid-feedback
                id="input-username-feedback"
                style="color: #d99696"
              >
                아이디 2글자 이상 입력
              </b-form-invalid-feedback> -->
            </b-row>
            <br />
            <b-row class="align-items-center justify-content-center">
              <div class="text-start">
                <label for="input-password"><p>비밀번호</p></label>
              </div>

              <b-form-input
                id="input-password"
                placeholder="PASSWORD"
                v-model="password"
                aria-describedby="input-password-feedback"
                trim
                type="password"
                @keyup.enter="login"
                autocomplete="false"
                style="width: 450px; border-color: lightgray"
                class="form-control"
              ></b-form-input>

              <!-- <b-form-invalid-feedback
                id="input-password-feedback"
                class="text-right"
                style="color: #d99696"
              >
                비밀번호 6글자 이상 입력
              </b-form-invalid-feedback> -->
            </b-row>
            <br />
            <b-button class="custom-button" @click="login">로그인</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  // computed: {
  //   nameState() {
  //     return this.username.length >= 2 || this.username === "" ? true : false;
  //   },
  //   passwordState() {
  //     return this.password.length >= 6 || this.password === "" ? true : false;
  //   },
  // },
  methods: {
    login() {
      // if (!this.nameState || !this.passwordState) {
      //   alert("아이디와 비밀번호를 올바르게 입력해주세요.");
      //   return;
      // }
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/auth/login/",
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.$store.dispatch("login", res.data);
          this.$router.push({ name: "HomeView" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#input-username-feedback {
  text-align: right;
}
#input-password-feedback {
  text-align: right;
}

.image-container {
  background-image: url("@/assets/loginAbout.png");
  background-size: cover;
  background-position: center;
  height: 100%;
}
.custom-button {
  background-color: #8d81a6;
  color: #fff;
  border: none;
}

#notAmember {
  color: #8613e4;
  text-decoration-line: none;
}
.form-control:focus {
  border-color: #ddb1b1;
  box-shadow: 0 0 0 0.2rem #fad7d7;
  outline: none;
  background-color: white;
  transition: border-color 0.3s ease #d99696;
  border-radius: 0.5rem;
}
</style>
