import type { Config } from 'tailwindcss'
import * as forms from '@tailwindcss/forms'

const config: Config = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1DA1F2',
                success: '#22C55E',
                danger: '#EF4444',
            },
        },
    },
    plugins: [forms],
}

export default config