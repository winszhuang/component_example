import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Bets from './components/bets/Bets.vue'
import AllBets from './components/bets/AllBets.vue'
import ConsecBets from './components/bets/ConsecBets.vue'
import { MenuKeyEnum } from './constants/menuKey'
import { RouterOptions } from 'vue-router'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    meta: { title: 'Home' },
    children: [
      {
        name: MenuKeyEnum.AllBets,
        path: `/${MenuKeyEnum.AllBets}`,
        component: AllBets
      },
      {
        name: MenuKeyEnum.ConsecBets,
        path: `/${MenuKeyEnum.ConsecBets}`,
        component: ConsecBets
      },
    ]
  },
  {
    name: MenuKeyEnum.Bets,
    path: `/${MenuKeyEnum.Bets}`,
    component: Bets,
    children: [
      {
        name: MenuKeyEnum.AllBets,
        path: `/${MenuKeyEnum.AllBets}`,
        component: AllBets
      },
      {
        name: MenuKeyEnum.ConsecBets,
        path: `/${MenuKeyEnum.ConsecBets}`,
        component: ConsecBets
      },
    ]
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
