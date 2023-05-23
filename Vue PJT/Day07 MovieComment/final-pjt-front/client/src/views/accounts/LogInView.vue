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

            <b-row class="align-items-center justify-content-center">
              <div class="text-start">

                <label for="input-username"> <p>아이디</p> </label>
  
                <b-form-input
                  id="input-username"
                  placeholder="ID"
                  v-model="username"
                  :state="nameState"
                  aria-describedby="input-live-feedback"
                  trim
                  style="width: 70%"
                ></b-form-input>
  
                <b-form-invalid-feedback
                  id="input-username-feedback"
                  class="text-right"
                >
                  아이디 4글자 이상 입력
                </b-form-invalid-feedback>
              </div>
            </b-row>
            <br />
            <b-row class="align-items-center justify-content-center">
              <label for="input-password">비밀번호</label>
              <b-form-input
                id="input-password"
                placeholder="PASSWORD"
                v-model="password"
                :state="passwordState"
                aria-describedby="input-password-feedback"
                trim
                type="password"
                @keyup.enter="login"
                autocomplete="false"
                style="width: 70%"
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-password-feedback"
                class="text-right"
              >
                비밀번호 6글자 이상 입력
              </b-form-invalid-feedback>
            </b-row>


          <br />
          <b-button class="custom-button" @click="login">로그인</b-button>
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
  computed: {
    nameState() {
      return this.username.length >= 4 ? true : false;
    },
    passwordState() {
      return this.password.length >= 6 ? true : false;
    },
  },
  methods: {
    login() {
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
          // this.$store.commit('SAVE_TOKEN', res.data.key)
          // this.$store.commit("SET_LOGIN_STATUS", true)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //     loginUser() {
    // const credentials = {
    //   username: this.username,
    //   password: this.password,
    // };
    // this.$store.dispatch('login', credentials)
    //   .then(() => {
    //     // 로그인 성공 시 처리할 내용
    //   })
    //   .catch((error) => {
    //     // 로그인 실패 시 처리할 내용
    //     console.log(error)
    //   });
    // }
  },
};
</script>

<style scoped>
.login-form {
  margin: auto;
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
  color: #5111db;
  text-decoration-line: none;
}


</style>
