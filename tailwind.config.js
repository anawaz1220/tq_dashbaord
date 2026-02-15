/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fraud-red': '#E85D75',
        'robocall-orange': '#FFA15C',
        'spoofed-teal': '#5DC1C5',
        'critical-red': '#E85D75',
        'significant-orange': '#FFA15C',
        'suspicious-yellow': '#FFD15C',
        'allowed-green': '#5DC5A8',
        'blocked-red': '#E85D75',
        'carrier-purple': '#9B7EDE',
      },
    },
  },
  plugins: [],
}
