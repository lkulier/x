import{a$ as s}from"./main-Bp11xWcs.js";const c={data:null,ratesFetching:!1,sseRunning:!1,initialRatesFetching:!0},a=s({name:"rates",initialState:c,reducers:{fetchRates:{reducer:e=>{e.ratesFetching=!0},prepare:e=>({payload:e})},fetchRatesSuccess:e=>{e.ratesFetching=!1},fetchRatesFailure:e=>{e.ratesFetching=!1},cancelFetchRates:e=>{e.ratesFetching=!1},startSse:{reducer:e=>{e.sseRunning=!0},prepare:e=>({payload:e})},stopSse:e=>{e.sseRunning=!1},updateRates:(e,t)=>{e.data=t.payload},setRatesFetching:(e,t)=>{e.ratesFetching=t.payload},setInitialRatesFetching:(e,t)=>{e.initialRatesFetching=t.payload},removeRates:e=>{e.data=null}}}),r=a.actions,i=a.reducer;export{i as a,r as c};
