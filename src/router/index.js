import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import RecipesList from '@/components/RecipesList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/weight/:messengerid/goal/:goal',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/recipes/:messengerid',
      name: 'RecipesList',
      component: RecipesList,
    },
  ],
});
