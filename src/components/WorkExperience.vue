<template>
  <div id="mainContent">
    <div id="spinner" v-if="loading">
      <spinner></spinner>
    </div>
    <transition name="fade">
      <div id="experience" v-if="experience">
        <ul>
          <li v-for="e in experience" :key="e.function">
            <ul>
              <li class="title"><span class="name">{{e.name}}</span> <span class="orange">/</span> {{e.function}}</li>
              <li class="timespan">{{e.timespan}}, {{e.location}}</li>
              <li class="description">{{e.description}}</li>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

div#experience {
  width: 10%;
  min-width: 500px;
  margin: auto;
  margin-top: 50px;
}

div#experience ul {
  list-style-type: none;
  margin-bottom: 20px;
  padding: 0;
}

div#experience ul li span.name {
  font-weight: bold;
}

div#experience ul li span.orange {
  color: #f2511b;
  font-weight: bold;
}

div#experience ul li.timespan {
  color: #666;
  margin-top: -2px;
  text-transform: uppercase;
  font-size: 85%;
}

</style>
