import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import BasicInformationPage from '@/components/BasicInformationPage'
import QuestionnairePage from '@/components/QuestionnairePage'
import ConsultationPage from '@/components/ConsultationPage'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/basic',
      component: BasicInformationPage
    },
    {
      path: '/question',
      component: QuestionnairePage
    },
    {
      path: '/consultation',
      component: ConsultationPage
    }
  ]
})