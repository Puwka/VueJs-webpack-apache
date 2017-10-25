<template>
<v-container>
  <v-layout row wrap>
		<v-spacer></v-spacer>
    <v-flex xs6 sm8>
      <v-form>
        <v-text-field label="Summoner Name" v-model="name" required></v-text-field>
        {{ name }}, {{ summonerId }}
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
			<v-btn raised large class="primary" dark @click.native="getLeaguePos()">GO!</v-btn>
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
        setTimeout(function() {
          axios.post('../php/leaguePos.php', {
              id: self.summonerId,
              server: self.server
            })
            .then(response => {
              console.log(response.data)
							if (response.data.length > 1) {
								self.lp = response.data[1].leaguePoints
	              self.rank = response.data[1].rank
	              self.tier = response.data[1].tier
								self.wr = (response.data[1].wins / (response.data[1].wins + response.data[1].losses)) * 100
							} else {
              self.lp = response.data[0].leaguePoints
              self.rank = response.data[0].rank
              self.tier = response.data[0].tier
							self.wr = (response.data[0].wins / (response.data[0].wins + response.data[0].losses)) * 100
						}
            })
            .catch(e => {
              console.log(e)
            })
        }, 500)
      }
    }
  }

</script>
<!-- <input type="text" v-model="name">
<select v-model="server">
	<option value="euw1">EUW</option>
	<option value="na1">NA</option>
	<option value="ru">RU</option>
</select>
<p>Server: {{ server }}</p>
<p>Name: {{ name }}</p>
<p>League: {{ tier }}</p>
<p>Division: {{ rank }}</p>
<p>League Points: {{ lp }}</p>
<p>ID: {{ summonerId }}</p>

<button @click="getLeaguePos()">LeaguePos</button> -->
