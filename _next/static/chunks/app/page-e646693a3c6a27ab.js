(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8413:(e,r,t)=>{Promise.resolve().then(t.bind(t,57)),Promise.resolve().then(t.bind(t,1917)),Promise.resolve().then(t.t.bind(t,6986,23)),Promise.resolve().then(t.t.bind(t,8173,23))},57:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var s=t(5155),n=t(2115);function o(e){let{children:r}=e,[t,o]=(0,n.useState)(!1),i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(r=>{let[t]=r;t.isIntersecting&&(o(!0),e.disconnect())},{root:null,rootMargin:"0px",threshold:.2});return i.current&&e.observe(i.current),()=>{i.current&&e.unobserve(i.current)}},[]),(0,s.jsx)("div",{ref:i,className:"scroll-reveal ".concat(t?"visible":""),children:r})}},1917:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var s=t(5155),n=t(1579);function o(){let{isSpotifyPlaying:e,toggleSpotify:r}=(0,n.J)();return(0,s.jsxs)("div",{className:"relative bg-secondary-800/50 backdrop-blur-sm p-4 rounded-xl border border-secondary-700 cursor-pointer",onClick:r,children:[(0,s.jsx)("iframe",{src:"https://open.spotify.com/embed/track/29CqjSgueQYgqG227LyQ87?utm_source=generator&theme=0&autoplay=".concat(e?1:0),width:"100%",height:"80",frameBorder:"0",allow:"encrypted-media",className:"rounded-lg relative z-10"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-primary-500/10 rounded-lg z-20 pointer-events-none"})]})}},1579:(e,r,t)=>{"use strict";t.d(r,{J:()=>l,MusicProvider:()=>i});var s=t(5155),n=t(2115);let o=(0,n.createContext)(null),i=e=>{let{children:r}=e,[t,i]=(0,n.useState)(()=>"true"===localStorage.getItem("music-state")),[l,u]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{localStorage.setItem("music-state",t.toString())},[t]),(0,s.jsx)(o.Provider,{value:{isPlaying:t,toggleMusic:()=>{i(!t),l&&u(!1)},isSpotifyPlaying:l,toggleSpotify:()=>{u(!l),t&&i(!1)}},children:r})},l=()=>{let e=(0,n.useContext)(o);if(!e)throw Error("useMusic must be used within a MusicProvider");return e}},6986:()=>{}},e=>{var r=r=>e(e.s=r);e.O(0,[67,173,441,517,358],()=>r(8413)),_N_E=e.O()}]);