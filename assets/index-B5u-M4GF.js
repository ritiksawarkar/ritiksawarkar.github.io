const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-UNGDoNjx.js","assets/splitTextHelper-BRXRLzSu.js","assets/animation-vendor-0lJgtTtq.js","assets/index-DqosVs2G.js","assets/react-vendor-lFTZYCSx.js","assets/three-core-7BYmml3Z.js","assets/three-stdlib-a4FMhbQG.js","assets/r3f-helpers-CzItHqMW.js","assets/r3f-core-Cd27rpCo.js","assets/MainContainer-BWbz-AzE.js","assets/icons-vendor-0XeV5sZQ.js","assets/MainContainer-1e-lEZXU.css"])))=>i.map(i=>d[i]);
import{r as c,j as e,c as K}from"./react-vendor-lFTZYCSx.js";import{g as Y,S as Z}from"./animation-vendor-0lJgtTtq.js";import{_ as q}from"./r3f-helpers-CzItHqMW.js";import"./three-core-7BYmml3Z.js";import"./three-stdlib-a4FMhbQG.js";import"./r3f-core-Cd27rpCo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();var B={};function J(r){if(typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=r,document.head.appendChild(t),r}Object.defineProperty(B,"__esModule",{value:!0});var o=c;function Q(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var h=Q(o);J(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const ee=o.forwardRef(function({style:t={},className:s="",autoFill:i=!1,play:n=!0,pauseOnHover:a=!1,pauseOnClick:m=!1,direction:l="left",speed:w=50,delay:u=0,loop:f=0,gradient:j=!1,gradientColor:S="white",gradientWidth:y=200,onFinish:W,onCycleComplete:$,onMount:C,children:E},F){const[M,z]=o.useState(0),[N,G]=o.useState(0),[R,L]=o.useState(1),[I,V]=o.useState(!1),X=o.useRef(null),p=F||X,x=o.useRef(null),b=o.useCallback(()=>{if(x.current&&p.current){const d=p.current.getBoundingClientRect(),P=x.current.getBoundingClientRect();let g=d.width,v=P.width;(l==="up"||l==="down")&&(g=d.height,v=P.height),L(i&&g&&v&&v<g?Math.ceil(g/v):1),z(g),G(v)}},[i,p,l]);o.useEffect(()=>{if(I&&(b(),x.current&&p.current)){const d=new ResizeObserver(()=>b());return d.observe(p.current),d.observe(x.current),()=>{d&&d.disconnect()}}},[b,p,I]),o.useEffect(()=>{b()},[b,E]),o.useEffect(()=>{V(!0)},[]),o.useEffect(()=>{typeof C=="function"&&C()},[]);const A=o.useMemo(()=>i?N*R/w:N<M?M/w:N/w,[i,M,N,R,w]),U=o.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!n||a?"paused":"running","--pause-on-click":!n||a&&!m||m?"paused":"running","--width":l==="up"||l==="down"?"100vh":"100%","--transform":l==="up"?"rotate(-90deg)":l==="down"?"rotate(90deg)":"none"}),[t,n,a,m,l]),H=o.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof y=="number"?`${y}px`:y}),[S,y]),D=o.useMemo(()=>({"--play":n?"running":"paused","--direction":l==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${u}s`,"--iteration-count":f?`${f}`:"infinite","--min-width":i?"auto":"100%"}),[n,l,A,u,f,i]),_=o.useMemo(()=>({"--transform":l==="up"?"rotate(90deg)":l==="down"?"rotate(-90deg)":"none"}),[l]),T=o.useCallback(d=>[...Array(Number.isFinite(d)&&d>=0?d:0)].map((P,g)=>h.default.createElement(o.Fragment,{key:g},o.Children.map(E,v=>h.default.createElement("div",{style:_,className:"rfm-child"},v)))),[_,E]);return I?h.default.createElement("div",{ref:p,style:U,className:"rfm-marquee-container "+s},j&&h.default.createElement("div",{style:H,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:$,onAnimationEnd:W},h.default.createElement("div",{className:"rfm-initial-child-container",ref:x},o.Children.map(E,d=>h.default.createElement("div",{style:_,className:"rfm-child"},d))),T(R-1)),h.default.createElement("div",{className:"rfm-marquee",style:D},T(R))):null});var te=B.default=ee;const k={initials:"RS",name:{first:"Ritik",last:"Sawarkar",full:"Ritik Sawarkar"},email:"ritiksawarkar06@gmail.com",hero:{prefix:"A Full Stack",titles:["Developer","MERN Stack Developer"],marquee:["Full Stack Developer","MERN Stack Developer"]},focus:"MERN stack products, hackathon builds, internal tools, and real-world problem solving through scalable web apps.",resume:{href:"mailto:ritiksawarkar06@gmail.com?subject=Resume%20Request",title:"Resume available on request"},socials:[{label:"GitHub",href:"https://github.com/ritiksawarkar",platform:"github",showInSidebar:!0,showInContact:!0},{label:"LinkedIn",href:"https://www.linkedin.com/in/ritik-sawarkar-9775252a3/",platform:"linkedin",showInSidebar:!0,showInContact:!0}],career:[{role:"MERN Stack Developer",org:"Full-Stack Foundations",year:"2023",description:"Built end-to-end web applications with React, Node.js, Express.js, and MongoDB, focusing on authentication, CRUD workflows, responsive interfaces, and deployment-ready architecture."},{role:"Hackathon Developer",org:"Rapid Build Projects",year:"2024",description:"Worked in fast-paced hackathon environments to turn ideas into working products, collaborating on UI, APIs, and product logic while shipping usable prototypes under tight deadlines."},{role:"Full Stack Developer",org:"Products and Internal Tools",year:"NOW",description:"Currently building products like EcoSwap, FinVerse, and a web-based code compiler while deepening expertise in scalable APIs, Tailwind-driven UI systems, and Python-based ML fundamentals."}],projects:[{title:"EcoSwap",category:"Sustainable Product Exchange Platform",summary:"A web-based platform where users can discover, list, and trade eco-friendly products through a clean, community-focused experience.",tools:"React, Node.js, Express.js, MongoDB, Tailwind CSS",image:"/images/project-ecoswap.svg",link:"https://github.com/ritiksawarkar/ecoswap"},{title:"FinVerse",category:"Digital Banking Platform",summary:"An all-in-one banking experience with account workflows, financial dashboards, and product flows designed for modern web users.",tools:"MERN Stack, Tailwind CSS, Authentication, Dashboards",image:"/images/project-finverse.svg",link:"https://github.com/ritiksawarkar/finverse"},{title:"Web-Based Code Compiler",category:"Internal Hackathon Evaluation Tool",summary:"An online compiler interface built to support internal hackathons and student evaluation with fast submission and execution workflows.",tools:"React, Node.js, Execution Engine Integration, UI Workflows",image:"/images/project-compiler.svg",link:"https://github.com/ritiksawarkar/jit-cc-full"},{title:"Hackathon Project Suite",category:"MERN Stack and Prototype Builds",summary:"A growing collection of rapid prototypes and full-stack builds created to solve workflow, automation, and community problems in short development cycles.",tools:"React, Node.js, MongoDB, Tailwind CSS, REST APIs",image:"/images/project-hackathon-suite.svg",link:"https://github.com/ritiksawarkar"}]},ne=({percent:r})=>{const{setIsLoading:t}=ae(),[s,i]=c.useState(!1),[n,a]=c.useState(!1),[m,l]=c.useState(!1);r>=100&&setTimeout(()=>{i(!0),setTimeout(()=>{a(!0)},1e3)},600),c.useEffect(()=>{q(()=>import("./initialFX-UNGDoNjx.js"),__vite__mapDeps([0,1,2])).then(u=>{n&&(l(!0),setTimeout(()=>{u.initialFX&&u.initialFX(),t(!1)},900))})},[n]);function w(u){const{currentTarget:f}=u,j=f.getBoundingClientRect(),S=u.clientX-j.left,y=u.clientY-j.top;f.style.setProperty("--mouse-x",`${S}px`),f.style.setProperty("--mouse-y",`${y}px`)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"loading-header",children:[e.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:k.initials}),e.jsx("div",{className:`loaderGame ${m&&"loader-out"}`,children:e.jsxs("div",{className:"loaderGame-container",children:[e.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((u,f)=>e.jsx("div",{className:"loaderGame-line"},f))}),e.jsx("div",{className:"loaderGame-ball"})]})})]}),e.jsxs("div",{className:"loading-screen",children:[e.jsx("div",{className:"loading-marquee",children:e.jsxs(te,{children:[e.jsxs("span",{children:[" ",k.hero.marquee[0]]}),e.jsx("span",{children:k.hero.marquee[1]}),e.jsxs("span",{children:[" ",k.hero.marquee[0]]}),e.jsx("span",{children:k.hero.marquee[1]})]})}),e.jsxs("div",{className:`loading-wrap ${m&&"loading-clicked"}`,onMouseMove:u=>w(u),children:[e.jsx("div",{className:"loading-hover"}),e.jsxs("div",{className:`loading-button ${s&&"loading-complete"}`,children:[e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-content",children:e.jsxs("div",{className:"loading-content-in",children:["Loading ",e.jsxs("span",{children:[r,"%"]})]})}),e.jsx("div",{className:"loading-box"})]}),e.jsx("div",{className:"loading-content2",children:e.jsx("span",{children:"Welcome"})})]})]})]})]})},he=r=>{let t=0,s=setInterval(()=>{if(t<=50){let a=Math.round(Math.random()*5);t=t+a,r(t)}else clearInterval(s),s=setInterval(()=>{t=t+Math.round(Math.random()),r(t),t>91&&clearInterval(s)},2e3)},100);function i(){clearInterval(s),r(100)}function n(){return new Promise(a=>{clearInterval(s),s=setInterval(()=>{t<100?(t++,r(t)):(a(t),clearInterval(s))},2)})}return{loaded:n,percent:t,clear:i}},O=c.createContext(null),re=({children:r})=>{const[t,s]=c.useState(!0),[i,n]=c.useState(0),a={isLoading:t,setIsLoading:s,setLoading:n};return c.useEffect(()=>{},[i]),e.jsxs(O.Provider,{value:a,children:[t&&e.jsx(ne,{percent:i}),e.jsx("main",{className:"main-body",children:r})]})},ae=()=>{const r=c.useContext(O);if(!r)throw new Error("useLoading must be used within a LoadingProvider");return r},oe=c.lazy(()=>q(()=>import("./index-DqosVs2G.js"),__vite__mapDeps([3,4,5,6,2,7,8]))),ie=c.lazy(()=>q(()=>import("./MainContainer-BWbz-AzE.js"),__vite__mapDeps([9,7,4,5,6,8,10,2,1,11]))),se=()=>e.jsx(e.Fragment,{children:e.jsx(re,{children:e.jsx(c.Suspense,{children:e.jsx(ie,{children:e.jsx(c.Suspense,{children:e.jsx(oe,{})})})})})});Y.registerPlugin(Z);K(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(se,{})}));export{k as p,he as s,ae as u};
