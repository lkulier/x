import{aA as t,bB as o,bh as c,bn as x,bs as i}from"./main-Bp11xWcs.js";const S=e=>e.cex.exchange,C=e=>e.config,g=(e,s)=>{var n;return(n=e.cex)==null?void 0:n.exchange[s].coin},h=e=>e.cex.exchange.mainSelectType,p=e=>e.cex.exchange.mainSelectType===x?i:x,l=e=>e.cex.exchange.rateType,r=(e,s)=>e.cex.exchange[s].amount,a=e=>{var s;return(s=e.cex)==null?void 0:s.exchange.exchangeStep},E=e=>e.cex.exchange.exchangeAgain,m=e=>e.cex.exchange.user.authorised,d=e=>e.cex.exchange.userVerification.status,y=t(S,C,(e,s)=>!!(e.to.coin&&e.to.coin.network.memoNeeded&&!s.hiddenMemo)),u=t(l,e=>e===o.FIXED),I=t(l,e=>e===o.FLOAT),_=t(a,e=>e===c.STEP_1),f=t(a,e=>e===c.STEP_2),A=t(a,e=>e===c.STEP_3);t(a,e=>e===c.STEP_4);const P=t(a,e=>e===c.STEP_5);export{m as a,a as b,S as c,g as d,p as e,y as f,h as g,_ as h,f as i,u as j,I as k,r as l,A as m,E as n,P as o,d as s};
