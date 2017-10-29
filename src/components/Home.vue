<template>
<v-container>
  <v-layout row wrap>
		<v-spacer></v-spacer>
    <v-flex xs6 sm8>
      <v-form>
        <v-text-field label="Summoner Name" v-model="name" required></v-text-field>
				<div v-for="summoner in blueTeam">{{summoner}}</div>
				<div v-for="summoner in redTeam">{{summoner}}</div>
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
      blueTeam: [
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        }
      ],
      redTeam: [
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        },
        {
          name: '',
          champ: '',
          lp: '',
          rank: '',
          tier: '',
          wr: ''
        }
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
      for (var i = 0; i < 5; i++) {
        this.blueTeam[i].name = 'Loading..'
        this.blueTeam[i].lp = 'Loading..'
        this.blueTeam[i].rank = 'Loading..'
        this.blueTeam[i].tier = 'Loading..'
        this.blueTeam[i].wr = 'Loading..'
        this.blueTeam[i].champ = 'Loading..'
        this.redTeam[i].name = 'Loading..'
        this.redTeam[i].lp = 'Loading..'
        this.redTeam[i].rank = 'Loading..'
        this.redTeam[i].tier = 'Loading..'
        this.redTeam[i].wr = 'Loading..'
        this.redTeam[i].champ = 'Loading..'
      }
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
              for (var j = 0; j < 5; j++) {
                self.blueTeam[j].champ = response.data.participants[j].championId
              }
              for (var z = 0; z < 5; z++) {
                self.redTeam[z].champ = response.data.participants[z + 5].championId
              }
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
      var self = this
      axios.post('../php/leaguePos.php', {
        id: this.gameIds[0],
        server: this.server
      })
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].queueType === 'RANKED_SOLO_5x5') {
            self.blueTEam[0].name = response.data[i].playerOrTeamName
            self.blueTEam[0].lp = response.data[i].leaguePoints
            self.blueTEam[0].rank = response.data[i].rank
            self.blueTEam[0].tier = response.data[i].tier
            self.blueTEam[0].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.blueTeam[1].name = response.data[i].playerOrTeamName
            self.blueTeam[1].lp = response.data[i].leaguePoints
            self.blueTeam[1].rank = response.data[i].rank
            self.blueTeam[1].tier = response.data[i].tier
            self.blueTeam[1].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.blueTeam[2].name = response.data[i].playerOrTeamName
            self.blueTeam[2].lp = response.data[i].leaguePoints
            self.blueTeam[2].rank = response.data[i].rank
            self.blueTeam[2].tier = response.data[i].tier
            self.blueTeam[2].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.blueTeam[3].name = response.data[i].playerOrTeamName
            self.blueTeam[3].lp = response.data[i].leaguePoints
            self.blueTeam[3].rank = response.data[i].rank
            self.blueTeam[3].tier = response.data[i].tier
            self.blueTeam[3].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.blueTeam[4].name = response.data[i].playerOrTeamName
            self.blueTeam[4].lp = response.data[i].leaguePoints
            self.blueTeam[4].rank = response.data[i].rank
            self.blueTeam[4].tier = response.data[i].tier
            self.blueTeam[4].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.redTeam[0].name = response.data[i].playerOrTeamName
            self.redTeam[0].lp = response.data[i].leaguePoints
            self.redTeam[0].rank = response.data[i].rank
            self.redTeam[0].tier = response.data[i].tier
            self.redTeam[0].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.redTeam[1].name = response.data[i].playerOrTeamName
            self.redTeam[1].lp = response.data[i].leaguePoints
            self.redTeam[1].rank = response.data[i].rank
            self.redTeam[1].tier = response.data[i].tier
            self.redTeam[1].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.redTeam[2].name = response.data[i].playerOrTeamName
            self.redTeam[2].lp = response.data[i].leaguePoints
            self.redTeam[2].rank = response.data[i].rank
            self.redTeam[2].tier = response.data[i].tier
            self.redTeam[2].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.redTeam[3].name = response.data[i].playerOrTeamName
            self.redTeam[3].lp = response.data[i].leaguePoints
            self.redTeam[3].rank = response.data[i].rank
            self.redTeam[3].tier = response.data[i].tier
            self.redTeam[3].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
            self.redTeam[4].name = response.data[i].playerOrTeamName
            self.redTeam[4].lp = response.data[i].leaguePoints
            self.redTeam[4].rank = response.data[i].rank
            self.redTeam[4].tier = response.data[i].tier
            self.redTeam[4].wr = Math.round((response.data[i].wins / (response.data[i].wins + response.data[i].losses)) * 100) + '%'
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
