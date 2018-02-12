<template>
  <div id="mainContent">
    <div id="spinner" v-if="loading">
      <spinner></spinner>
    </div>
    <transition name="fade">
      <div id="education" v-if="education">
        <ul>
          <li v-for="e in education">
            <ul>
              <li class="title"><span class="instance">{{e.instance}}</span> <span class="orange">/</span> {{e.degree}}</li>
              <li class="timespan">{{e.timespan}}</li>
              <li class="comment">{{e.comment}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </transition>
  </div>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

div#education {
  width: 1%;
  min-width: 450px;
  margin: 0 auto;
  margin-top: 50px;
}

div#education ul {
  list-style-type: none;
  margin-bottom: 20px;
  padding: 0;
}

div#education ul li span.instance {
  font-weight: bold;
}

div#education ul li span.orange {
  color: #f2511b;
  font-weight: bold;
}

div#education ul li.timespan {
  color: #666;
  margin-top: -2px;
  text-transform: uppercase;
  font-size: 85%;
}
</style>
