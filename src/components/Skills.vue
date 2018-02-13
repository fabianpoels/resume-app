<template>
<div id="mainContent">
  <div id="spinner" v-if="loading">
    <spinner></spinner>
  </div>
  <transition name="fade">
    <div id="skills" v-if="skills">
      <div class="box">
        <p>{{skills.description}}</p>
      </div>
      <div class="box">
        <h2>Programming languages</h2>
        <ul>
          <li v-for="programmingLanguage in skills.programmingLanguages">
            {{programmingLanguage.language}}
            <span class="skillLevel" :class="programmingLanguage.skill">{{programmingLanguage.skill}}</span>
          </li>
        </ul>
      </div>
      <div class="box">
        <h2>Frameworks</h2>
        <ul>
          <li v-for="(framework) in skills.frameworks">
            {{framework.name}}
          </li>
        </ul>
      </div>
      <div class="box">
        <h2>Other</h2>
        <ul>
          <li v-for="(o) in skills.other">
            {{o.name}}
          </li>
        </ul>
      </div>
      <div class="box">
        <h2>Languages</h2>
        <ul>
          <li v-for="(language) in skills.languages">
            {{language.language}}
            <span class="skillLevel" :class="language.skill">{{language.skill}}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

div#skills {
  width: 85%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}

div#skills .box {
  flex-grow: 1;
  padding: 10px;
}

div#skills .box h2 {
  font-weight: normal;
  clear: both;
  margin-bottom: 0;
}

div#skills .box ul {
  list-style-type: none;
}

div#skills .box ul li {
  text-align: justify;
}

div#skills .box ul li .skillLevel {
  width: 200px;
}

</style>
