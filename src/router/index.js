import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Plumeviometre from '@/components/Plumeviometre';
import RecipesList from '@/components/RecipesList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/weight/:messengerid',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/weight',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/recipes/:messengerid',
      name: 'RecipesList',
      component: RecipesList,
    },
    {
      path: '/plumeviometre/:messengerid',
      name: 'Plumeviometre',
      component: Plumeviometre,
    },
    {
      path: '/plumeviometre',
      name: 'Plumeviometre',
      component: Plumeviometre,
    },
  ],
});
