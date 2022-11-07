import { defineStore } from 'pinia'
import { AppType } from './types'

export const UseAppStore = defineStore('appStore', {
  state: (): AppType => ({}),
  getters: {},
  actions: {},
})
