<template lang="html">
  <fragment>
    <v-dialog v-model="dialog" width="500px">
      <v-btn slot="activator" flat class="topbtn">
        Register
      </v-btn>
      <v-card>
        <v-card-title
          class="headline light-blue lighten-3 topbtn"
          primary-title
        >
          Register
        </v-card-title>
        <form @submit.prevent="register">
          <v-card-text>
            <v-layout column>
              <v-flex>
                <v-text-field
                  prepend-icon="email"
                  name="email"
                  label="Email"
                  id="reg_email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="reg_password"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" type="submit">Register</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </fragment>
</template>

<script lang="js">
  export default  {
    name: 'register-form',
    props: [],
    mounted() {
    },
    data() {
      return {
        dialog: false
      }
    },
    methods: {
      register(e) {
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        this.$store.dispatch("auth/registerUser", {
          email,
          password
        }).then(() => {
          this.$router.push("/dashboard");
        }).catch(() => {
        });
        this.dialog = false;
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="less">
.topbtn {
  padding: 5px 0px;
}
.headline {
  padding-left: 15px;
}
</style>
