import{aA as _,bn as z,bs as M,a$ as O}from"./main-Bp11xWcs.js";import{a as P}from"./exchangeSelectors-BRPm40VR.js";import{z as s}from"./index-dIKOytT1.js";const J=(e,n)=>e.dex.formUi[n].selectOpen,Y=e=>e.dex.formUi.revertExchange,Z=e=>e.dex.formUi.showSettings,V=e=>e.dex.formUi.showSwapRouting,ee=e=>e.dex.formUi.showChains,te=e=>e.dex.formUi.showWallets,ne=e=>e.dex.formUi.showAgreeModal,ie=e=>e.dex.formUi.showSwapModal,ae=e=>e.dex.formUi.showTxModal,re=e=>e.dex.formUi.showEthSignMessage,C=e=>e.dex.coins,se=(e,n)=>e.dex.coins[n].search,oe=_(C,e=>e.from.initialCoins.length),ce=_(C,e=>!!(e.from.fetching||e.to.fetching));_(C,e=>e.from.initialCoins.length||e.to.initialCoins.length);const fe=_((e,n)=>e.dex.coins[n].coins,(e,n)=>P(e,n===z?M:z),(e,n)=>e.filter(i=>i.address!==(n==null?void 0:n.address))),ue=e=>e.dex.account.account,he=(e,n)=>e.dex.account.balance[n],de=e=>e.dex.account.chain,le=e=>e.dex.quotes,xe=e=>{var n;return(n=e.dex.quotes.data)==null?void 0:n.estimatedGas},ge=e=>{var n;return(n=e.dex.quotes.data)==null?void 0:n.estimatedGasInUsd},me=e=>{var n;return(n=e.dex.quotes.data)==null?void 0:n.provider},ve=e=>{var n;return(n=e.dex.quotes.data)==null?void 0:n.path};var F=function(){function e(){}var n=e.prototype;return n.expandToken=function(t){for(var a=[],o="",r=0,c=t.length;r<c;++r)o+=t.charAt(r),a.push(o);return a},e}(),U=function(){function e(){}var n=e.prototype;return n.sanitize=function(t){return t?t.toLocaleLowerCase().trim():""},e}();function D(e,n){n=n||[],e=e||{};for(var i=e,t=0;t<n.length;t++)if(i=i[n[t]],i==null)return null;return i}var $=function(){function e(i){this._uidFieldName=i,this._tokenToIdfCache={},this._tokenMap={}}var n=e.prototype;return n.indexDocument=function(t,a,o){this._tokenToIdfCache={};var r=this._tokenMap,c;typeof r[t]!="object"?r[t]=c={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(c=r[t],c.$totalNumOccurrences++);var u=c.$uidMap;typeof u[a]!="object"?(c.$numDocumentOccurrences++,u[a]={$document:o,$numTokenOccurrences:1}):u[a].$numTokenOccurrences++},n.search=function(t,a){for(var o={},r=0,c=t.length;r<c;r++){var u=t[r],g=this._tokenMap[u];if(!g)return[];if(r===0)for(var l=Object.keys(g.$uidMap),h=0,x=l.length;h<x;h++){var f=l[h];o[f]=g.$uidMap[f].$document}else for(var l=Object.keys(o),h=0,x=l.length;h<x;h++){var f=l[h];typeof g.$uidMap[f]!="object"&&delete o[f]}}var m=[];for(var f in o)m.push(o[f]);var v=this._createCalculateTfIdf();return m.sort(function(d,S){return v(t,S,a)-v(t,d,a)})},n._createCalculateIdf=function(){var t=this._tokenMap,a=this._tokenToIdfCache;return function(r,c){if(!a[r]){var u=typeof t[r]<"u"?t[r].$numDocumentOccurrences:0;a[r]=1+Math.log(c.length/(1+u))}return a[r]}},n._createCalculateTfIdf=function(){var t=this._tokenMap,a=this._uidFieldName,o=this._createCalculateIdf();return function(c,u,g){for(var l=0,h=0,x=c.length;h<x;++h){var f=c[h],m=o(f,g);m===1/0&&(m=0);var v;a instanceof Array?v=u&&D(u,a):v=u&&u[a];var d=typeof t[f]<"u"&&typeof t[f].$uidMap[v]<"u"?t[f].$uidMap[v].$numTokenOccurrences:0;l+=d*m}return l}},e}(),R=/[^a-zа-яё0-9\-']+/i,j=function(){function e(){}var n=e.prototype;return n.tokenize=function(t){return t.split(R).filter(function(a){return a})},e}();function w(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function B(e,n,i){return n&&w(e.prototype,n),i&&w(e,i),e}var G=function(){function e(i){if(!i)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=i,this._indexStrategy=new F,this._searchIndex=new $(i),this._sanitizer=new U,this._tokenizer=new j,this._documents=[],this._searchableFields=[]}var n=e.prototype;return n.addDocument=function(t){this.addDocuments([t])},n.addDocuments=function(t){this._documents=this._documents.concat(t),this.indexDocuments_(t,this._searchableFields)},n.addIndex=function(t){this._searchableFields.push(t),this.indexDocuments_(this._documents,[t])},n.search=function(t){var a=this._tokenizer.tokenize(this._sanitizer.sanitize(t));return this._searchIndex.search(a,this._documents)},n.indexDocuments_=function(t,a){this._initialized=!0;for(var o=this._indexStrategy,r=this._sanitizer,c=this._searchIndex,u=this._tokenizer,g=this._uidFieldName,l=0,h=t.length;l<h;l++){var x=t[l],f;g instanceof Array?f=D(x,g):f=x[g];for(var m=0,v=a.length;m<v;m++){var d,S=a[m];if(S instanceof Array?d=D(x,S):d=x[S],d!=null&&typeof d!="string"&&d.toString&&(d=d.toString()),typeof d=="string")for(var E=u.tokenize(r.sanitize(d)),p=0,T=E.length;p<T;p++)for(var k=E[p],y=o.expandToken(k),I=0,b=y.length;I<b;I++){var N=y[I];c.indexDocument(N,f,x)}}}},B(e,[{key:"indexStrategy",set:function(t){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=t},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(t){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=t},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(t){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=t},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(t){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=t},get:function(){return this._tokenizer}}]),e}();const L={from:{fetching:!1,search:"",initialCoins:[],coins:[]},to:{fetching:!1,search:"",initialCoins:[],coins:[]}},A=O({name:"coins",initialState:L,reducers:{getCoins:e=>{e.from.fetching=!0,e.from.search="",e.to.fetching=!0,e.to.search=""},getCoinsSuccess:(e,n)=>{const{coinsResponse:i}=n.payload;e.from.fetching=!1,e.from.coins=i,e.from.initialCoins=i,e.to.fetching=!1,e.to.coins=i,e.to.initialCoins=i},getCoinsError:e=>{e.from.fetching=!1,e.to.fetching=!1},cancelGetCoins:e=>{e.from.fetching=!1,e.to.fetching=!1},clearCoins:e=>{e.from.coins=[],e.from.initialCoins=[],e.to.coins=[],e.to.initialCoins=[]},setSearchCoins:(e,n)=>{const{selectType:i,search:t}=n.payload;e[i].search=t;const a=new G("id");if(a.addIndex("symbol"),a.addIndex("name"),a.addDocuments(e.from.initialCoins),t){const o=a.search(t);e[i].coins=o}else e[i].coins=[...e[i].initialCoins]}}}),Se=A.actions,_e=A.reducer,pe=e=>e.dex.transaction,Ie=e=>e.dex.transaction.buildApprove.fetching,De=e=>e.dex.transaction.buildSwap.fetching,Ce=e=>e.dex.transaction.transactionHash.fetching,Ee=e=>e.dex.transaction.transactionType,ye=e=>e.dex.transaction.transactionStatus.data,ze=e=>e.dex.transaction.transactionSwapData;s.object({allowance:s.object({allowance:s.string()})});s.object({txForSign:s.string(),txType:s.string(),extraData:s.string()});s.object({txForSign:s.string(),txType:s.string(),extraData:s.object({inAmount:s.string(),outAmount:s.string(),inTokenAddress:s.string(),outTokenAddress:s.string(),amountFee:s.string(),feeCollectorAddress:s.string()})});s.string();s.object({status:s.string()});var W=(e=>(e.SWAP="SWAP",e.APPROVE="APPROVE",e.APPROVE_DIFFERENCE="APPROVE_DIFFERENCE",e.INSUFFITIENT_BALANCE="INSUFFITIENT_BALANCE",e))(W||{}),q=(e=>(e.SWAP="SWAP",e.APPROVE="APPROVE",e))(q||{}),K=(e=>(e.PENDING="PENDING",e.CREATED="CREATED",e.SUCCESS="SUCCESS",e.UNKNOWN="UNKNOWN",e.FAILED="FAILED",e))(K||{});export{Ce as A,C as B,me as C,q as D,pe as E,K as F,ae as G,ye as H,_e as I,le as a,ce as b,de as c,he as d,ue as e,se as f,oe as g,Se as h,J as i,fe as j,xe as k,ee as l,ge as m,ve as n,V as o,Z as p,te as q,ne as r,Y as s,ie as t,Ee as u,ze as v,W as w,re as x,Ie as y,De as z};
