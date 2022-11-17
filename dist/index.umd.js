(function(f,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(f=typeof globalThis<"u"?globalThis:f||self,e(f["youcan-ui"]={},f.Vue))})(this,function(f,e){"use strict";var N=document.createElement("style");N.textContent=`@import"https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";.input[data-v-0dfcb387]{width:100%;border:1px solid var(--border-color);height:54px;border-radius:8px;padding:6px 12px;font-weight:400;letter-spacing:2%;line-height:19.2px}.input[data-v-0dfcb387]::placeholder{color:var(--placeholder-color)}.store-slug-input[data-v-6d180ddd]{--store-slug-title: var(--gray-900);--store-slug-description: var(--gray-500);--store-slug-box-input: var(--gray-100);--store-slug-box-icon: var(--primary-400);--store-slug-note: var(--gray-600);--store-slug-note-content: var(--gray-20);display:flex;align-items:flex-start;gap:10px;position:relative}.input-container[data-v-6d180ddd]{position:relative;display:flex;align-items:center;width:100%}[dir=rtl] .input-container[data-v-6d180ddd]{direction:ltr}.slug-suffix[data-v-6d180ddd]{position:absolute;right:20px;color:var(--gray-800);font-weight:400;font-size:15px;line-height:19px;letter-spacing:.04em}.popover[data-v-6d180ddd]{width:332px;background-color:#fff;transform:translate(calc(100% + 1rem));border:1px solid var(--gray-50);top:0;box-shadow:0 4px 12px var(--black-800);border-radius:12px;position:absolute;right:0}[dir=rtl] .popover[data-v-6d180ddd]{right:auto;left:0px;transform:translate(calc(-100% - 1rem))}.box-description[data-v-6d180ddd]{padding-left:20px;padding-right:28px}.store-slug-title[data-v-6d180ddd]{font-weight:500;color:var(--store-slug-title);font-size:16px;line-height:19px;letter-spacing:.02em}.store-slug-description[data-v-6d180ddd]{color:var(--store-slug-description);font-weight:400;font-size:13px;margin-top:-5px;line-height:20px;letter-spacing:.02em}.border-example[data-v-6d180ddd]{display:flex;align-items:center;gap:8px;border:1px solid var(--store-slug-box-input);padding:12px 16px;box-shadow:0 1px 8px var(--black-800);border-radius:8px;margin-bottom:14px}.border-icon-example[data-v-6d180ddd]{color:var(--store-slug-box-icon)}.input-border-example[data-v-6d180ddd]{font-weight:400;font-size:14px;line-height:19px;letter-spacing:.02em;color:var(--store-slug-description)}.note[data-v-6d180ddd]{display:flex;align-items:center;gap:9px;background-color:var(--store-slug-note-content);border-bottom-left-radius:12px;border-bottom-right-radius:12px;padding:8px 10px 12px 20px}.icon-note[data-v-6d180ddd]{color:var(--store-slug-note)}.note-description[data-v-6d180ddd]{font-weight:400;font-size:13px;line-height:21px;letter-spacing:.02em;color:var(--store-slug-note)}.fade-enter-active[data-v-6d180ddd],.fade-leave-active[data-v-6d180ddd]{transition:opacity .5s ease}.fade-enter-from[data-v-6d180ddd],.fade-leave-to[data-v-6d180ddd]{opacity:0}.dropdown-input[data-v-b19d081d]{display:flex;justify-content:space-between;align-items:center;background:var(--base-white);color:var(--gray-400);width:100%;max-width:460px;height:56px;border:1px solid var(--border-color);border-radius:8px;padding:16px;text-align:start;font-weight:400;font-size:16px;line-height:19px;letter-spacing:.02em}.dropdown-input .icon[data-v-b19d081d]{color:var(--gray-400)}.dropdown-input .label-item[data-v-b19d081d]{display:flex;gap:7px}.dropdown-content[data-v-78fb5b73]{background-color:var(--base-white);width:100%;max-width:460px;height:max-content;max-height:191px;border:1px solid var(--border-color);border-radius:8px;overflow:auto;padding:16px 0;z-index:1}.dropdown-content .dropdown-item[data-v-78fb5b73]{display:flex;align-items:center;gap:7px;color:var(--gray-400);font-weight:400;font-size:16px;line-height:19px;letter-spacing:.02em;padding:8px 16px;cursor:pointer}.dropdown-content .dropdown-item[data-v-78fb5b73]:hover{--hover-color: #f7faff;background-color:var(--hover-color)}.no-results[data-v-78fb5b73]{display:flex;flex-direction:column;align-items:center;font-size:16px;color:var(--gray-800)}.dropdown[data-v-a344e087]{display:flex;flex-direction:column;gap:7px}.password-input[data-v-f2932a78]{position:relative}.password-input input[data-v-f2932a78]{width:100%;border:1px solid var(--border-color);height:54px;border-radius:8px;padding:4px 16px;font-weight:400}.password-icon[data-v-f2932a78]{position:absolute;height:100%;background:none;right:12px;border:none;outline:none;cursor:pointer;color:var(--placeholder-color)}[dir=rtl] .password-icon[data-v-f2932a78]{right:auto;left:20px}.note[data-v-b82d0345]{--note-background: var(--white);--note-border-color: var(--gray-25);--note-icon-color: var(--primary-400);--note-text-color: var(--gray-700);display:flex;align-items:center;max-width:540px;background:var(--note-background);border:1px solid var(--note-border-color);border-radius:8px;padding:2px 25px;gap:32px}[dir=rtl] .note[data-v-b82d0345]{flex-direction:row-reverse}.icon[data-v-b82d0345]{color:var(--note-icon-color)}.content[data-v-b82d0345]{color:var(--note-text-color);line-height:22px;font-weight:400;font-size:15px}.loading[data-v-dbbecf04]{--loading-stroke-color: var(--gray-10);position:relative;width:120px;height:120px}.loading-svg[data-v-dbbecf04]{width:100%;height:100%;transform:rotate(-90deg)}.loading-circle[data-v-dbbecf04]{fill:none;stroke:var(--loading-stroke-color);stroke-width:4}.loading-circle-progress[data-v-dbbecf04]{fill:none;stroke:var(--primary-color);stroke-width:4;stroke-dasharray:284;stroke-linecap:round}.loading-value[data-v-dbbecf04]{position:absolute;font-weight:500;line-height:36px;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;color:var(--primary-color)}.checkbox-container[data-v-fabf80c5]{display:inline-block;position:relative;cursor:pointer;width:20px;height:20px}.checkbox-container:hover .checkbox-input~.checkmark[data-v-fabf80c5]{background-color:var(--stormGray-100)}.checkbox-container .checkbox-input[data-v-fabf80c5]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container .checkmark[data-v-fabf80c5]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:var(--base-White);border:1px solid var(--border-color);border-radius:4px}[dir=rtl] .checkbox-container .checkmark[data-v-fabf80c5]{left:unset;right:0}.checkbox-container .checkmark[data-v-fabf80c5]:after{content:"";position:absolute;display:none}.checkbox-container .checkbox-input:checked~.checkmark[data-v-fabf80c5]:after{display:block}.checkbox-container .checkmark[data-v-fabf80c5]:after{left:5px;top:1px;width:5px;height:10px;border:solid var(--primary-color);border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.checkbox-container .checkbox-input:checked~.checkmark[data-v-fabf80c5]{background-color:var(--base-White)}.button[data-v-4695437a]{--button-bg-color: var(--stormGray-100);--button-color: var(--base-black);background:var(--button-bg-color);color:var(--button-color);display:flex;align-items:center;justify-content:center;border-radius:8px;padding:16px 32px;font-size:16px;border:none;outline:none;user-select:none;width:max-content;cursor:pointer}.button.disabled[data-v-4695437a]{pointer-events:none}.text[data-v-4695437a]{color:currentColor;font-weight:500;line-height:19px;letter-spacing:.02em}.button.primary[data-v-99aecff6]{--button-bg-color: var(--primary-color);--button-color: var(--base-white)}.dropdown[data-v-f764e0e5]{display:flex;flex-direction:column;gap:7px;max-width:460px}.input-container[data-v-f764e0e5]{position:relative;box-shadow:0 4px 4px #00000005}.icon-container[data-v-f764e0e5]{position:absolute;right:16px;top:0;height:100%;display:flex;align-items:center;justify-content:center;color:var(--gray-400)}.items-menu[data-v-f764e0e5]{box-shadow:0 4px 4px #00000005,0 4px 4px #00000005}.handler[data-v-9dca4090]{display:grid;grid-template-columns:auto 1fr;box-shadow:0 4px 4px #00000005}.handler .trigger[data-v-9dca4090]{display:flex;align-items:center;gap:4px;background-color:#fff;padding:0 12px;border:1px solid var(--border-color);border-top-left-radius:8px;border-bottom-left-radius:8px}.handler .trigger .text[data-v-9dca4090]{font-size:14px;color:var(--gray-700)}.handler .trigger .icon[data-v-9dca4090]{color:var(--gray-400)}.handler .input-container .input[data-v-9dca4090]{border-top-left-radius:0;border-bottom-left-radius:0;border-left:none}.dropdown[data-v-9dca4090]{display:flex;flex-direction:column;gap:7px;max-width:460px}.items-menu[data-v-9dca4090]{box-shadow:0 4px 4px #00000005,0 4px 4px #00000005}*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.i-tabler-alert-circle{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'9\'/%3E%3Cpath d=\'M12 8v4m0 4h.01\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-eye{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'2\'/%3E%3Cpath d=\'M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-eye-off{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Cpath d=\'m3 3l18 18M10.584 10.587a2 2 0 0 0 2.828 2.83\'/%3E%3Cpath d=\'M9.363 5.365A9.466 9.466 0 0 1 12 5c4 0 7.333 2.333 10 7c-.778 1.361-1.612 2.524-2.503 3.488m-2.14 1.861C15.726 18.449 13.942 19 12 19c-4 0-7.333-2.333-10-7c1.369-2.395 2.913-4.175 4.632-5.341\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-search{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'7\'/%3E%3Cpath d=\'m21 21l-6-6\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler\:chevron-down{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m6 9l6 6l6-6\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler\:chevron-up{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m6 15l6-6l6 6\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.absolute{position:absolute;}.relative{position:relative;}.grid{display:grid;}.block{display:block;}.inline-block{display:inline-block;}.flex,[flex=\"\"]{display:flex;}.px,[px=\"\"]{padding-left:1rem;padding-right:1rem;}.blur{--un-blur:blur(8px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}.filter{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}*{font-family:Inter,sans-serif;box-sizing:border-box}:root{--border-color: #E0E0E0;--placeholder-color: #A9A9B8;--base-white: #fff;--base-black: #000;--stormGray-100: #f4f4f4;--primary-color: #B83375;--primary-400: #B83375;--gray-900: #262629;--gray-800: #333333;--gray-700: #444444;--gray-600: #757580;--gray-400: #444444;--gray-500: #4B4C52;--gray-100: #EBEBEB;--gray-50: #F0F0FA;--gray-25: #E0E0E0;--gray-20: #FAFAFA;--gray-10: #F0F0F0;--black-800: rgba(0, 0, 0, .04);--white: #FFFFFF}
`,document.head.appendChild(N);function nt(t){return t}const q=["value","type","placeholder"],Y=e.defineComponent({__name:"Input",props:{modelValue:null,type:null,placeholder:null},emits:["update:modelValue","focus","blur"],setup(t,{emit:o}){const a=t,n=e.computed(()=>a.modelValue),l=e.computed(()=>a.type),d=({target:c})=>{o("update:modelValue",c.value)},s=()=>o("focus"),r=()=>o("blur");return(c,i)=>(e.openBlock(),e.createElementBlock("input",e.mergeProps({value:e.unref(n),type:e.unref(l),placeholder:t.placeholder,class:"input"},c.$attrs,{onInput:d,onFocus:s,onBlur:r}),null,16,q))}}),lt="",h=(t,o)=>{const a=t.__vccOpts||t;for(const[n,l]of o)a[n]=l;return a},E=h(Y,[["__scopeId","data-v-0dfcb387"]]),k=e.defineComponent({__name:"TextInput",props:{modelValue:null,placeholder:null},emits:["update:modelValue"],setup(t,{emit:o}){const a=t,n=e.computed(()=>a.modelValue),l=d=>{o("update:modelValue",d)};return(d,s)=>(e.openBlock(),e.createBlock(E,e.mergeProps({"model-value":e.unref(n),type:"text",class:"input",placeholder:t.placeholder},d.$attrs,{"onUpdate:modelValue":l}),null,16,["model-value","placeholder"]))}}),J=t=>(e.pushScopeId("data-v-6d180ddd"),t=t(),e.popScopeId(),t),X={class:"store-slug-input"},Z={class:"input-container"},ee={class:"popover"},te=[J(()=>e.createElementVNode("div",{class:"store-slug-box-content"},[e.createElementVNode("div",{class:"box-description"},[e.createElementVNode("p",{class:"store-slug-title"}," Store slug "),e.createElementVNode("p",{class:"store-slug-description"}," The slug you choose will be your store's domain name that your customers will see. "),e.createElementVNode("div",{class:"border-example"},[e.createElementVNode("i",{class:"border-icon-example i-tabler-search"}),e.createElementVNode("span",{class:"input-border-example"},"example.youcan.shop")])]),e.createElementVNode("div",{class:"note"},[e.createElementVNode("div",null,[e.createElementVNode("i",{class:"icon-note i-tabler-alert-circle"})]),e.createElementVNode("span",{class:"note-description"}," You can always replace it with a custom domain name you purchased. ")])],-1))],oe={class:"slug-suffix"},ae=e.defineComponent({__name:"StoreSlugInput",props:{modelValue:{type:String,required:!0},slugSuffix:{type:String,default:".youcan.shop"},placeholder:{type:String}},emits:["update:modelValue"],setup(t,{emit:o}){const a=t,n=e.ref(a.modelValue),l=e.ref(!1),d=c=>o("update:modelValue",c),s=()=>l.value=!0,r=()=>l.value=!1;return(c,i)=>(e.openBlock(),e.createElementBlock("div",X,[e.createElementVNode("div",Z,[e.createVNode(e.Transition,{name:"fade"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",ee,te,512),[[e.vShow,l.value]])]),_:1}),e.createVNode(E,{"model-value":n.value,type:"text",class:"input",placeholder:t.placeholder,"onUpdate:modelValue":d,onFocus:s,onBlur:r},null,8,["model-value","placeholder"]),e.createElementVNode("span",oe,e.toDisplayString(t.slugSuffix),1)])]))}}),dt="",$=h(ae,[["__scopeId","data-v-6d180ddd"]]);var C;const v=typeof window<"u",ne=t=>typeof t=="string",I=()=>{};v&&((C=window==null?void 0:window.navigator)==null?void 0:C.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function le(t){return typeof t=="function"?t():e.unref(t)}function re(t){return t}function de(t){return e.getCurrentScope()?(e.onScopeDispose(t),!0):!1}function y(t){var o;const a=le(t);return(o=a==null?void 0:a.$el)!=null?o:a}const O=v?window:void 0;v&&window.document,v&&window.navigator,v&&window.location;function V(...t){let o,a,n,l;if(ne(t[0])?([a,n,l]=t,o=O):[o,a,n,l]=t,!o)return I;let d=I;const s=e.watch(()=>y(o),c=>{d(),c&&(c.addEventListener(a,n,l),d=()=>{c.removeEventListener(a,n,l),d=I})},{immediate:!0,flush:"post"}),r=()=>{s(),d()};return de(r),r}function B(t,o,a={}){const{window:n=O,ignore:l,capture:d=!0,detectIframe:s=!1}=a;if(!n)return;const r=e.ref(!0);let c;const i=u=>{n.clearTimeout(c);const p=y(t),g=u.composedPath();!p||p===u.target||g.includes(p)||!r.value||l&&l.length>0&&l.some(w=>{const _=y(w);return _&&(u.target===_||g.includes(_))})||o(u)},m=[V(n,"click",i,{passive:!0,capture:d}),V(n,"pointerdown",u=>{const p=y(t);r.value=!!p&&!u.composedPath().includes(p)},{passive:!0}),V(n,"pointerup",u=>{if(u.button===0){const p=u.composedPath();u.composedPath=()=>p,c=n.setTimeout(()=>i(u),50)}},{passive:!0}),s&&V(n,"blur",u=>{var p;const g=y(t);((p=document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&o(u)})].filter(Boolean);return()=>m.forEach(u=>u())}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";P[F]=P[F]||{};var z;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(z||(z={}));var se=Object.defineProperty,T=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,D=(t,o,a)=>o in t?se(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,pe=(t,o)=>{for(var a in o||(o={}))ce.call(o,a)&&D(t,a,o[a]);if(T)for(var a of T(o))ie.call(o,a)&&D(t,a,o[a]);return t};pe({linear:re},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ue=t=>(e.pushScopeId("data-v-b19d081d"),t=t(),e.popScopeId(),t),fe={class:"label-item"},me=ue(()=>e.createElementVNode("i",{class:"i-tabler:chevron-down icon"},null,-1)),_e=e.defineComponent({__name:"SelectButton",props:{item:null,placeholder:null},emits:["click","clickOutside"],setup(t,{emit:o}){const a=t,n=e.computed(()=>a.item),l=e.ref();return B(l,()=>o("clickOutside")),(d,s)=>{var r;return e.openBlock(),e.createElementBlock("button",{ref_key:"_dropdown_trigger",ref:l,class:"dropdown-input",onClick:s[0]||(s[0]=c=>o("click"))},[e.createElementVNode("div",fe,[e.createElementVNode("i",{class:e.normalizeClass([(r=e.unref(n))==null?void 0:r.icon])},null,2),e.createElementVNode("span",null,e.toDisplayString(e.unref(n)?e.unref(n).label:t.placeholder||"Please select an option"),1)]),me],512)}}}),ct="",he=h(_e,[["__scopeId","data-v-b19d081d"]]),ge=t=>(e.pushScopeId("data-v-78fb5b73"),t=t(),e.popScopeId(),t),be={class:"dropdown-content"},xe=["onClick"],ve=["src"],ye={key:1,class:"no-results"},we=[ge(()=>e.createElementVNode("span",null,"Your search came up with no results.",-1))],ke=e.defineComponent({__name:"SelectMenu",props:{items:null,modelValue:null},emits:["update:modelValue"],setup(t,{emit:o}){const a=t,n=e.ref(a.modelValue),l=d=>{n.value=d,o("update:modelValue",n.value)};return(d,s)=>(e.openBlock(),e.createElementBlock("div",be,[t.items.length>0?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.items,r=>(e.openBlock(),e.createElementBlock("div",{key:r.label,class:"dropdown-item",onClick:c=>l(r)},[r.icon?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(r.icon)},null,2)):e.createCommentVNode("",!0),r.image?(e.openBlock(),e.createElementBlock("img",{key:1,src:r.image},null,8,ve)):e.createCommentVNode("",!0),e.createElementVNode("span",null,e.toDisplayString(r.label),1)],8,xe))),128)):(e.openBlock(),e.createElementBlock("div",ye,we))]))}}),pt="",S=h(ke,[["__scopeId","data-v-78fb5b73"]]),Ve={class:"dropdown"},Ee=e.defineComponent({__name:"Dropdown",props:{items:null,modelValue:null,placeholder:null},emits:["update:modelValue"],setup(t,{emit:o}){const{modelValue:a,items:n,placeholder:l}=t,d=e.computed(()=>a),s=e.ref(),r=e.ref(!1),c=i=>{!i||(s.value=i,o("update:modelValue",s.value.value),r.value=!1)};return e.watchEffect(()=>s.value=n.find(i=>i.value===d.value)),(i,m)=>(e.openBlock(),e.createElementBlock("div",Ve,[e.createVNode(he,{item:s.value,placeholder:t.placeholder,onClick:m[0]||(m[0]=b=>r.value=!r.value),onClickOutside:m[1]||(m[1]=b=>r.value=!1)},null,8,["item","placeholder"]),e.withDirectives(e.createVNode(S,{"model-value":s.value,items:t.items,"onUpdate:modelValue":c},null,8,["model-value","items"]),[[e.vShow,r.value]])]))}}),ut="",L=h(Ee,[["__scopeId","data-v-a344e087"]]),Ie={class:"password-input"},Be=e.defineComponent({__name:"PasswordInput",props:{modelValue:null,placeholder:null,passwordHidden:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:o}){const{modelValue:a,passwordHidden:n=!0}=t,l=e.ref(),d=e.ref(n),s=e.ref(a),r=c=>{o("update:modelValue",c)};return(c,i)=>(e.openBlock(),e.createElementBlock("div",Ie,[e.createElementVNode("button",{class:"password-icon",onClick:i[0]||(i[0]=m=>d.value=!d.value)},[e.createElementVNode("i",{class:e.normalizeClass(d.value?"i-tabler-eye":"i-tabler-eye-off")},null,2)]),e.createVNode(E,{ref_key:"baseInput",ref:l,type:d.value?"password":"text",placeholder:t.placeholder,"model-value":s.value,class:"input","onUpdate:modelValue":r},null,8,["type","placeholder","model-value"])]))}}),ft="",U=h(Be,[["__scopeId","data-v-f2932a78"]]),mt="",Se={},Ne={class:"note"},$e={class:"icon"},Ce={class:"content"};function Oe(t,o){return e.openBlock(),e.createElementBlock("div",Ne,[e.createElementVNode("div",$e,[e.renderSlot(t.$slots,"icon",{class:"icon"},void 0,!0)]),e.createElementVNode("div",Ce,[e.renderSlot(t.$slots,"content",{},void 0,!0)])])}const A=h(Se,[["render",Oe],["__scopeId","data-v-b82d0345"]]),Pe=t=>(e.pushScopeId("data-v-dbbecf04"),t=t(),e.popScopeId(),t),Fe={class:"loading"},ze={class:"loading-svg",viewBox:"0 0 100 100"},Te=Pe(()=>e.createElementVNode("circle",{class:"loading-circle",cx:"50",cy:"50",r:"45"},null,-1)),De={class:"loading-value"},Le=e.defineComponent({__name:"Loading",props:{duration:{type:Number,default:12e3}},emits:["complete"],setup(t,{emit:o}){const a=t,n=e.ref(0),l=e.ref(!1),d=e.computed(()=>({strokeDashoffset:`${(100-n.value)*2.64}px`,transition:l.value?"all 0.1s ease":"none"}));return e.watch(a,()=>{n.value=0,l.value=!0}),e.watchEffect(()=>{const s=a.duration,r=s/100,c=100/(s/r);let i=0;l.value=!0;const m=setInterval(()=>{i+=c,n.value=i,i>=100&&(clearInterval(m),l.value=!1,o("complete"))},r);return()=>clearInterval(m)}),(s,r)=>(e.openBlock(),e.createElementBlock("div",Fe,[(e.openBlock(),e.createElementBlock("svg",ze,[Te,e.createElementVNode("circle",{class:"loading-circle-progress",style:e.normalizeStyle(e.unref(d)),cx:"50",cy:"50",r:"45"},null,4)])),e.createElementVNode("div",De,e.toDisplayString(`${n.value}%`),1)]))}}),_t="",M=h(Le,[["__scopeId","data-v-dbbecf04"]]),Ue=t=>(e.pushScopeId("data-v-fabf80c5"),t=t(),e.popScopeId(),t),Ae={class:"checkbox-container"},Me=Ue(()=>e.createElementVNode("span",{class:"checkmark"},null,-1)),je=e.defineComponent({__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:o}){const a=t,n=e.ref(a.modelValue);return e.watchEffect(()=>{o("update:modelValue",n.value)}),(l,d)=>(e.openBlock(),e.createElementBlock("label",Ae,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":d[0]||(d[0]=s=>n.value=s),class:"checkbox-input",type:"checkbox"},null,512),[[e.vModelCheckbox,n.value]]),Me]))}}),ht="",j=h(je,[["__scopeId","data-v-fabf80c5"]]),Qe=["disabled"],We={class:"text"},Ge=e.defineComponent({__name:"Button",props:{disabled:{type:Boolean,default:!1}},setup(t){return(o,a)=>(e.openBlock(),e.createElementBlock("button",{ref:"target",class:e.normalizeClass(["button",{disabled:t.disabled}]),disabled:t.disabled},[e.createElementVNode("span",We,[e.renderSlot(o.$slots,"default",{},void 0,!0)])],10,Qe))}}),gt="",He=h(Ge,[["__scopeId","data-v-4695437a"]]),Re=e.defineComponent({__name:"PrimaryButton",setup(t){return(o,a)=>(e.openBlock(),e.createBlock(He,e.mergeProps(o.$attrs,{ref:"target",class:"primary"}),{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default",{},void 0,!0)]),_:3},16))}}),bt="",Q=h(Re,[["__scopeId","data-v-99aecff6"]]),Ke={class:"dropdown"},qe={class:"icon-container"},Ye=e.defineComponent({__name:"ComboBox",props:{items:null,modelValue:null,placeholder:null},emits:["update:modelValue"],setup(t,{emit:o}){const{modelValue:a="",items:n}=t,l=e.ref(a),d=e.ref(),s=e.ref(!1),r=e.ref(n),c=e.ref(0),i=p=>s.value=p,m=p=>{!p||(d.value=p,l.value=p.label,o("update:modelValue",d.value.value),i(!1))};e.watchEffect(()=>d.value=n.find(p=>p.value===l.value));const b=p=>{r.value=n.filter(g=>g.label.includes(p)||g.value.includes(p))},u=e.ref();return B(u,()=>{c.value++,r.value=n,i(!1)}),(p,g)=>(e.openBlock(),e.createElementBlock("div",Ke,[e.createElementVNode("div",{ref_key:"_dropdown_trigger",ref:u,class:"input-container"},[(e.openBlock(),e.createBlock(k,{key:c.value,"model-value":l.value,class:"input",placeholder:t.placeholder||"Search items","onUpdate:modelValue":b,onFocus:g[0]||(g[0]=w=>i(!0))},null,8,["model-value","placeholder"])),e.createElementVNode("div",qe,[e.createElementVNode("i",{class:e.normalizeClass(["icon",[s.value?"i-tabler:chevron-up":"i-tabler:chevron-down"]])},null,2)])],512),e.withDirectives(e.createVNode(S,{class:"items-menu","model-value":d.value,items:r.value,"onUpdate:modelValue":m},null,8,["model-value","items"]),[[e.vShow,s.value]])]))}}),xt="",W=h(Ye,[["__scopeId","data-v-f764e0e5"]]),Je={class:"dropdown"},Xe={class:"text"},Ze={class:"input-container"},et=e.defineComponent({__name:"PhoneNumberInput",props:{items:null,dialCode:null,modelValue:null,placeholder:null},emits:["update:modelValue"],setup(t,{emit:o}){const{modelValue:a,dialCode:n,items:l,placeholder:d}=t,s=e.ref(a),r=e.computed(()=>n),c=e.ref(),i=e.ref(!1),m=e.ref(l),b=e.ref(0),u=_=>i.value=_,p=_=>{!_||(c.value=_,s.value="",u(!1))};e.watchEffect(()=>c.value=l.find(_=>_.value===r.value));const g=_=>{m.value=l.filter(x=>x.label.includes(_)||x.value.includes(_)),c.value&&o("update:modelValue",_)},w=e.ref();return B(w,()=>{m.value=l,s.value!==""&&b.value++,u(!1)}),(_,x)=>{var R;return e.openBlock(),e.createElementBlock("div",Je,[e.createElementVNode("div",{ref_key:"_dropdown_trigger",ref:w,class:"handler"},[e.createElementVNode("div",{class:"trigger",onClick:x[0]||(x[0]=at=>u(!i.value))},[e.createElementVNode("span",Xe,e.toDisplayString(((R=c.value)==null?void 0:R.value)||"unknown"),1),e.createElementVNode("i",{class:e.normalizeClass(["icon",[i.value?"i-tabler:chevron-up":"i-tabler:chevron-down"]])},null,2)]),e.createElementVNode("div",Ze,[(e.openBlock(),e.createBlock(k,{key:b.value,"model-value":s.value,class:"input",placeholder:t.placeholder||"Search by country or dialing code","onUpdate:modelValue":g,onFocus:x[1]||(x[1]=at=>{var K;return!((K=c.value)!=null&&K.value)&&u(!0)})},null,8,["model-value","placeholder"]))])],512),e.withDirectives(e.createVNode(S,{class:"items-menu","model-value":c.value,items:t.items,"onUpdate:modelValue":p},null,8,["model-value","items"]),[[e.vShow,i.value]])])}}}),vt="",G=h(et,[["__scopeId","data-v-9dca4090"]]),H=Object.freeze(Object.defineProperty({__proto__:null,TextInput:k,StoreSlugInput:$,Dropdown:L,PasswordInput:U,Note:A,Loading:M,Checkbox:j,PrimaryButton:Q,ComboBox:W,PhoneNumberInput:G},Symbol.toStringTag,{value:"Module"})),yt="",wt="";function tt(t){for(const o in H)t.component(o,H[o])}const ot={install:tt};f.Checkbox=j,f.ComboBox=W,f.Dropdown=L,f.Loading=M,f.Note=A,f.PasswordInput=U,f.PhoneNumberInput=G,f.PrimaryButton=Q,f.StoreSlugInput=$,f.TextInput=k,f.default=ot,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
