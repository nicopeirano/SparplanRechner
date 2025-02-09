import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"], // **Das ist wichtig!**
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

