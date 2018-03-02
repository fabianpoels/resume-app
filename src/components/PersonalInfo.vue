<template>
  <div id="mainContent">
    <div id="spinner" v-if="loading">
      <spinner></spinner>
    </div>
    <transition name="fade">
      <div id="personalInfo" v-if="personalInfo">
        <ul>
          <li>{</li>
          <li class="info">"name": "<span class="orange">{{personalInfo.name}}</span>",</li>
          <li class="info">"dateOfBirth": "<span class="orange">{{personalInfo.dateOfBirth}}</span>",</li>
          <li class="info">"email:" "<span class="orange">hello@fabianpoels.com</span>"</li>
          <li>}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import Spinner from '@/components/Spinner'
export default {
  name: 'PersonalInfo',
  components: {
    Spinner
  },
  data () {
    return {
      personalInfo: null,
      error: null,
      loading: false
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.loading = true
      this.error = this.personalInfo = null
      axios.get('https://polar-wave-24506.herokuapp.com/api/v1/personal')
        .then(response => {
          this.personalInfo = response.data
          this.loading = false
        })
        .catch(e => {
          this.error = e
          this.loading = false
        })
    }
  }
}
</script>

<style>
div#personalInfo {
  max-width: 500px;
  min-width: 320px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}

div#personalInfo ul {
  list-style-type: none;
}

div#personalInfo ul li.info{
  padding-left: 20px
}

.orange {
  color: #f2511b;
}
</style>
