<template>
  <b-container role="group" class="p-5 login-form">
    <h1>로그인</h1>
    <b-row>
      <label for="input-username">아이디</label>

      <b-form-input
        id="input-username"
        placeholder="ID"
        v-model="username"
        :state="nameState"
        aria-describedby="input-live-feedback" 
        trim
      ></b-form-input>

      <b-form-invalid-feedback id="input-username-feedback" class="text-right">
      아이디 4글자 이상 입력
      </b-form-invalid-feedback>
      </b-row>

      <b-row>
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
      ></b-form-input>

      <b-form-invalid-feedback id="input-password-feedback" class="text-right">
      비밀번호 6글자 이상 입력
      </b-form-invalid-feedback>
    </b-row>
    <b-button variant="secondary" @click="login">로그인</b-button>
  </b-container>
</template>

<script>
import axios from "axios"

export default {
    data () {
        return {
            username: "",
            password: "",
        }
    },
    computed : {
      nameState() {
        return this.username.length >= 4 ? true : false
      },
      passwordState() {
        return this.password.length >= 6 ? true : false    
      }
    },
    methods : {
      login() {
        const username = this.username
        const password = this.password

        axios({
          method: "post",
          url: "http://127.0.0.1:8000/auth/login/",
          data: {
            username, password
          }
        })
        .then((res)=> {
          console.log(res)
          this.$store.commit('SAVE_TOKEN', res.data.key)
          this.$store.commit("SET_LOGIN_STATUS", true)
        })
        .catch((err)=> {
          console.log(err)
        })
      }
    }
};
</script>

<style>
.login-form {
    background-color: rgb(230, 241, 245);
    box-shadow: 20px 20px 10px 0px rgb(183, 185, 187);
    border-radius: 10px;
}
</style>