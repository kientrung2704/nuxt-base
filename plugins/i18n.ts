import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import vi from '../locales/vi.json'

export let t: (v: string) => string
export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        silentTranslationWarn: true,
        fallbackLocale: 'vi',
        locale: 'vi',
        messages: {
            en,
            vi
        }
    })
    t = i18n.global.t
    vueApp.use(i18n)
})