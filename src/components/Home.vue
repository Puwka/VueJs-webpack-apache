<template>
<v-container>
  <v-layout row wrap>
		<v-spacer></v-spacer>
    <v-flex xs6 sm8>
      <v-form>
        <v-text-field label="Summoner Name" v-model="name" required></v-text-field>
        <br>League: {{ tier }}
        <br>Division: {{ rank }}
        <br>League points: {{ lp }}
				<br>Win Rate: {{ wr }}
      </v-form>
    </v-flex>
    <v-flex xs3 sm2 lg1>
      <v-select v-bind:items="items" v-model="server" label="Server" single-line bottom></v-select>
    </v-flex>
		<v-flex xs3 sm2 lg1>
			<v-btn raised large class="primary" dark @click.native="getLeaguePos(), getCurrentGame()">GO!</v-btn>
		</v-flex>
		<v-spacer></v-spacer>
  </v-layout>
</v-container>
</template>
<script>
var axios = require('axios')
export default {
  data() {
    return {
      name: null,
      server: null,
      summonerId: '',
      lp: '',
      rank: '',
      wr: '',
      tier: '',
      items: [{
          text: 'EUW',
          value: 'euw1'
        },
        {
          text: 'NA',
          value: 'na1'
        },
        {
          text: 'RU',
          value: 'ru'
        },
        {
          text: 'BR',
          value: 'br1'
        },
        {
          text: 'KR',
          value: 'kr1'
        },
        {
          text: 'OC',
          value: 'oc1'
        },
        {
          text: 'JP',
          value: 'jp1'
        },
        {
          text: 'EUN',
          value: 'eun1'
        },
        {
          text: 'TR',
          value: 'tr1'
        },
        {
          text: 'LA1',
          value: 'la1'
        },
        {
          text: 'LA2',
          value: 'la2'
        },
      ]
    }
  },
  methods: {
    doSmth: function() {
      console.log('hi')
      axios.post('../php/testing.php', {
          name: this.name,
          server: this.server
        })
        .then(response => {
          console.log(response.data.name)
          this.summonerId = response.data.id
        })
        .catch(e => {
          console.log(e)
        })
    },
    getLeaguePos: function() {
      this.doSmth()
      var self = this
      this.lp = 'Loading...'
      this.rank = 'Loading...'
      this.tier = 'Loading...'
			this.wr = 'Loading...'
      setTimeout(function() {
        axios.post('../php/leaguePos.php', {
            id: self.summonerId,
            server: self.server
          })
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              if (response.data[i].queueType == 'RANKED_SOLO_5x5') {
                self.lp = response.data[i].leaguePoints
                self.rank = response.data[i].rank
                self.tier = response.data[i].tier
                self.wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
              }
            }
          })
          .catch(e => {
            console.log(e)
          })
      }, 500)
    },
		getCurrentGame: function() {
			this.doSmth()
			axios.post('../php/current.php', { id: this.summoneId, server: this.server })
			.then(function(response) {
				console.log(response.data)
			})
			.catch(function(e) {
				console.log(e)
			})
		}
  }
}
</script>
