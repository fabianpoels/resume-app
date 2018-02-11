<template>
  <div id="mainContent">
    <div id="spinner" v-if="loading">
      <spinner></spinner>
    </div>
    <div id="experience" v-if="experience">
      <ul>
        
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Spinner from '@/components/Spinner'
export default {
  name: 'WorkExperience',
  components: {
    Spinner
  },
  data () {
    return {
      experience: null,
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
      this.error = this.experience = null
      axios.get('https://polar-wave-24506.herokuapp.com/api/v1/experience')
        .then(response => {
          this.experience = response.data
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
