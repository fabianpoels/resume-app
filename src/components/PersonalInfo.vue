<template>
  <div id="mainContent">
    <div id="spinner" v-if="loading">
      <spinner></spinner>
    </div>
    <div id="personalInfo">
      {{personalInfo}}
    </div>
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

</style>
