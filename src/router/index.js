import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import PersonalInfo from '@/components/PersonalInfo'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Education from '@/components/Education'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/PersonalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/WorkExperience',
      name: 'WorkExperience',
      component: WorkExperience
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '*', redirect: '/PersonalInfo'
    }
  ]
})
