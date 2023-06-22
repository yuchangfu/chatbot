import{d as T,a9 as U,h as d,a1 as $,r as y,S as j,af as D,ah as H,I as n,M as p,a3 as i,R as l,$ as A,K as a,Z as C,a2 as g,N as E,b5 as F,_ as N,bh as J,J as Q,Q as Z,al as q,bi as G,a5 as S,a4 as O,U as c,bj as W,ai as X,b8 as Y,l as L,bk as ee}from"./index-fba5a3d2.js";const te={class:"space-y-4"},se={class:"flex items-center space-x-4"},ae=l("span",{class:"flex-shrink-0 w-[100px]"},"当前会话选择：",-1),le={class:"w-[200px]"},oe={style:{color:"darkred"}},re={class:"flex items-center right-aligned"},ne={class:"flex flex-col items-center gap-2"},de=T({__name:"Prompt",props:{visible:{type:Boolean},roomId:null},emits:["update:visible"],setup(V,{emit:B}){const k=V,z=U(),f=d(()=>z.getChatHistoryByCurrentActive),x=$(),m=y(!1),I="设定当前会话角色",u=d({get(){return k.visible},set(t){B("update:visible",t)}}),h=y(""),{isMobile:r}=j(),_=D(),v=y(_.promptList),K=()=>{const[t,s]=r.value?[10,20]:[15,30];return v.value.map(e=>({renderKey:e.key.length<=t?e.key:`${e.key.substring(0,t)}...`,renderValue:e.value.length<=s?e.value:`${e.value.substring(0,s)}...`,key:e.key,value:e.value}))},P=d(()=>{const[t,s]=r.value?[6,5]:[7,15];return{pageSize:t,pageSlot:s}}),M=(()=>[{title:c("store.title"),key:"renderKey"},{title:c("store.description"),key:"renderValue"},{title:c("common.action"),key:"actions",width:100,align:"center",render(t){return L("div",{class:"flex items-center flex-col gap-2"},{default:()=>[L(S,{tertiary:!0,size:"small",type:"info",onClick:()=>w(t.key,t.value)},{default:()=>c("common.select")})]})}}])();H(()=>v,()=>{_.updatePromptList(v.value)},{deep:!0});const b=d(()=>{const t=K(),s=h.value;return s&&s!==""?t.filter(e=>e.renderKey.includes(s)||e.renderValue.includes(s)):t});async function w(t,s){if(!(!t||!s)){m.value=!0;try{const{message:e}=await ee(t??"",s??"",+k.roomId);f.value&&(f.value.role=t),x.success(e),u.value=!1}catch(e){x.error(e.message)}m.value=!1}}return(t,s)=>(n(),p(a(Y),{show:a(u),"onUpdate:show":s[1]||(s[1]=e=>X(u)?u.value=e:null),"auto-focus":!1,class:"custom-card",preset:"card",style:{width:"90%","max-width":"900px"},title:I,size:"huge",bordered:!1},{default:i(()=>{var e;return[l("div",te,[l("div",{class:A(["flex gap-3 mb-4",[a(r)?"flex-col":"flex-row justify-between"]])},[l("div",se,[ae,l("div",le,[l("span",oe,C(((e=a(f))==null?void 0:e.role)??"默认"),1)])]),l("div",re,[g(a(E),{value:h.value,"onUpdate:value":s[0]||(s[0]=o=>h.value=o),placeholder:"Search...",style:{width:"100%"}},null,8,["value"])])],2),a(r)?N("",!0):(n(),p(a(F),{key:0,"max-height":400,columns:a(M),data:a(b),pagination:a(P),bordered:!1},null,8,["columns","data","pagination"])),a(r)?(n(),p(a(J),{key:1,style:{"max-height":"400px","overflow-y":"auto"}},{default:i(()=>[(n(!0),Q(Z,null,q(a(b),(o,R)=>(n(),p(a(G),{key:R},{suffix:i(()=>[l("div",ne,[g(a(S),{tertiary:"",size:"small",loading:m.value,type:"success",onClick:ce=>w(o.key,o.value)},{default:i(()=>[O(C(a(c)("common.select")),1)]),_:2},1032,["loading","onClick"])])]),default:i(()=>[g(a(W),{title:o.renderKey,description:o.renderValue},null,8,["title","description"])]),_:2},1024))),128))]),_:1})):N("",!0)])]}),_:1},8,["show"]))}});export{de as default};
