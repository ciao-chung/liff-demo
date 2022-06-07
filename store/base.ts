import {ActionContext} from 'vuex/types'
import {ApplicationInterface} from 'kernel/types/application'

import siteConfig from 'src/config/site'
import eagleEnv from 'src/config/env.json'
declare type deviceType = 'xl'|'lg'|'md'|'sm'|'xs'
declare type deviceSize = { width: number, height: number }
export interface State {
  layoutReady: boolean,
  application: ApplicationInterface | null,
  device: deviceType,
  size: deviceSize,
  isNavFixTop: boolean,
  mobileNavActive: boolean,
}

export default {
  namespaced: true,
  state: () => ({
    layoutReady: false,
    application: null,
    device: 'lg',
    size: {
      width: 0,
      height: 0,
    },
    isNavFixTop: true,
    mobileNavActive: false,
    routeMutantNav: false,
    pageMutantNav: false,
  }),
  mutations: {
    setMobileNavActive: (state: State, status: boolean) => {
      state.mobileNavActive = status
    },
    set: (state: State, data: { key: string, value: any}) => {
      // @ts-ignore
      state[data.key] = data.value
    },
    setupLayoutReady: (state: State, status: boolean) => {
      state.layoutReady = status
    },
    initApplication: (state: State, application: ApplicationInterface) : void => {
      state.application = application
    },
    setDevice: (state: State, device: deviceType) : void => {
      state.device = device
    },
    setSize: (state: State, size: deviceSize) : void => {
      state.size = size
    },
  },
  actions: {
    setupLayoutReady: (context: any, status: boolean) => {
      context.commit('setupLayoutReady', status)
    },
    initApplication: (context: ActionContext<string, boolean>, data: ApplicationInterface) : void => {
      context.commit('initApplication', data)
    },
  },
  getters: {
    application: (state: State) : ApplicationInterface|null => state.application,
    oauthClient: (state: State) => window.eagleLodash.get(state.application, 'oauthClient'),
    layoutReady: (state: State) : boolean => state.layoutReady,
    siteName: (state: State, getters: any) => siteConfig.name,
    slogan: (state: State, getters: any) => siteConfig.slogan,
    logoUrl: (state: State, getters: any) => require('assets/logo.png'),
    tinyLogoUrl: (state: State, getters: any) => require('assets/logo-tiny.png'),
    device: (state: State, getters: any) : deviceType => state.device,
    size: (state: State, getters: any) : deviceSize => state.size,
    isNavFixTop: (state: State, getters: any) : boolean => state.isNavFixTop,
    eagleEnv: () : EagleEnv => eagleEnv,
    frontendDomain: () : string => eagleEnv.frontendDomain,
    mobileNavActive: (state: State) : boolean => state.mobileNavActive,
  },
}
