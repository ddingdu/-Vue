<template>
  <b-container role="group" class="p-5 signup-form">
    <h1>회원가입</h1>
    <b-row>
      <label for="input-username">아이디</label>
      <b-form-input
        id="input-username"
        placeholder="ID"
        v-model="username"
      ></b-form-input>
    </b-row>

    <b-row>
      <label for="input-password1">비밀번호1</label>
      <b-form-input
        id="input-password1"
        placeholder="PASSWORD1"
        v-model="password1"
        trim
        type="password"
      ></b-form-input>
    </b-row>

    <b-row>
      <label for="input-password2">비밀번호2</label>
      <b-form-input
        id="input-password2"
        placeholder="PASSWORD2"
        v-model="password2"
        trim
        type="password"
      ></b-form-input>
    </b-row>
    <b-button variant="success" @click="signup"> 회원가입 </b-button>

  </b-container>
</template>

<script>
import axios from "axios"

export default {
  name: "SignUpView",
  data() {
    return {
        username: "",
        password1: "",
        password2: "",
    }
  },
  methods: {
    signup() {
      axios({
          method: "post",
          url: "http://127.0.0.1:8000/auth/signup/",
          data: {
              username: this.username,
              password1: this.password1,
              password2: this.password2
          }
      })
      .then((res)=>{
          console.log(res.data)
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  }
};
</script>

<style>
.signup-form {
    background-color: rgb(230, 241, 245);
    box-shadow: 20px 20px 10px 0px rgb(183, 185, 187);
    border-radius: 10px;
}
</style>