import Vue from 'vue'
import Router from 'vue-router'

import ArticlesList from './components/articles-list.vue'
import ArticlesCreate from './components/articles-create.vue'
import ArticlesEdit from './components/articles-edit.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/articles/list'
    },

    {
      path: '/articles/list',
      name: 'list',
      component: ArticlesList
    },
    
    {
      path: '/articles/create',
      name: 'create',
      component: ArticlesCreate
    },

    {
      path: '/articles/edit/:id',
      name: 'create',
      component: ArticlesEdit
    },

  ]
})
