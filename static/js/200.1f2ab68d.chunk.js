"use strict";(self.webpackChunkmpc_core_kit_redirect_flow_example=self.webpackChunkmpc_core_kit_redirect_flow_example||[]).push([[200],{53200:(e,a,t)=>{t.d(a,{offchainLookup:()=>k,offchainLookupSignature:()=>m});var r=t(20120),s=t(56560),n=t(9184),o=t(91160);class c extends n.k{constructor(e){var a;let{callbackSelector:t,cause:r,data:s,extraData:n,sender:c,urls:l}=e;super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],null!==(a=r.metaMessages)&&void 0!==a&&a.length?"":[],"Offchain Gateway Call:",l&&["  Gateway URL(s):",...l.map((e=>`    ${(0,o.YV)(e)}`))],`  Sender: ${c}`,`  Data: ${s}`,`  Callback selector: ${t}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class l extends n.k{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.YV)(t)}`,`Response: ${(0,s.i)(a)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class d extends n.k{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${a}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(53616),i=t(65176),f=t(98036),p=t(41560),h=t(99892);var b=t(34152),w=t(91895);const m="0x556f1830",y={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function k(e,a){let{blockNumber:t,blockTag:n,data:o,to:m}=a;const{args:k}=(0,i.w)({data:o,abi:[y]}),[g,v,x,O,L]=k;try{if(!function(e,a){if(!(0,h.C)(e))throw new p.o({address:e});if(!(0,h.C)(a))throw new p.o({address:a});return e.toLowerCase()===a.toLowerCase()}(m,g))throw new d({sender:g,to:m});const a=await async function(e){let{data:a,sender:t,urls:r}=e,n=new Error("An unknown error occurred.");for(let i=0;i<r.length;i++){const e=r[i],f=e.includes("{data}")?"GET":"POST",p="POST"===f?{data:a,sender:t}:void 0;try{var o;const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(p),method:f});let d;if(d=null!==(o=r.headers.get("Content-Type"))&&void 0!==o&&o.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){var c;n=new u.G8({body:p,details:null!==(c=d)&&void 0!==c&&c.error?(0,s.i)(d.error):r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,w.a)(d)){n=new l({result:d,url:e});continue}return d}catch(d){n=new u.G8({body:p,details:d.message,url:e})}}throw n}({data:x,sender:g,urls:v}),{data:o}=await(0,r.M)(e,{blockNumber:t,blockTag:n,data:(0,b.WU)([O,(0,f.I)([{type:"bytes"},{type:"bytes"}],[a,L])]),to:m});return o}catch(C){throw new c({callbackSelector:O,cause:C,data:o,extraData:L,sender:g,urls:v})}}}}]);
//# sourceMappingURL=200.1f2ab68d.chunk.js.map