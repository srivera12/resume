(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{6886:function(e,r,t){"use strict";t.d(r,{ZP:function(){return S}});var n=t(1048),i=t(2793),a=t(7294),o=t(6010),s=t(5408),c=t(9707),l=t(7192),d=t(2110),u=t(7623);var m=a.createContext(),h=t(3620);function g(e){return(0,h.Z)("MuiGrid",e)}const p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=(0,t(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...p.map((e=>`grid-xs-${e}`)),...p.map((e=>`grid-sm-${e}`)),...p.map((e=>`grid-md-${e}`)),...p.map((e=>`grid-lg-${e}`)),...p.map((e=>`grid-xl-${e}`))]),f=t(5893);const j=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function w(e,r,t={}){if(!r||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[t[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:n,sm:i,md:a,lg:o,xl:s}=e;return[Number(n)>0&&(t[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`),Number(i)>0&&(t[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(a)>0&&(t[`spacing-md-${String(a)}`]||`spacing-md-${String(a)}`),Number(o)>0&&(t[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(s)>0&&(t[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const P=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{container:t,direction:n,item:i,lg:a,md:o,sm:s,spacing:c,wrap:l,xl:d,xs:u,zeroMinWidth:m}=e.ownerState;return[r.root,t&&r.container,i&&r.item,m&&r.zeroMinWidth,...w(c,t,r),"row"!==n&&r[`direction-xs-${String(n)}`],"wrap"!==l&&r[`wrap-xs-${String(l)}`],!1!==u&&r[`grid-xs-${String(u)}`],!1!==s&&r[`grid-sm-${String(s)}`],!1!==o&&r[`grid-md-${String(o)}`],!1!==a&&r[`grid-lg-${String(a)}`],!1!==d&&r[`grid-xl-${String(d)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:r}){const t=(0,s.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},t,(e=>{const r={flexDirection:e};return 0===e.indexOf("column")&&(r[`& > .${x.item}`]={maxWidth:"none"}),r}))}),(function({theme:e,ownerState:r}){const{container:t,rowSpacing:n}=r;let i={};if(t&&0!==n){const r=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},r,(r=>{const t=e.spacing(r);return"0px"!==t?{marginTop:`-${b(t)}`,[`& > .${x.item}`]:{paddingTop:b(t)}}:{}}))}return i}),(function({theme:e,ownerState:r}){const{container:t,columnSpacing:n}=r;let i={};if(t&&0!==n){const r=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},r,(r=>{const t=e.spacing(r);return"0px"!==t?{width:`calc(100% + ${b(t)})`,marginLeft:`-${b(t)}`,[`& > .${x.item}`]:{paddingLeft:b(t)}}:{}}))}return i}),(function({theme:e,ownerState:r}){let t;return e.breakpoints.keys.reduce(((n,a)=>{let o={};if(r[a]&&(t=r[a]),!t)return n;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:r.columns,breakpoints:e.breakpoints.values}),l="object"===typeof c?c[a]:c;if(void 0===l||null===l)return n;const d=Math.round(t/l*1e8)/1e6+"%";let u={};if(r.container&&r.item&&0!==r.columnSpacing){const t=e.spacing(r.columnSpacing);if("0px"!==t){const e=`calc(${d} + ${b(t)})`;u={flexBasis:e,maxWidth:e}}}o=(0,i.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===e.breakpoints.values[a]?Object.assign(n,o):n[e.breakpoints.up(a)]=o,n}),{})}));var S=a.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiGrid"}),s=(0,c.Z)(t),{className:d,columns:h,columnSpacing:p,component:x="div",container:b=!1,direction:S="row",item:v=!1,lg:y=!1,md:k=!1,rowSpacing:F,sm:N=!1,spacing:$=0,wrap:_="wrap",xl:R=!1,xs:W=!1,zeroMinWidth:I=!1}=s,Z=(0,n.Z)(s,j),M=F||$,C=p||$,A=a.useContext(m),D=h||A||12,H=(0,i.Z)({},s,{columns:D,container:b,direction:S,item:v,lg:y,md:k,sm:N,rowSpacing:M,columnSpacing:C,wrap:_,xl:R,xs:W,zeroMinWidth:I}),T=(e=>{const{classes:r,container:t,direction:n,item:i,lg:a,md:o,sm:s,spacing:c,wrap:d,xl:u,xs:m,zeroMinWidth:h}=e,p={root:["root",t&&"container",i&&"item",h&&"zeroMinWidth",...w(c,t),"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==d&&`wrap-xs-${String(d)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==o&&`grid-md-${String(o)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==u&&`grid-xl-${String(u)}`]};return(0,l.Z)(p,g,r)})(H);return G=(0,f.jsx)(P,(0,i.Z)({ownerState:H,className:(0,o.Z)(T.root,d),as:x,ref:r},Z)),12!==D?(0,f.jsx)(m.Provider,{value:D,children:G}):G;var G}))},9707:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(4695),i=t(916),a=t(9766),o=t(8528);const s=["sx"];function c(e){const{sx:r}=e,t=(0,i.Z)(e,s),{systemProps:c,otherProps:l}=(e=>{const r={systemProps:{},otherProps:{}};return Object.keys(e).forEach((t=>{o.G[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r})(t);let d;return d=Array.isArray(r)?[c,...r]:"function"===typeof r?(...e)=>{const t=r(...e);return(0,a.P)(t)?(0,n.Z)({},c,t):c}:(0,n.Z)({},c,r),(0,n.Z)({},l,{sx:d})}},5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9394)}])},9394:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(5893),i=t(6886),a=t(7294),o=t(5420),s=t(1664),c=[{rolledNumber:1,d20PicPath:"/images/1.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Unlucky! If you'd like to practice, try using my"," ",(0,n.jsx)(s.default,{href:"/project-pages/d20-roller",children:(0,n.jsx)("a",{children:"d20 roller app"})}),"!"]})},{rolledNumber:2,d20PicPath:"/images/2.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Everyone has to start somewhere! Check out my earliest coding project, a"," ",(0,n.jsx)(s.default,{href:"/project-pages/JS-todo-app",children:(0,n.jsx)("a",{children:"to-do app using JavaScript"})}),"!"]})},{rolledNumber:3,d20PicPath:"/images/3.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Did you know that I started learning to code in April 2021? Check out the"," ",(0,n.jsx)(s.default,{href:"/courses/HTML-CSS-JS-cert",children:(0,n.jsx)("a",{children:"very first course"})})," ","I took!"]})},{rolledNumber:4,d20PicPath:"/images/4.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Did you know I used to be a teacher? Read all about it, and the great skills that experience taught me, on my"," ",(0,n.jsx)(s.default,{href:"/about",children:(0,n.jsx)("a",{children:"character sheet"})}),"."]})},{rolledNumber:5,d20PicPath:"/images/5.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Feeling swamped? Why don't you try out my"," ",(0,n.jsx)(s.default,{href:"/project-pages/react-todo-app",children:(0,n.jsx)("a",{children:"React To-Do App"})})," ","to help keep track of things!"]})},{rolledNumber:6,d20PicPath:"/images/6.png",funFact:(0,n.jsxs)(n.Fragment,{children:["When I was in college, I studied environmental science and geology. You can read all about it and more on my"," ",(0,n.jsx)(s.default,{href:"/about",children:(0,n.jsx)("a",{children:"character sheet"})}),"."]})},{rolledNumber:7,d20PicPath:"/images/7.png",funFact:(0,n.jsxs)(n.Fragment,{children:["You can check out previous versions of my portfolio website in the"," ",(0,n.jsx)(s.default,{href:"/archive",children:(0,n.jsx)("a",{children:"archive"})}),"."]})},{rolledNumber:8,d20PicPath:"/images/8.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Would you like to take a look at some of the"," ",(0,n.jsx)(s.default,{href:"/projects",children:(0,n.jsx)("a",{children:"projects"})})," ","I've made?"]})},{rolledNumber:9,d20PicPath:"/images/9.png",funFact:(0,n.jsxs)(n.Fragment,{children:["What do you like to do when you are offline? You can find out what I do in my spare time on the"," ",(0,n.jsx)(s.default,{href:"/about",children:(0,n.jsx)("a",{children:"about page"})}),"."]})},{rolledNumber:10,d20PicPath:"/images/10.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Have you ever played a Fallout game? I made a mock Pip-Boy for"," ",(0,n.jsx)(s.default,{href:"/courses/complete-frontend",children:(0,n.jsx)("a",{children:"one of my coding courses"})}),"."]})},{rolledNumber:11,d20PicPath:"/images/11.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Did you know I made an academic tracker for my teenaged sister? Check it out"," ",(0,n.jsx)(s.default,{href:"/project-pages/academic-tracker",children:(0,n.jsx)("a",{children:"here"})}),"!"]})},{rolledNumber:12,d20PicPath:"/images/12.png",funFact:(0,n.jsxs)(n.Fragment,{children:["I completed a JavaScript Bootcamp and made some pretty cool projects. Check them out"," ",(0,n.jsx)(s.default,{href:"/courses/JS-bootcamp",children:(0,n.jsx)("a",{children:"here"})}),"!"]})},{rolledNumber:13,d20PicPath:"/images/13.png",funFact:(0,n.jsxs)(n.Fragment,{children:["If you'd like to jump straight to my code you can check it out"," ",(0,n.jsx)(s.default,{href:"https://github.com/srivera12",children:(0,n.jsx)("a",{children:"on GitHub"})}),"."]})},{rolledNumber:14,d20PicPath:"/images/14.png",funFact:(0,n.jsxs)(n.Fragment,{children:["If you'd like to contact me through email or LinkedIn, or even just check out my GitHub, head over to the"," ",(0,n.jsx)(s.default,{href:"/contact",children:(0,n.jsx)("a",{children:"contact page"})}),"."]})},{rolledNumber:15,d20PicPath:"/images/15.png",funFact:(0,n.jsxs)(n.Fragment,{children:["I've had practice making a variety of webpages during my"," ",(0,n.jsx)(s.default,{href:"/courses/build-20-websites",children:(0,n.jsx)("a",{children:"Build 20 Websites course"})}),"!"]})},{rolledNumber:16,d20PicPath:"/images/16.png",funFact:(0,n.jsxs)(n.Fragment,{children:["It always feels great to make something that people find helpful. Check out this"," ",(0,n.jsx)(s.default,{href:"/project-pages/montessori-quotes-app",children:(0,n.jsx)("a",{children:"quote app"})})," ","I made for my mom, who is a Montessori teacher."]})},{rolledNumber:17,d20PicPath:"/images/17.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Did you know I coded this website using TypeScript? I learned all about it when I completed"," ",(0,n.jsx)(s.default,{href:"/courses/TS",children:(0,n.jsx)("a",{children:"this course"})}),"."]})},{rolledNumber:18,d20PicPath:"/images/18.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Since I've started learning to code, it's been so much fun learning new languages and get familiar with various tools and frameworks. Check out what I've learned over on the"," ",(0,n.jsx)(s.default,{href:"/skills",children:(0,n.jsx)("a",{children:"skills page"})}),"."]})},{rolledNumber:19,d20PicPath:"/images/19.png",funFact:(0,n.jsxs)(n.Fragment,{children:["React is a powerful and popular web framework. I learned how to use it for projects like this website through"," ",(0,n.jsx)(s.default,{href:"/courses/react-bootcamp",children:(0,n.jsx)("a",{children:"this bootcamp"})}),"."]})},{rolledNumber:20,d20PicPath:"/images/20.png",funFact:(0,n.jsxs)(n.Fragment,{children:["Great roll! Go ahead and"," ",(0,n.jsx)("a",{href:"mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website",children:"tell me"})," that you got a Nat 20!"]})}],l=t(7979),d=t.n(l),u=function(){var e=(0,a.useContext)(o.E).isMobile,r=(0,a.useState)(!1),t=r[0],i=r[1],s=(0,a.useState)(!1),l=s[0],u=s[1],m=(0,a.useState)((0,n.jsx)(n.Fragment,{})),h=m[0],g=m[1],p=(0,a.useState)({rolledNumber:0,funFact:(0,n.jsx)(n.Fragment,{}),imgSrc:"/images/d20Pic.png"}),x=p[0],f=p[1];return(0,a.useEffect)((function(){l?g((0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h2",{children:"The DM awaits your roll..."})})):t||l?t&&!l&&g((0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{children:["You rolled a ",x.rolledNumber,"! The DM says..."]}),(0,n.jsx)("h4",{children:x.funFact})]})):g((0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{children:"Click the d20 to roll!"})}))}),[l,t,x.funFact,x.rolledNumber]),(0,n.jsxs)("div",{className:"".concat(d().roller," ").concat(e&&d().mobileRoller),children:[(0,n.jsx)("div",{className:l||!t?d().preRolledText:d().rolledText,children:h}),(0,n.jsx)("div",{onClick:function(){var e,r=null===(e=window.Cypress)||void 0===e?void 0:e.d20_roll;u(!0),i(!0);var t=r||Math.floor(20*Math.random())+1,n=c.find((function(e){return e.rolledNumber===t}));n&&(f({rolledNumber:n.rolledNumber,funFact:n.funFact,imgSrc:n.d20PicPath}),setTimeout((function(){u(!1)}),500))},className:l?d().d20Rolling:void 0,"data-cy":"d20",children:(0,n.jsx)("img",{src:l?"/images/d20Pic.png":x.imgSrc,alt:"20-sided die displaying the number ".concat(x.rolledNumber),"data-cy":"d20-img"})})]})},m=t(214),h=t.n(m),g=function(){var e=(0,a.useContext)(o.E).isMobile;return(0,n.jsx)("div",{className:"".concat(h().home," ").concat(e&&h().mobileHome),children:(0,n.jsxs)(i.ZP,{container:!0,justifyContent:"center",alignItems:"space-between",rowSpacing:5,children:[e?(0,n.jsxs)(i.ZP,{item:!0,container:!0,justifyContent:"center",xs:12,className:h().mobileHero,children:[(0,n.jsx)(i.ZP,{item:!0,xs:11,children:(0,n.jsx)("h1",{children:"SARAH K RIVERA"})}),(0,n.jsxs)(i.ZP,{item:!0,container:!0,xs:12,alignItems:"center",justifyContent:"center",children:[(0,n.jsx)(i.ZP,{item:!0,xs:4,children:(0,n.jsx)("img",{src:"/images/hiPic.png",alt:"cartoon version of Sarah K Rivera waving hello"})}),(0,n.jsx)(i.ZP,{item:!0,xs:6,children:(0,n.jsx)("h2",{children:"A Fledgling Software Sorcerer With A Passion For Learning"})})]})]}):(0,n.jsxs)("div",{className:h().hero,children:[(0,n.jsx)("img",{src:"/images/hiPic.png",alt:"cartoon version of Sarah K Rivera waving hello"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"SARAH K RIVERA"}),(0,n.jsx)("h2",{children:"A Fledgling Software Sorcerer With A Passion For Learning"})]})]}),(0,n.jsx)(i.ZP,{item:!0,className:h().d20,children:(0,n.jsx)(u,{})})]})})}},7979:function(e){e.exports={roller:"D20Roller_roller__5DDxM",mobileRoller:"D20Roller_mobileRoller__4W_ff",rolledText:"D20Roller_rolledText__cJ60v",preRolledText:"D20Roller_preRolledText__eC2OK",d20Rolling:"D20Roller_d20Rolling__rx07e",roll:"D20Roller_roll__ndWDb"}},214:function(e){e.exports={home:"Home_home__V_V4i",mobileHome:"Home_mobileHome__jgA8B",hero:"Home_hero__cwxAA",mobileHero:"Home_mobileHero__UgCyG",d20:"Home_d20__Na009"}}},function(e){e.O(0,[774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);