import { createStore } from 'vuex';
import getters from './getters';

const modulesFiles = import.meta.globEager("./modules/**/*.ts")
const modules = Object.keys(modulesFiles).reduce((modules: any, modulePath: string) => {
  const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/ig,"$2")
  const value = modulesFiles[modulePath]
  modules[moduleName] = value.default
  return modules
}, {})

export default createStore({
  modules,
  getters,
});
