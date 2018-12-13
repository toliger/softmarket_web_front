<template lang="html">
  <v-toolbar-items>
    <LoginForm/>
    <RegisterForm/>
  </v-toolbar-items>
</template>

<script lang="js">
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
  export default  {
    name: 'nav-links',
    props: [],
    components: {
      LoginForm,
      RegisterForm
    },
    mounted() {
    },
    data() {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="less">
.nav-links {
}
</style>
