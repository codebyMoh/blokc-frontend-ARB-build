"use strict";(self.webpackChunkmpc_core_kit_redirect_flow_example=self.webpackChunkmpc_core_kit_redirect_flow_example||[]).push([[408],{32408:(n,e,t)=>{let _;t.r(e),t.d(e,{WasmBindgenTestContext:()=>P,__wbgtest_console_debug:()=>O,__wbgtest_console_error:()=>F,__wbgtest_console_info:()=>q,__wbgtest_console_log:()=>L,__wbgtest_console_warn:()=>z,batch_size:()=>k,default:()=>H,finalizeInit:()=>N,getImports:()=>D,get_r_from_precompute:()=>j,initSync:()=>G,local_sign:()=>U,local_verify:()=>T,precompute:()=>E,random_generator:()=>v,random_generator_free:()=>A,setup:()=>W,sign:()=>B,threshold_signer:()=>x,threshold_signer_free:()=>I});const r=new Array(32).fill(void 0);function o(n){return r[n]}r.push(void 0,null,!0,!1);let c=r.length;function i(n){const e=o(n);return function(n){n<36||(r[n]=c,c=n)}(n),e}const a=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let s=new Uint8Array;function f(){return 0===s.byteLength&&(s=new Uint8Array(_.memory.buffer)),s}function b(n,e){return a.decode(f().subarray(n,n+e))}function u(n){c===r.length&&r.push(r.length+1);const e=c;return c=r[e],r[e]=n,e}let g=0;const w=new TextEncoder("utf-8"),l="function"===typeof w.encodeInto?function(n,e){return w.encodeInto(n,e)}:function(n,e){const t=w.encode(n);return e.set(t),{read:n.length,written:t.length}};function d(n,e,t){if(void 0===t){const t=w.encode(n),_=e(t.length);return f().subarray(_,_+t.length).set(t),g=t.length,_}let _=n.length,r=e(_);const o=f();let c=0;for(;c<_;c++){const e=n.charCodeAt(c);if(e>127)break;o[r+c]=e}if(c!==_){0!==c&&(n=n.slice(c)),r=t(r,_,_=c+3*n.length);const e=f().subarray(r+c,r+_);c+=l(n,e).written}return g=c,r}let y=new Int32Array;function m(){return 0===y.byteLength&&(y=new Int32Array(_.memory.buffer)),y}function h(n,e,t){_._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h393860affdd597ff(n,e,u(t))}function p(n,e){try{return n.apply(this,e)}catch(t){_.__wbindgen_exn_store(u(t))}}function k(){return _.batch_size()>>>0}function v(n){try{const e=_.__wbindgen_add_to_stack_pointer(-16),t=d(n,_.__wbindgen_malloc,_.__wbindgen_realloc),r=g;_.random_generator(e,t,r);const o=m()[e/4+0],c=m()[e/4+1];if(m()[e/4+2])throw i(c);return o}finally{_.__wbindgen_add_to_stack_pointer(16)}}function A(n){_.random_generator_free(n)}function x(n,e,t,r,o,c){try{const a=_.__wbindgen_add_to_stack_pointer(-16),s=d(n,_.__wbindgen_malloc,_.__wbindgen_realloc),f=g,b=d(o,_.__wbindgen_malloc,_.__wbindgen_realloc),u=g,w=d(c,_.__wbindgen_malloc,_.__wbindgen_realloc),l=g;_.threshold_signer(a,s,f,e,t,r,b,u,w,l);const y=m()[a/4+0],h=m()[a/4+1];if(m()[a/4+2])throw i(h);return y}finally{_.__wbindgen_add_to_stack_pointer(16)}}function I(n){_.threshold_signer_free(n)}function W(n,e){return i(_.setup(n,e))}function E(n,e,t){return i(_.precompute(u(n),e,t))}function U(n,e,t){try{const r=_.__wbindgen_add_to_stack_pointer(-16),o=d(n,_.__wbindgen_malloc,_.__wbindgen_realloc),c=g;_.local_sign(r,o,c,e,u(t));const a=m()[r/4+0],s=m()[r/4+1];if(m()[r/4+2])throw i(s);return i(a)}finally{_.__wbindgen_add_to_stack_pointer(16)}}function j(n){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.get_r_from_precompute(e,u(n));const t=m()[e/4+0],r=m()[e/4+1];if(m()[e/4+2])throw i(r);return i(t)}finally{_.__wbindgen_add_to_stack_pointer(16)}}let C=new Uint32Array;function R(n,e){const t=e(4*n.length),r=(0===C.byteLength&&(C=new Uint32Array(_.memory.buffer)),C);for(let _=0;_<n.length;_++)r[t/4+_]=u(n[_]);return g=n.length,t}function T(n,e,t,r,o){try{const c=_.__wbindgen_add_to_stack_pointer(-16),a=d(n,_.__wbindgen_malloc,_.__wbindgen_realloc),s=g,f=R(r,_.__wbindgen_malloc),b=g,w=d(o,_.__wbindgen_malloc,_.__wbindgen_realloc),l=g;_.local_verify(c,a,s,e,u(t),f,b,w,l);const y=m()[c/4+0],h=m()[c/4+1];if(m()[c/4+2])throw i(h);return i(y)}finally{_.__wbindgen_add_to_stack_pointer(16)}}function B(n,e,t,r,o){const c=d(e,_.__wbindgen_malloc,_.__wbindgen_realloc),a=g;return i(_.sign(u(n),c,a,t,r,o))}let M=32;function S(n){if(1==M)throw new Error("out of js stack");return r[--M]=n,M}function L(n){try{_.__wbgtest_console_log(S(n))}finally{r[M++]=void 0}}function O(n){try{_.__wbgtest_console_debug(S(n))}finally{r[M++]=void 0}}function q(n){try{_.__wbgtest_console_info(S(n))}finally{r[M++]=void 0}}function z(n){try{_.__wbgtest_console_warn(S(n))}finally{r[M++]=void 0}}function F(n){try{_.__wbgtest_console_error(S(n))}finally{r[M++]=void 0}}class P{static __wrap(n){const e=Object.create(P.prototype);return e.ptr=n,e}__destroy_into_raw(){const{ptr:n}=this;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();_.__wbg_wasmbindgentestcontext_free(n)}constructor(){const n=_.wasmbindgentestcontext_new();return P.__wrap(n)}args(n){const e=R(n,_.__wbindgen_malloc),t=g;_.wasmbindgentestcontext_args(this.ptr,e,t)}run(n){const e=R(n,_.__wbindgen_malloc),t=g;return i(_.wasmbindgentestcontext_run(this.ptr,e,t))}}function D(){const n={wbg:{}};return n.wbg.__wbindgen_object_drop_ref=function(n){i(n)},n.wbg.__wbindgen_cb_drop=function(n){const e=i(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},n.wbg.__wbindgen_string_new=function(n,e){return u(b(n,e))},n.wbg.__wbg_jssendmsg_9558e1e6ccbf0bf6=function(){return p((function(n,e,t,r,o,c,i,a){try{return u(js_send_msg(b(n,e),t>>>0,r>>>0,b(o,c),b(i,a)))}finally{_.__wbindgen_free(n,e),_.__wbindgen_free(o,c),_.__wbindgen_free(i,a)}}),arguments)},n.wbg.__wbindgen_string_get=function(n,e){const t=o(e),r="string"===typeof t?t:void 0,c=void 0===(i=r)||null===i?0:d(r,_.__wbindgen_malloc,_.__wbindgen_realloc);var i;const a=g;m()[n/4+1]=a,m()[n/4+0]=c},n.wbg.__wbg_jsreadmsg_3e2fec56a08697d4=function(){return p((function(n,e,t,r,o,c){try{return u(js_read_msg(b(n,e),t>>>0,r>>>0,b(o,c)))}finally{_.__wbindgen_free(n,e),_.__wbindgen_free(o,c)}}),arguments)},n.wbg.__wbindgen_bigint_from_u64=function(n){return u(BigInt.asUintN(64,n))},n.wbg.__wbindgen_number_new=function(n){return u(n)},n.wbg.__wbg_newnoargs_b5b063fc6c2f0376=function(n,e){return u(new Function(b(n,e)))},n.wbg.__wbg_call_97ae9d8645dc388b=function(){return p((function(n,e){return u(o(n).call(o(e)))}),arguments)},n.wbg.__wbindgen_object_clone_ref=function(n){return u(o(n))},n.wbg.__wbg_self_6d479506f72c6a71=function(){return p((function(){return u(self.self)}),arguments)},n.wbg.__wbg_window_f2557cc78490aceb=function(){return p((function(){return u(window.window)}),arguments)},n.wbg.__wbg_globalThis_7f206bda628d5286=function(){return p((function(){return u(globalThis.globalThis)}),arguments)},n.wbg.__wbg_global_ba75c50d1cf384f4=function(){return p((function(){return u(t.g.global)}),arguments)},n.wbg.__wbindgen_is_undefined=function(n){return void 0===o(n)},n.wbg.__wbg_forEach_ce1177df15902e0c=function(n,e,t){try{var r={a:e,b:t};const c=(n,e,t)=>{const{a:o}=r;r.a=0;try{return function(n,e,t,r,o){_.wasm_bindgen__convert__closures__invoke3_mut__h1fa7dc56d2cd12f8(n,e,u(t),r,u(o))}(o,r.b,n,e,t)}finally{r.a=o}};o(n).forEach(c)}finally{r.a=r.b=0}},n.wbg.__wbg_message_fe2af63ccc8985bc=function(n){return u(o(n).message)},n.wbg.__wbg_name_48eda3ae6aa697ca=function(n){return u(o(n).name)},n.wbg.__wbg_call_168da88779e35f61=function(){return p((function(n,e,t){return u(o(n).call(o(e),o(t)))}),arguments)},n.wbg.__wbg_new_9962f939219f1820=function(n,e){try{var t={a:n,b:e};const r=(n,e)=>{const{a:r}=t;t.a=0;try{return function(n,e,t,r){_.wasm_bindgen__convert__closures__invoke2_mut__h09aaa711cefcd1d9(n,e,u(t),u(r))}(r,t.b,n,e)}finally{t.a=r}};return u(new Promise(r))}finally{t.a=t.b=0}},n.wbg.__wbg_resolve_99fe17964f31ffc0=function(n){return u(Promise.resolve(o(n)))},n.wbg.__wbg_then_11f7a54d67b4bfad=function(n,e){return u(o(n).then(o(e)))},n.wbg.__wbg_then_cedad20fbbd9418a=function(n,e,t){return u(o(n).then(o(e),o(t)))},n.wbg.__wbg_buffer_3f3d764d4747d564=function(n){return u(o(n).buffer)},n.wbg.__wbg_new_8c3f0052272a457a=function(n){return u(new Uint8Array(o(n)))},n.wbg.__wbg_set_83db9690f9353e79=function(n,e,t){o(n).set(o(e),t>>>0)},n.wbg.__wbg_length_9e1ae1900cb0fbd5=function(n){return o(n).length},n.wbg.__wbindgen_throw=function(n,e){throw new Error(b(n,e))},n.wbg.__wbindgen_memory=function(){return u(_.memory)},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return u(new Error)},n.wbg.__wbg_stack_658279fe44541cf6=function(n,e){const t=d(o(e).stack,_.__wbindgen_malloc,_.__wbindgen_realloc),r=g;m()[n/4+1]=r,m()[n/4+0]=t},n.wbg.__wbg_error_f851667af71bcfc6=function(n,e){try{console.error(b(n,e))}finally{_.__wbindgen_free(n,e)}},n.wbg.__wbg_log_d59c74802fa44fe2=function(n,e){console.log(b(n,e))},n.wbg.__wbg_static_accessor_document_0187e21f53c04a48=function(){return u(document)},n.wbg.__wbg_String_0713d2a3d2b5f6b1=function(n,e){const t=d(String(o(e)),_.__wbindgen_malloc,_.__wbindgen_realloc),r=g;m()[n/4+1]=r,m()[n/4+0]=t},n.wbg.__wbg_self_74338d9cb12c5d75=function(n){return u(o(n).self)},n.wbg.__wbindgen_jsval_eq=function(n,e){return o(n)===o(e)},n.wbg.__wbg_getElementById_4c39186cc7ced742=function(n,e,t){return u(o(n).getElementById(b(e,t)))},n.wbg.__wbg_settextcontent_344de5dc2a8e15ca=function(n,e,t){o(n).textContent=b(e,t)},n.wbg.__wbg_textcontent_46a9e23ba5cbd900=function(n,e){const t=d(o(e).textContent,_.__wbindgen_malloc,_.__wbindgen_realloc),r=g;m()[n/4+1]=r,m()[n/4+0]=t},n.wbg.__wbg_stack_2ac21c4ea9c454f4=function(n){return u(o(n).stack)},n.wbg.__wbg_stack_475ccfd121fab8c9=function(n,e){const t=d(o(e).stack,_.__wbindgen_malloc,_.__wbindgen_realloc),r=g;m()[n/4+1]=r,m()[n/4+0]=t},n.wbg.__wbindgen_closure_wrapper551=function(n,e,t){const r=function(n,e,t,r){const o={a:n,b:e,cnt:1,dtor:t},c=function(){o.cnt++;const{a:n}=o;o.a=0;try{for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return r(n,o.b,...t)}finally{0===--o.cnt?_.__wbindgen_export_2.get(o.dtor)(n,o.b):o.a=n}};return c.original=o,c}(n,e,117,h);return u(r)},n}function N(n,e){return _=n.exports,H.__wbindgen_wasm_module=e,y=new Int32Array,C=new Uint32Array,s=new Uint8Array,_}function G(n){const e=D();n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n));return N(new WebAssembly.Instance(n,e),n)}async function H(n){if("undefined"===typeof n)throw new Error("no");const e=D();("string"===typeof n||"function"===typeof Request&&n instanceof Request||"function"===typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:_}=await async function(n,e){if("function"===typeof Response&&n instanceof Response){if("function"===typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(_){if("application/wasm"==n.headers.get("Content-Type"))throw _;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",_)}const t=await n.arrayBuffer();return WebAssembly.instantiate(t,e)}const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}(await n,e);return N(t,_)}}}]);
//# sourceMappingURL=408.9c2922c5.chunk.js.map