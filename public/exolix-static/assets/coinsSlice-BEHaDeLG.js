import{a$ as u}from"./main-Bp11xWcs.js";const g={from:{fetching:!1,search:"",page:1,count:0,coins:[]},to:{fetching:!1,search:"",page:1,count:0,coins:[]}},h=u({name:"coins",initialState:g,reducers:{fetchCoins:{reducer:(e,n)=>{const c=n.payload.selectType;c&&(e[c].fetching=!0)},prepare:e=>({payload:{...e,params:{withNetworks:!0,page:1,...e==null?void 0:e.params}}})},setSearch:(e,n)=>{const{selectType:c,search:t}=n.payload;e[c].search=t,e[c].fetching=!0},fetchCoinsSuccess:(e,n)=>{const{from:c,to:t}=e,{selectType:o,page:r,coinsResponse:s}=n.payload;if(o){e[o].fetching=!1,e[o].count=s.count,e[o].page=r;const a=e[o].search;a&&s.data.sort((l,p)=>{const i=l.code.toLowerCase(),f=p.code.toLowerCase();return i.startsWith(a)===f.startsWith(a)?i.localeCompare(f):i.startsWith(a)?-1:1}),r>1?e[o].coins.push(...s.data):e[o].coins=s.data}else c.fetching=!1,c.coins=s.data,c.count=s.count,c.page=1,t.fetching=!1,t.coins=s.data,t.count=s.count,t.page=1},fetchCoinsFailure:e=>{e.from.fetching=!1,e.to.fetching=!1},cancelFetchCoins:e=>{e.from.fetching=!1,e.to.fetching=!1}}}),C=h.actions,m=h.reducer;export{m as a,C as c};
