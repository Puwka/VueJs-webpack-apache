<template>
<v-container>
  <v-layout row wrap>
		<v-spacer></v-spacer>
    <v-flex xs6 sm8>
      <v-form>
        <v-text-field label="Summoner Name" v-model="name" required></v-text-field>
				<br>{{ summoners }}
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
  data () {
    return {
      name: null,
      server: null,
      summonerId: '',
      lp: '',
      rank: '',
      wr: '',
      tier: '',
      gameIds: [],
      summoners: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
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
      }
      ]
    }
  },
  methods: {
    getLeaguePos: function () {
      this.lp = 'Loading...'
      this.rank = 'Loading...'
      this.tier = 'Loading...'
      this.wr = 'Loading...'
      var self = this
      axios.post('../php/testing.php', {
        name: this.name,
        server: this.server
      })
        .then(function (response) {
          self.summonerId = response.data.id
          axios.post('../php/leaguePos.php', {
            id: self.summonerId,
            server: self.server
          })
            .then(function (response) {
              for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
                  self.lp = response.data[i].leaguePoints
                  self.rank = response.data[i].rank
                  self.tier = response.data[i].tier
                  self.wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
                }
              }
            })
            .catch(function (e) {
              console.log(e)
            })
        })
        .catch(e => {
          console.log(e)
        })
    },
    getCurrentGame: function () {
      var self = this
      axios.post('../php/testing.php', {
        name: this.name,
        server: this.server
      })
      .then(function (response) {
        self.summonerId = response.data.id
        axios.post('../php/current.php', {
          id: self.summonerId,
          server: self.server
        })
          .then(function (response) {
            console.log(response.data)
            for (var i = 0; i < response.data.participants.length; i++) {
              self.gameIds.push(response.data.participants[i].summonerId)
            }
            self.getGameStats()
          })
          .catch(function (e) {
            console.log(e)
          })
      })
      .catch(function (e) {
        console.log(e)
      })
    },
    getGameStats: function () {
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[0],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[0].name = response.data[i].playerOrTeamName
            this.summoners[0].lp = response.data[i].leaguePoints
            this.summoners[0].rank = response.data[i].rank
            this.summoners[0].tier = response.data[i].tier
            this.summoners[0].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[1],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[1].name = response.data[i].playerOrTeamName
            this.summoners[1].lp = response.data[i].leaguePoints
            this.summoners[1].rank = response.data[i].rank
            this.summoners[1].tier = response.data[i].tier
            this.summoners[1].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[2],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[2].name = response.data[i].playerOrTeamName
            this.summoners[2].lp = response.data[i].leaguePoints
            this.summoners[2].rank = response.data[i].rank
            this.summoners[2].tier = response.data[i].tier
            this.summoners[2].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[3],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[3].name = response.data[i].playerOrTeamName
            this.summoners[3].lp = response.data[i].leaguePoints
            this.summoners[3].rank = response.data[i].rank
            this.summoners[3].tier = response.data[i].tier
            this.summoners[3].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[4],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[4].name = response.data[i].playerOrTeamName
            this.summoners[4].lp = response.data[i].leaguePoints
            this.summoners[4].rank = response.data[i].rank
            this.summoners[4].tier = response.data[i].tier
            this.summoners[4].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[5],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[5].name = response.data[i].playerOrTeamName
            this.summoners[5].lp = response.data[i].leaguePoints
            this.summoners[5].rank = response.data[i].rank
            this.summoners[5].tier = response.data[i].tier
            this.summoners[5].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[6],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[6].name = response.data[i].playerOrTeamName
            this.summoners[6].lp = response.data[i].leaguePoints
            this.summoners[6].rank = response.data[i].rank
            this.summoners[6].tier = response.data[i].tier
            this.summoners[6].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[7],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[7].name = response.data[i].playerOrTeamName
            this.summoners[7].lp = response.data[i].leaguePoints
            this.summoners[7].rank = response.data[i].rank
            this.summoners[7].tier = response.data[i].tier
            this.summoners[7].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[8],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[8].name = response.data[i].playerOrTeamName
            this.summoners[8].lp = response.data[i].leaguePoints
            this.summoners[8].rank = response.data[i].rank
            this.summoners[8].tier = response.data[i].tier
            this.summoners[8].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[9],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            this.summoners[9].name = response.data[i].playerOrTeamName
            this.summoners[9].lp = response.data[i].leaguePoints
            this.summoners[9].rank = response.data[i].rank
            this.summoners[9].tier = response.data[i].tier
            this.summoners[9].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100)
          }
        }
      })
      .catch(function (e) {
        console.log(e)
      })
    }
  }
}
</script>
