<template>
<div></div>
</template>

<script>
import axios from 'axios'
import Spinner from '@/components/Spinner'
export default {
  name: 'Education',
  components: {
    Spinner
  },
  data () {
    return {
      education: null,
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
      this.error = this.education = null
      axios.get('https://polar-wave-24506.herokuapp.com/api/v1/education')
        .then(response => {
          this.education = response.data
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
