(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{9719:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Landing}});var a=t(5893),i=t(7294),s=t(7897),r=t.n(s);t(2141),t(5459);var l=t(2023);function Landing(n){let{scrollPosition:e}=n,[t,s]=(0,i.useState)(!1),[d,o]=(0,i.useState)(0),c=(0,i.useRef)(null),_=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let n=document.querySelector(".".concat(r().create));n&&e>=500&&(n.classList.add("transition-text"),setTimeout(()=>n.classList.remove("hidden"),100))},[e]),(0,i.useEffect)(()=>{let handleScroll=()=>{if(c.current){let n=c.current.offsetLeft+c.current.offsetWidth/2,e=c.current.offsetTop+c.current.offsetHeight/2,t=window.scrollX-n,a=window.scrollY-e,i=Math.atan2(a,t);o(i+Math.PI/2*2)}};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,a.jsxs)("div",{className:r().container_body,children:[(0,a.jsx)("img",{className:r().wave,src:"./wave.png",alt:""}),(0,a.jsx)("img",{ref:_,style:{position:"absolute",zIndex:10,left:"50%",top:"45%",transform:"translate(-50%, -50%) rotate(".concat(-d,"rad)")},className:r().arrow,src:"./arrow.png",alt:""}),(0,a.jsx)("img",{className:e<2e3?r().landingbtn:r().landingbtn2,src:"./landing-btn.png",alt:""}),(0,a.jsx)("div",{as:l.E.div,initial:"initial",animate:"animate",className:r().spinner,children:(0,a.jsx)(l.E.div,{initial:{scale:3,opacity:0},animate:{scale:1,opacity:1,rotate:-360},transition:{duration:2,ease:"easeInOut"},children:(0,a.jsx)("img",{className:"".concat(r().spinnerImg),ref:c,style:{position:"absolute",zIndex:10,left:"50%",top:"50%",transform:"translate(-50%, -50%) rotate(".concat(d,"rad)")},src:"./cubes.png",alt:""})})}),(0,a.jsx)("div",{children:e<500?(0,a.jsx)("div",{id:"id",className:r().create,children:"CREATE"}):e<1e3?(0,a.jsx)("div",{id:"id",className:r().create,children:"EARN"}):e<2e3?(0,a.jsx)("div",{id:"id",className:r().create,children:"GROW"}):null}),(0,a.jsxs)("div",{className:r().landing_bottom,children:[(0,a.jsx)("div",{className:r().landing_bottom1,children:"Get funded for your"}),(0,a.jsx)("div",{className:r().landing_bottom2,children:"creative projects instantly"})]})]})}},7897:function(n){n.exports={container_body:"Landing_container_body__HZtmF",wave:"Landing_wave__eAtud",transitionText:"Landing_transitionText__9v7qS",arrow:"Landing_arrow__xizbw",create:"Landing_create__zLcjw",spinner:"Landing_spinner__WAD0V",spinnerImg:"Landing_spinnerImg__86kCe",landingbtn:"Landing_landingbtn__5OihW",landing_bottom:"Landing_landing_bottom__GIVtN",landing_bottom1:"Landing_landing_bottom1__Bospk",landing_bottom2:"Landing_landing_bottom2__Q5wbi"}}}]);