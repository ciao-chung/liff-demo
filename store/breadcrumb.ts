import {ActionContext} from 'vuex/types'

export interface State {
  scope: string,
  googleStructuredData: null|AnyObject,
  items: BreadcrumbItem[],
}

export default {
  namespaced: true,
  state: () => ({
    scope: 'default',
    googleStructuredData: null,
    items: []
  }),
  mutations: {
    set: (state: State, data: { key: string, value: any}) => {
      // @ts-ignore
      state[data.key] = data.value
    },
    setItems: (state: State, items: BreadcrumbItem[]) => {
      state.items = items
    },
    setScope: (state: State, scope: string) => {
      state.scope = scope
    },
  },
  getters: {
    scope: (state: State) : string => state.scope,
    item: (state: State) : BreadcrumbItem[] => state.items,
    googleStructuredData: (state: State) : null|AnyObject => state.googleStructuredData,
  },
}
