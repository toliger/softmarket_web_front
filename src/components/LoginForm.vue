<template lang="html">
  <fragment>
    <v-dialog v-model="dialog" width="500px">
      <v-btn slot="activator" flat class="topbtn">
       Signin
      </v-btn>
      <v-card>
        <v-card-title
          class="headline light-blue lighten-3 topbtn"
          primary-title style="padding-left: 20px"
        >
          SignIn        </v-card-title>
        <form @submit.prevent="login">
          <v-card-text>
            <v-layout column>
              <v-alert
                type="error"
                :value="true"
                v-for="(msg, index) of messages"
                :key="index"
              >
                {{ msg }}
              </v-alert>
              <v-flex>
                <v-text-field
                  prepend-icon="email"
                  name="email"
                  label="Email"
                  id="log_email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="log_password"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" type="submit">Sign In</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </fragment>
</template>

<script lang="js">
  export default  {
    name: 'login-form',
    props: [],
    mounted() {
    },
    data() {
      return {
        dialog: false,
        messages: []
      }
    },
    methods: {
      login(e) {
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        this.$store.dispatch("auth/signinUser", {
          email,
          password
        })
        .then(() => {
          this.dialog = false;
          this.$router.push("/dashboard");
        })
        .catch((e) => {
          this.messages = ["Wrong user / pass !"+ e];
        });
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
</style>
