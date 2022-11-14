(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s["youcan-ui"]={},s.Vue))})(this,function(s,e){"use strict";var _=document.createElement("style");_.textContent=`@import"https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";.input[data-v-76e6a459]{width:100%;border:1px solid var(--border-color);height:54px;border-radius:8px;padding:6px 12px;font-weight:400;letter-spacing:2%;line-height:19.2px}.input[data-v-76e6a459]::placeholder{color:var(--placeholder-color)}.store-slug-input[data-v-7f51ea46]{--store-slug-title: var(--gray-900);--store-slug-description: var(--gray-500);--store-slug-box-input: var(--gray-100);--store-slug-box-icon: var(--primary-400);--store-slug-note: var(--gray-600);--store-slug-note-content: var(--gray-20);display:flex;align-items:flex-start;gap:10px;position:relative}.input-container[data-v-7f51ea46]{position:relative;display:flex;align-items:center;width:100%}.slug-suffix[data-v-7f51ea46]{position:absolute;right:20px;color:var(--gray-800);font-weight:400;font-size:15px;line-height:19px;letter-spacing:.04em}.popover[data-v-7f51ea46]{width:332px;background-color:#fff;transform:translate(calc(100% + 1rem));border:1px solid var(--gray-50);top:0;box-shadow:0 4px 12px var(--black-800);border-radius:12px;position:absolute;right:0}.box-description[data-v-7f51ea46]{padding-left:20px;padding-right:28px}.store-slug-title[data-v-7f51ea46]{font-weight:500;color:var(--store-slug-title);font-size:16px;line-height:19px;letter-spacing:.02em}.store-slug-description[data-v-7f51ea46]{color:var(--store-slug-description);font-weight:400;font-size:13px;margin-top:-5px;line-height:20px;letter-spacing:.02em}.border-example[data-v-7f51ea46]{display:flex;align-items:center;gap:8px;border:1px solid var(--store-slug-box-input);padding:12px 16px;box-shadow:0 1px 8px var(--black-800);border-radius:8px;margin-bottom:14px}.border-icon-example[data-v-7f51ea46]{color:var(--store-slug-box-icon)}.input-border-example[data-v-7f51ea46]{font-weight:400;font-size:14px;line-height:19px;letter-spacing:.02em;color:var(--store-slug-description)}.note[data-v-7f51ea46]{display:flex;align-items:center;gap:9px;background-color:var(--store-slug-note-content);border-bottom-left-radius:12px;border-bottom-right-radius:12px;padding:8px 10px 12px 20px}.icon-note[data-v-7f51ea46]{color:var(--store-slug-note)}.note-description[data-v-7f51ea46]{font-weight:400;font-size:13px;line-height:21px;letter-spacing:.02em;color:var(--store-slug-note)}.fade-enter-active[data-v-7f51ea46],.fade-leave-active[data-v-7f51ea46]{transition:opacity .5s ease}.fade-enter-from[data-v-7f51ea46],.fade-leave-to[data-v-7f51ea46]{opacity:0}.dropdown-input[data-v-80e63c12]{display:flex;justify-content:space-between;align-items:center;background:var(--base-white);color:var(--gray-400);width:100%;max-width:460px;height:56px;border:1px solid var(--border-color);border-radius:8px;padding:16px;text-align:start;font-weight:400;font-size:16px;line-height:19px;letter-spacing:.02em}.dropdown-input .icon[data-v-80e63c12]{color:var(--gray-400)}.dropdown-input .label-item[data-v-80e63c12]{display:flex;gap:7px}.dropdown-content[data-v-3746b3dd]{background-color:var(--base-white);width:100%;max-width:460px;height:max-content;max-height:191px;border:1px solid var(--border-color);border-radius:8px;overflow:auto;padding:16px 0;z-index:1}.dropdown-content .dropdown-item[data-v-3746b3dd]{display:flex;align-items:center;gap:7px;color:var(--gray-400);font-weight:400;font-size:16px;line-height:19px;letter-spacing:.02em;padding:8px 16px;cursor:pointer}.dropdown-content .dropdown-item[data-v-3746b3dd]:hover{--hover-color: #f7faff;background-color:var(--hover-color)}.dropdown[data-v-40830d85]{position:relative;display:block}.dropdown .dropdown-content[data-v-40830d85]{position:absolute;top:63px}.password-input[data-v-526cc1b1]{position:relative}.password-input input[data-v-526cc1b1]{width:100%;border:1px solid var(--border-color);height:54px;border-radius:8px;padding:4px 16px;color:var(--placeholder-color);font-weight:400}.password-input input[data-v-526cc1b1]::placeholder{color:var(--placeholder-color)}.password-input button[data-v-526cc1b1]{position:absolute;height:100%;background:none;right:12px;border:none;outline:none;cursor:pointer;color:var(--placeholder-color)}.note[data-v-cb9f4361]{--note-background: var(--white);--note-border-color: var(--gray-25);--note-icon-color: var(--primary-400);--note-text-color: var(--gray-700);display:flex;align-items:center;max-width:540px;background:var(--note-background);border:1px solid var(--note-border-color);border-radius:8px;padding:2px 25px;gap:32px}.icon[data-v-cb9f4361]{color:var(--note-icon-color)}.content[data-v-cb9f4361]{color:var(--note-text-color);line-height:22px;font-weight:400;font-size:15px}.loading[data-v-dbbecf04]{--loading-stroke-color: var(--gray-10);position:relative;width:120px;height:120px}.loading-svg[data-v-dbbecf04]{width:100%;height:100%;transform:rotate(-90deg)}.loading-circle[data-v-dbbecf04]{fill:none;stroke:var(--loading-stroke-color);stroke-width:4}.loading-circle-progress[data-v-dbbecf04]{fill:none;stroke:var(--primary-color);stroke-width:4;stroke-dasharray:284;stroke-linecap:round}.loading-value[data-v-dbbecf04]{position:absolute;font-weight:500;line-height:36px;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;color:var(--primary-color)}.checkbox-container[data-v-fabf80c5]{display:inline-block;position:relative;cursor:pointer;width:20px;height:20px}.checkbox-container:hover .checkbox-input~.checkmark[data-v-fabf80c5]{background-color:var(--stormGray-100)}.checkbox-container .checkbox-input[data-v-fabf80c5]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container .checkmark[data-v-fabf80c5]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:var(--base-White);border:1px solid var(--border-color);border-radius:4px}[dir=rtl] .checkbox-container .checkmark[data-v-fabf80c5]{left:unset;right:0}.checkbox-container .checkmark[data-v-fabf80c5]:after{content:"";position:absolute;display:none}.checkbox-container .checkbox-input:checked~.checkmark[data-v-fabf80c5]:after{display:block}.checkbox-container .checkmark[data-v-fabf80c5]:after{left:5px;top:1px;width:5px;height:10px;border:solid var(--primary-color);border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.checkbox-container .checkbox-input:checked~.checkmark[data-v-fabf80c5]{background-color:var(--base-White)}.button[data-v-4695437a]{--button-bg-color: var(--stormGray-100);--button-color: var(--base-black);background:var(--button-bg-color);color:var(--button-color);display:flex;align-items:center;justify-content:center;border-radius:8px;padding:16px 32px;font-size:16px;border:none;outline:none;user-select:none;width:max-content;cursor:pointer}.button.disabled[data-v-4695437a]{pointer-events:none}.text[data-v-4695437a]{color:currentColor;font-weight:500;line-height:19px;letter-spacing:.02em}.button.primary[data-v-99aecff6]{--button-bg-color: var(--primary-color);--button-color: var(--base-white)}*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.i-tabler-alert-circle{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'9\'/%3E%3Cpath d=\'M12 8v4m0 4h.01\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-eye{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'2\'/%3E%3Cpath d=\'M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-eye-off{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Cpath d=\'m3 3l18 18M10.584 10.587a2 2 0 0 0 2.828 2.83\'/%3E%3Cpath d=\'M9.363 5.365A9.466 9.466 0 0 1 12 5c4 0 7.333 2.333 10 7c-.778 1.361-1.612 2.524-2.503 3.488m-2.14 1.861C15.726 18.449 13.942 19 12 19c-4 0-7.333-2.333-10-7c1.369-2.395 2.913-4.175 4.632-5.341\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-search{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'7\'/%3E%3Cpath d=\'m21 21l-6-6\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler\:chevron-down{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m6 9l6 6l6-6\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.absolute{position:absolute;}.relative{position:relative;}.block{display:block;}.inline-block{display:inline-block;}.flex,[flex=\"\"]{display:flex;}.px,[px=\"\"]{padding-left:1rem;padding-right:1rem;}.blur{--un-blur:blur(8px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}*{font-family:Inter,sans-serif;box-sizing:border-box}:root{--border-color: #E0E0E0;--placeholder-color: #A9A9B8;--base-white: #fff;--base-black: #000;--stormGray-100: #f4f4f4;--primary-color: #B83375;--primary-400: #B83375;--gray-900: #262629;--gray-800: #333333;--gray-700: #444444;--gray-600: #757580;--gray-400: #444444;--gray-500: #4B4C52;--gray-100: #EBEBEB;--gray-50: #F0F0FA;--gray-25: #E0E0E0;--gray-20: #FAFAFA;--gray-10: #F0F0F0;--black-800: rgba(0, 0, 0, .04);--white: #FFFFFF}
`,document.head.appendChild(_);function he(t){return t}const B=["value","type","placeholder"],E=e.defineComponent({__name:"Input",props:{modelValue:null,type:null,placeholder:null},emits:["update:modelValue","focus","blur"],setup(t,{emit:o}){const n=t,a=e.ref(n.modelValue),r=e.computed(()=>n.type),l=({target:i})=>{a.value=i.value,o("update:modelValue",a.value)},c=()=>o("focus"),d=()=>o("blur");return(i,u)=>(e.openBlock(),e.createElementBlock("input",e.mergeProps({value:a.value,type:e.unref(r),placeholder:t.placeholder,class:"input"},i.$attrs,{onInput:l,onFocus:c,onBlur:d}),null,16,B))}}),ge="",p=(t,o)=>{const n=t.__vccOpts||t;for(const[a,r]of o)n[a]=r;return n},f=p(E,[["__scopeId","data-v-76e6a459"]]),h=e.defineComponent({__name:"TextInput",props:{modelValue:null,placeholder:null},emits:["update:modelValue"],setup(t,{emit:o}){const n=t,a=e.ref(n.modelValue),r=l=>{a.value=l,o("update:modelValue",a.value)};return(l,c)=>(e.openBlock(),e.createBlock(f,{"model-value":a.value,type:"text",class:"input",placeholder:t.placeholder,"onUpdate:modelValue":r},null,8,["model-value","placeholder"]))}}),S=t=>(e.pushScopeId("data-v-7f51ea46"),t=t(),e.popScopeId(),t),I={class:"store-slug-input"},$={class:"input-container"},N={class:"popover"},C=[S(()=>e.createElementVNode("div",{class:"store-slug-box-content"},[e.createElementVNode("div",{class:"box-description"},[e.createElementVNode("p",{class:"store-slug-title"}," Store slug "),e.createElementVNode("p",{class:"store-slug-description"}," The slug you choose will be your store's domain name that your customers will see. "),e.createElementVNode("div",{class:"border-example"},[e.createElementVNode("i",{class:"border-icon-example i-tabler-search"}),e.createElementVNode("span",{class:"input-border-example"},"example.youcan.shop")])]),e.createElementVNode("div",{class:"note"},[e.createElementVNode("div",null,[e.createElementVNode("i",{class:"icon-note i-tabler-alert-circle"})]),e.createElementVNode("span",{class:"note-description"}," You can always replace it with a custom domain name you purchased. ")])],-1))],F={class:"slug-suffix"},z=e.defineComponent({__name:"StoreSlugInput",props:{modelValue:{type:String,required:!0},slugSuffix:{type:String,default:".youcan.shop"},placeholder:{type:String}},emits:["update:modelValue"],setup(t,{emit:o}){const n=t,a=e.ref(n.modelValue),r=e.ref(!1),l=i=>o("update:modelValue",i),c=()=>r.value=!0,d=()=>r.value=!1;return(i,u)=>(e.openBlock(),e.createElementBlock("div",I,[e.createElementVNode("div",$,[e.createVNode(e.Transition,{name:"fade"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",N,C,512),[[e.vShow,r.value]])]),_:1}),e.createVNode(f,{"model-value":a.value,type:"text",class:"input",placeholder:t.placeholder,"onUpdate:modelValue":l,onFocus:c,onBlur:d},null,8,["model-value","placeholder"]),e.createElementVNode("span",F,e.toDisplayString(t.slugSuffix),1)])]))}}),xe="",g=p(z,[["__scopeId","data-v-7f51ea46"]]),P=t=>(e.pushScopeId("data-v-80e63c12"),t=t(),e.popScopeId(),t),D={class:"label-item"},T=P(()=>e.createElementVNode("i",{class:"i-tabler:chevron-down icon"},null,-1)),A=e.defineComponent({__name:"SelectButton",props:{modelValue:null,placeholder:null},emits:["click"],setup(t,{emit:o}){const n=t,a=e.computed(()=>n.modelValue);return(r,l)=>{var c;return e.openBlock(),e.createElementBlock("button",{class:"dropdown-input",onClick:l[0]||(l[0]=d=>o("click"))},[e.createElementVNode("div",D,[e.createElementVNode("i",{class:e.normalizeClass([(c=e.unref(a))==null?void 0:c.icon])},null,2),e.createElementVNode("span",null,e.toDisplayString(e.unref(a)?e.unref(a).label:t.placeholder),1)]),T])}}}),ye="",M=p(A,[["__scopeId","data-v-80e63c12"]]),L={class:"dropdown-content"},j=["onClick"],U=["src"],O=e.defineComponent({__name:"SelectMenu",props:{items:null,modelValue:null},emits:["update:modelValue"],setup(t,{emit:o}){const n=t,a=e.ref(n.modelValue);return e.watchEffect(()=>{o("update:modelValue",a.value)}),(r,l)=>(e.openBlock(),e.createElementBlock("div",L,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.items,(c,d)=>(e.openBlock(),e.createElementBlock("div",{key:d,class:"dropdown-item",onClick:i=>a.value=c},[c.icon?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(c.icon)},null,2)):e.createCommentVNode("",!0),c.image?(e.openBlock(),e.createElementBlock("img",{key:1,src:c.image},null,8,U)):e.createCommentVNode("",!0),e.createElementVNode("span",null,e.toDisplayString(c.label),1)],8,j))),128))]))}}),ve="",G=p(O,[["__scopeId","data-v-3746b3dd"]]),H={class:"dropdown"},q=e.defineComponent({__name:"Select",props:{items:null},setup(t){const o=e.ref(),n=e.ref(!1);return(a,r)=>(e.openBlock(),e.createElementBlock("div",H,[e.createVNode(M,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=l=>o.value=l),placeholder:"Please select an option",onClick:r[1]||(r[1]=l=>n.value=!n.value)},null,8,["modelValue"]),e.withDirectives(e.createVNode(G,{modelValue:o.value,"onUpdate:modelValue":r[2]||(r[2]=l=>o.value=l),items:t.items},null,8,["modelValue","items"]),[[e.vShow,n.value]])]))}}),ke="",b=p(q,[["__scopeId","data-v-40830d85"]]),W={class:"password-input"},R=e.defineComponent({__name:"PasswordInput",props:{modelValue:null,placeholder:null,passwordHidden:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:o}){const{modelValue:n,passwordHidden:a=!0}=t,r=e.ref(),l=e.ref(a),c=e.ref(n),d=i=>{o("update:modelValue",i)};return(i,u)=>(e.openBlock(),e.createElementBlock("div",W,[e.createElementVNode("button",{onClick:u[0]||(u[0]=m=>l.value=!l.value)},[e.createElementVNode("i",{class:e.normalizeClass(l.value?"i-tabler-eye":"i-tabler-eye-off")},null,2)]),e.createVNode(f,{ref_key:"baseInput",ref:r,type:l.value?"password":"text",placeholder:t.placeholder,"model-value":c.value,class:"input","onUpdate:modelValue":d},null,8,["type","placeholder","model-value"])]))}}),we="",x=p(R,[["__scopeId","data-v-526cc1b1"]]),Ve="",Y={},J={class:"note"},K={class:"icon"},Q={class:"content"};function X(t,o){return e.openBlock(),e.createElementBlock("div",J,[e.createElementVNode("div",K,[e.renderSlot(t.$slots,"icon",{class:"icon"},void 0,!0)]),e.createElementVNode("div",Q,[e.renderSlot(t.$slots,"content",{},void 0,!0)])])}const y=p(Y,[["render",X],["__scopeId","data-v-cb9f4361"]]),Z=t=>(e.pushScopeId("data-v-dbbecf04"),t=t(),e.popScopeId(),t),ee={class:"loading"},te={class:"loading-svg",viewBox:"0 0 100 100"},oe=Z(()=>e.createElementVNode("circle",{class:"loading-circle",cx:"50",cy:"50",r:"45"},null,-1)),ae={class:"loading-value"},ne=e.defineComponent({__name:"Loading",props:{duration:{type:Number,default:12e3}},emits:["complete"],setup(t,{emit:o}){const n=t,a=e.ref(0),r=e.ref(!1),l=e.computed(()=>({strokeDashoffset:`${(100-a.value)*2.64}px`,transition:r.value?"all 0.1s ease":"none"}));return e.watch(n,()=>{a.value=0,r.value=!0}),e.watchEffect(()=>{const c=n.duration,d=c/100,i=100/(c/d);let u=0;r.value=!0;const m=setInterval(()=>{u+=i,a.value=u,u>=100&&(clearInterval(m),r.value=!1,o("complete"))},d);return()=>clearInterval(m)}),(c,d)=>(e.openBlock(),e.createElementBlock("div",ee,[(e.openBlock(),e.createElementBlock("svg",te,[oe,e.createElementVNode("circle",{class:"loading-circle-progress",style:e.normalizeStyle(e.unref(l)),cx:"50",cy:"50",r:"45"},null,4)])),e.createElementVNode("div",ae,e.toDisplayString(`${a.value}%`),1)]))}}),Be="",v=p(ne,[["__scopeId","data-v-dbbecf04"]]),re=t=>(e.pushScopeId("data-v-fabf80c5"),t=t(),e.popScopeId(),t),le={class:"checkbox-container"},ce=re(()=>e.createElementVNode("span",{class:"checkmark"},null,-1)),se=e.defineComponent({__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:o}){const n=t,a=e.ref(n.modelValue);return e.watchEffect(()=>{o("update:modelValue",a.value)}),(r,l)=>(e.openBlock(),e.createElementBlock("label",le,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),class:"checkbox-input",type:"checkbox"},null,512),[[e.vModelCheckbox,a.value]]),ce]))}}),Ee="",k=p(se,[["__scopeId","data-v-fabf80c5"]]),de=["disabled"],ie={class:"text"},pe=e.defineComponent({__name:"Button",props:{disabled:{type:Boolean,default:!1}},setup(t){return(o,n)=>(e.openBlock(),e.createElementBlock("button",{ref:"target",class:e.normalizeClass(["button",{disabled:t.disabled}]),disabled:t.disabled},[e.createElementVNode("span",ie,[e.renderSlot(o.$slots,"default",{},void 0,!0)])],10,de))}}),Se="",ue=p(pe,[["__scopeId","data-v-4695437a"]]),fe=e.defineComponent({__name:"PrimaryButton",setup(t){return(o,n)=>(e.openBlock(),e.createBlock(ue,e.mergeProps(o.$attrs,{ref:"target",class:"primary"}),{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default",{},void 0,!0)]),_:3},16))}}),Ie="",w=p(fe,[["__scopeId","data-v-99aecff6"]]),V=Object.freeze(Object.defineProperty({__proto__:null,TextInput:h,StoreSlugInput:g,DropDown:b,PasswordInput:x,Note:y,Loading:v,Checkbox:k,PrimaryButton:w},Symbol.toStringTag,{value:"Module"})),$e="",Ne="";function me(t){for(const o in V)t.component(o,V[o])}const _e={install:me};s.Checkbox=k,s.DropDown=b,s.Loading=v,s.Note=y,s.PasswordInput=x,s.PrimaryButton=w,s.StoreSlugInput=g,s.TextInput=h,s.default=_e,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});