import { defineStore } from 'pinia'
import { HomeState } from './types'

export const UseHomeStore = defineStore('homeStore', {
  state: (): HomeState => ({}),
  getters: {},
  actions: {},
})
