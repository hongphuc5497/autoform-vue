<template>
  <div id="app">
    <h3>Firebase App</h3>
    {{ firebaseData }}

    <h3>Form Data</h3>
    {{ firebaseData }}

    <form @submit.prevent="updateFirebase">
      <input type="email" name="email" v-model="formData.email" />
      <input type="text" name="name" v-model="formData.name" />
      <input type="tel" name="phone" v-model="formData.phone" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import db from "./firebase";

const documentPath = "contacts/jeff";

export default {
  data() {
    return {
      firebaseData: null,
      formData: {},
      state: "loading",
    };
  },
  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    };
  },
  methods: {
    async updateFirebase() {
      try {
        await db.doc(documentPath).set(this.formData);
        this.state = "synced";
      } catch (error) {
        this.errorMessage = JSON.stringify(error);
        this.state = "error";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
