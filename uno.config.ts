import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
    presets: [
        presetWind4(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                elms: 'Elms Sans:300,400,700,900',
                neuton: 'Neuton:300,400,700,900',
            },
        }),
    ],
})