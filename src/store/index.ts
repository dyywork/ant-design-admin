import { createStore } from 'vuex';
import getters from './getters';
import sideMenu from '@/store/modules/sideMenu';

export default createStore({
  modules: {
    sideMenu
  },
  getters,
});