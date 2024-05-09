import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#009506",
        mainText: '#454545',
        secondaryText: '#8B8B8B',
        otherUserBubble: '#EAEAEA',
        alternativeText: '#FFFFFF',
        blob: '#D0DDF1',
        
      },
      screens: {
        sm: "375px",
        md: "830px",
        lg: '1410px'
      },
      backgroundImage: {
        greenGradient: 'linear-gradient(0deg, #7EA922, #009506)',
        blobs: "url('/blob_1.svg'), url('/blob_2.svg')",
        chatGradient: 'linear-gradient(180deg, #7EA922, #009506)'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}
export default config
