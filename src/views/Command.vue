<template lang="html">
  <section id="cards">
    <v-container>
      <h1>Passer commande</h1>
      <p v-if="message" class="message">{{ message }}</p>
        <v-form>
      <h2>Adresse</h2>
          <v-text-field
            v-model="adress.country"
            label="Pays"
            required
          ></v-text-field>
          <v-text-field
            v-model="adress.state"
            label="Region"
            required
          ></v-text-field>
          <v-text-field
            v-model="adress.zipcode"
            label="Code Postal"
            required
          ></v-text-field>
          <v-text-field
            v-model="adress.rue"
            label="Rue"
            required
          ></v-text-field>
          <v-text-field
            v-model="adress.ruenum"
            label="Numéro de rue"
            required
          ></v-text-field>
            <h2>Moyen de payement</h2>
            <select v-model="payment">
                <option disabled value="">Choisissez</option>
                  <option>Paypal</option>
                    <option>Visa</option>
                    <option>MasterCard</option>
                    <option>Paul</option>
            </select>
      </v-form>
      <button v-on:click="valid">Proceder au payement</button>
    </v-container>
  </section>
</template>

<script lang="js">
import GETCOMMANDES from "@/graphql/GetCommandes.gql";
import COMMAND from "@/graphql/Command.gql";
  export default  {
    name: 'home-page',
    props: [],
    mounted() {
      this.$apollo.queries.commands.refetch()
    },
    data() {
      return {
        commands: [],
        adress: {
          country: "",
          state: "",
          city: "",
          zipcode: "",
          rue: "",
          ruenum: "",
        },
        payment: "",
        message: ""
      }
    },
    apollo: {
      commands: GETCOMMANDES
    },
    methods: {
      valid() {
        this.$apollo.mutate({
        // Query
        mutation: COMMAND,
        // Parameters
          variables: {
            adress: this.add,
            payment: this.payment
          }
        }).then(() => {
          this.message = "Commande effectuée";
        });
      }
    },
    computed: {
      add() {
        return `${this.adress.ruenum} ${this.adress.rue} ${this.adress.zipcode} ${this.adress.city}
        ${this.adress.state} ${this.adress.country}`;
      }
    }
}
</script>

<style scoped lang="less">
.message {
  color: green;
}
</style>
