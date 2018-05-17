<template>
  <div class="chart">
    <h1>Evolution de ton poids</h1>
    <line-chart :chart-data="datacollection" :options="{
      animation: {
        duration: 2000,
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes : [{
            ticks: {
              autoSkipPadding: 10,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
        }],
        yAxes : [{
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              suggestedMin: 65,
              suggestedMax: 85
            }
        }],
      },
      maintainAspectRation: false
    }"></line-chart>
  </div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
import LineChart from './LineChart';

moment.locale('fr');

export default {
  name: 'HelloWorld',
  components: {
    LineChart,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      weights: [],
      userWeight: null,
      errors: [],
      datacollection: null,
    };
  },

  // Fetches posts when the component is created.
  created() {
    if (!this.$route.params.messengerid) {
      window.MessengerExtensions.getContext(`${process.env.APP_ID}`, (threadContext) => {
        const url = `${process.env.API_URL}api/weight/${threadContext.psid}`;
        axios.get(url)
          .then((response) => {
            this.weights = response.data.weights;
            this.userWeight = response.data.user_weight;
            this.fillData();
          })
          .catch((e) => { this.errors.push(e); });
      }, (err) => {
        // eslint-disable-next-line
        console.error(err);
      });
    } else {
      const url = `${process.env.API_URL}api/weight/${this.$route.params.messengerid}`;
      axios.get(url)
        .then((response) => {
          this.weights = response.data.weights;
          this.userWeight = response.data.user_weight;
          this.fillData();
        })
        .catch((e) => { this.errors.push(e); });
    }
  },
  methods: {
    fillData() {
      const finalWeights = [];
      const weightGoals = [];
      const finalLabels = [];
      this.weights.forEach((obj) => {
        finalWeights.push(obj.weight);
        if (this.userWeight) weightGoals.push(this.userWeight);
        finalLabels.push(moment(obj.createdAt).format('Do MMM'));
      });

      this.datacollection = {
        labels: finalLabels,
        datasets: [
          {
            label: 'Ton poids',
            backgroundColor: '#DC1649',
            pointBackgroundColor: 'white',
            pointBorderColor: '#DC1649',
            pointRadius: '2',
            borderWidth: '1px',
            lineTension: 0.4,
            data: finalWeights,
          },
        ],
      };

      if (this.userWeight) {
        this.datacollection.datasets.unshift({
          label: 'Objectif de poids',
          fill: false,
          pointBackgroundColor: 'white',
          pointBorderColor: '#74b9ff',
          pointRadius: '2',
          borderWidth: '1px',
          borderColor: '#74b9ff',
          lineTension: 0.4,
          data: weightGoals,
        });
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * ((50 - 5) + 1)) + 5;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-bottom: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.chart{
  max-height: 100%;
}
#line-chart{
  margin: 10px;
}
</style>
