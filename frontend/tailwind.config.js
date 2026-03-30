/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT:'#1A4FD6', d:'#1240B8', mid:'#2D6BE4', xl:'#EBF1FF', pale:'#F0F5FF' },
        gold: { DEFAULT:'#F5A623', d:'#E09010', l:'#FEF3C7' },
        dark: '#060E25',
        brand: '#0D1E42',
        muted: '#5A6A8A',
        border: '#DDE5F8',
        bg: '#F7F9FF',
      },
      fontFamily: { jakarta: ['"Plus Jakarta Sans"','sans-serif'] },
      animation: {
        tick: 'tick 32s linear infinite',
        marquee2: 'marquee2 18s linear infinite',
        ripple: 'ripple 2s ease-out infinite',
        f1: 'f1 4.2s ease-in-out infinite',
        f2: 'f2 5s ease-in-out infinite',
        f3: 'f3 4.8s ease-in-out infinite',
        wb: 'wb 3s ease-in-out infinite',
      },
      keyframes: {
        tick: { '0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'} },
        marquee2: { '0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'} },
        ripple: { '0%':{boxShadow:'0 0 0 0 rgba(26,79,214,0.4)'},'70%':{boxShadow:'0 0 0 8px rgba(26,79,214,0)'},'100%':{boxShadow:'0 0 0 0 rgba(26,79,214,0)'} },
        f1: { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-9px)'} },
        f2: { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-7px)'} },
        f3: { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-11px)'} },
        wb: { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-5px)'} },
      },
    },
  },
  plugins: [],
};
