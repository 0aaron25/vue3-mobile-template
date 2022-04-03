import { defineStore } from "pinia"

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    themeVars: {},
  }),
  actions: {
    setThemeVars(value: object) {
      this.themeVars = { ...this.themeVars, ...value }
    },
  },
})
