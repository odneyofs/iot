<template>
  <div>
    <form @submit.prevent="login">
      <div class="form-group">
        <float-label>
        <input type="email" v-model="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address">
        </float-label>
      </div>
      <div class="form-group">
        <float-label>
          <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password">
        </float-label>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Login</button>
    </form>
  </div>
</template>
<script>
import FloatLabel from 'vue-float-label/components/FloatLabel.vue';
import firebase from 'firebase';
export default {
  components: {
    FloatLabel,
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    Login() {
      firebase.auth().signInwithEmailAndPassword(this.email, this.password)
      .then((user) => {
        alert(user.email);
      },
      (err) => {
        alert(err);
      });
    },
  },
  name: 'Login',
};
</script>

<style>
</style>