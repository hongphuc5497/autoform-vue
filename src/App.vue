<template>
  <div id="app">
    <h3>Firebase App</h3>
    {{ firebaseData }}
    
    <h3>Form Data</h3>
    {{ firebaseData }}

    <form>
      <input type="email" name="email" v-model="formData.email"/>
      <input type="text" name="name" v-model="formData.name"/>
      <input type="tel" name="phone" v-model="formData.phone"/>

      <button type="submit"></button>
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
      formData: {}
    };
  },
  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    };
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
