<template>
<v-app>
  <v-navigation-drawer v-model="sideNav" temporary>
    <v-list>
      <v-list-tile @click="" v-for="item in menuItems" :key="item.title" router :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar dark class="cyan darken-1">
    <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">CoolApp</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <main>
    <router-view>, link: ''</router-view>
    <input type="text" v-model="name">
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

    <button @click="getLeaguePos()">LeaguePos</button>
  </main>
</v-app>
</template>

<script>
var axios = require('axios')
export default {
  data () {
    return {
      sideNav: false,
      name: '',
      summonerId: '',
      lp: '',
      rank: '',
      tier: '',
      server: '',
      menuItems: [{
        icon: 'supervisor_account',
        title: 'Cool list',
        link: '/meetups'
      },
      {
        icon: 'room',
        title: 'Stay cool',
        link: '/meetup/new'
      },
      {
        icon: 'person',
        title: 'Profile',
        link: '/profile'
      },
      {
        icon: 'face',
        title: 'Sign up',
        link: '/signup'
      },
      {
        icon: 'lock_open',
        title: 'Sign in',
        link: '/signin'
      }
      ]
    }
  },
  methods: {
    doSmth: function () {
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
    getLeaguePos: function () {
      this.doSmth()
      var self = this
      this.lp = 'Loading...'
      this.rank = 'Loading...'
      this.tier = 'Loading...'
      setTimeout(function () {
        axios.post('../php/leaguePos.php', {
          id: self.summonerId,
          server: self.server
        })
          .then(response => {
            console.log(response.data)
            self.lp = response.data[0].leaguePoints
            self.rank = response.data[0].rank
            self.tier = response.data[0].tier
          })
          .catch(e => {
            console.log(e)
          })
      }, 500)
    }
  }
}
</script>
