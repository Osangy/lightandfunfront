<template>
  <div id='main'>
    <h1>Ton Plumomètre 📈🐥</h1>
    <div id="plumes">
      <h2>Au total tu as :</h2>
      <img v-if="plumes > 200" src="../assets/3_haut.png" height="80" width="120">
      <img v-else-if="plumes > 50" src="../assets/2_moyen.png" height="80" width="120">
      <img v-else src="../assets/1_petit.png" height="80" width="120">
      <p>{{plumes}} plumes</p>
    </div>
    <div id="month">
      <h2>En {{last_month}}, tu as récolté :</h2>
      <img v-if="last_month_plumes > 15" src="../assets/3_haut.png" height="67" width="100">
      <img v-else-if="last_month_plumes > 5" src="../assets/2_moyen.png" height="67" width="100">
      <img v-else src="../assets/1_petit.png" height="67" width="100">
      <p>{{last_month_plumes}} plumes</p>
    </div>
    <div id="month">
      <h2>Ce mois ci, tu as déjà récolté :</h2>
      <img v-if="this_month_plumes > 15" src="../assets/3_haut.png" height="67" width="100">
      <img v-else-if="this_month_plumes > 5" src="../assets/2_moyen.png" height="67" width="100">
      <img v-else src="../assets/1_petit.png" height="67" width="100">
      <p>{{this_month_plumes}} plumes</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';

moment.locale('fr');

export default {
  name: 'Plumeviometre',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      plumes: 0,
      this_month: null,
      this_month_plumes: 0,
      last_month: null,
      last_month_plumes: 0,
      errors: [],
      datacollection: null,
    };
  },

  // Fetches posts when the component is created.
  created() {
    if (!this.$route.params.messengerid) {
      window.MessengerExtensions.getContext('1678638095724206', (threadContext) => {
        const url = `${process.env.API_URL}api/plumeviometre/${threadContext.psid}`;
        axios.get(url)
          .then((response) => {
            this.plumes = response.data.plumes;
            this.this_month = response.data.this_month_plumes.month;
            this.this_month_plumes = response.data.this_month_plumes.plumes;
            this.last_month = response.data.last_month_plumes.month;
            this.last_month_plumes = response.data.last_month_plumes.plumes;
          })
          .catch((e) => { this.errors.push(e); });
      }, (err) => {
        // eslint-disable-next-line
        console.error(err);
      });
    } else {
      const url = `${process.env.API_URL}api/plumeviometre/${this.$route.params.messengerid}`;
      axios.get(url)
        .then((response) => {
          this.plumes = response.data.plumes;
          this.this_month = response.data.this_month_plumes.month;
          this.this_month_plumes = response.data.this_month_plumes.plumes;
          this.last_month = response.data.last_month_plumes.month;
          this.last_month_plumes = response.data.last_month_plumes.plumes;
        })
        .catch((e) => { this.errors.push(e); });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Nunito', sans-serif;
  font-weight: normal;
  margin-bottom: 40px;
}

h2 {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
}

#plumes p {
  margin-top: 5px;
}

#month{
  margin-top: 40px;
}

#month h2{
  margin-bottom: 10px;
}

#month p {
  margin-top: 5px;
}

.month_container{
  width: 40%;
  display: inline-block;
  vertical-align: top;
}
</style>
