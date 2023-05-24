<template>
  <b-container fluid>
    <b-row class="min-vh-100 justify-content-center">
      <b-col md="6" lg="6" class="p-0">
        <div class="image-container"></div>
      </b-col>
      <b-col md="6" lg="6" class="p-4">
        <div class="login-form p-4">
          <h1 class="text-center mb-4"><strong>Sign up to Reelix</strong></h1>

          <hr />
          <div class="text-end">
            Are you a member?
            <router-link :to="{ name: 'LogInView' }" id="Amember">
              Login now</router-link
            >
          </div>
          <br />
          <div style="padding: 0 200px 0 200px">
            <b-row class="justify-content-center">
              <label for="input-username">아이디</label>
              <b-form-input
                id="input-username"
                placeholder="ID"
                v-model="username"
                aria-describedby="input-live-feedback"
                trim
                style="width: 100%"
              ></b-form-input>
            </b-row>

            <br />
            <b-row class="align-items-center justify-content-center">
              <label for="input-password1">비밀번호</label>

              <b-form-input
                id="input-password1"
                placeholder="PASSWORD 1"
                v-model="password1"
                trim
                type="password"
                style="width: 100%"
              ></b-form-input>
            </b-row>
            <br />
            <b-row class="align-items-center justify-content-center">
              <label for="input-password2">비밀번호 확인</label>

              <b-form-input
                id="input-password2"
                placeholder="PASSWORD 2"
                v-model="password2"
                trim
                type="password"
                @keyup.enter="signup"
                style="width: 100%"
                :state="passwordMismatch ? false : null"
                @input="checkPasswordMismatch"
              ></b-form-input>
              <b-form-invalid-feedback v-if="passwordMismatch">
                비밀번호가 일치하지 않습니다.
              </b-form-invalid-feedback>
            </b-row>
            <br />
            <b-button class="custom-button" @click="signup">회원가입</b-button>
          </div>
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
  // computed: {
  //   passwordMismatch() {
  //     return this.password1 !== this.password2;
  //   },
  // },
  methods: {
    checkPasswordMismatch() {
      this.passwordMismatch = this.password1 !== this.password2;
    },
    signup() {
      if (this.passwordMismatch) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

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

label {
  text-align: left;
}
.image-container {
  background-image: url("@/assets/signupAbout.png");
  background-size: cover;
  background-position: center;
  height: 100%;
}

.custom-button {
  background-color: #8d81a6;
  color: #fff;
  border: none;
}

#Amember {
  color: #8613e4;
  text-decoration-line: none;
}
</style>
