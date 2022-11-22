import { defineStore } from 'pinia'
import { UserState } from './types'

export const UseUserStore = defineStore('userStorer', {
  state: (): UserState => ({
    visible: false,
  }),
  getters: {},
  actions: {
    setVisible(visible: boolean) {
      this.visible = visible
    },
  },
})
