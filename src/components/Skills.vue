<template>
<div id="mainContent">
  <div id="spinner" v-if="loading">
    <spinner></spinner>
  </div>
  <div id="skills" v-if="skills">
    <div id="left">
      <h2>Programming languages</h2>
      <ul>
        <li v-for="programmingLanguage in skills.programmingLanguages">
          {{programmingLanguage.language}}
          <span class="skillLevel" :class="programmingLanguage.skill">{{programmingLanguage.skill}}</span>
        </li>
      </ul>
      <h2>Frameworks</h2>
      <ul>
        <li v-for="(framework) in skills.frameworks">
          {{framework.name}}
        </li>
      </ul>
      <h2>Other</h2>
      <ul>
        <li v-for="(o) in skills.other">
          {{o.name}}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Spinner from '@/components/Spinner'
export default {
  name: 'Skills',
  components: {
    Spinner
  },
  data () {
    return {
      skills: null,
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
      this.error = this.skills = null
      axios.get('https://polar-wave-24506.herokuapp.com/api/v1/skills')
        .then(response => {
          this.skills = response.data
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
div#skills {
  margin-top: 50px;
}

div#skills div#left {
  width: 40%;
  text-align: right;
}

div#skills div#left h2 {
  font-weight: normal;
  clear: both;
  margin-bottom: 0;
}

div#skills div#left ul {
  float: right;
  width: 50%;
  list-style-type: none;
}

div#skills div#left ul li .skillLevel {
  width: 200px;
}

</style>
