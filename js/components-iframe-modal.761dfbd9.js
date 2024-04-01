(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2212],{39711:(e,t,a)=>{var r=a(16270),o=a(43693);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a(74423),a(23792),a(44114),a(62953);a(96540);const{useState:n,useEffect:i,useRef:c}=a(96540),{bool:d,string:m,func:p,shape:u,number:f}=a(5556),b=a(57937),_=a(46942),g=a(81762),S=a(35122),{trackEvent:v}=a(800),C=a(99511),O=a(81821),{eventTypes:h}=a(25824),{MSG_LOADED:k,MSG_LOADING:y,MSG_CLOSE_BTN:A,MSG_REDIRECT:E,MSG_NAVIGATE:D,MSG_CLOSE:w,MSG_SNACKBAR:G,MSG_ASK_QUESTION:L}=h,M=e=>{let{id:t,src:a,title:o,show:l,deviceType:d,fallbackConfig:m,isClosable:p,bottomSheetClose:u,updateIframeModal:f,updateComponentsBottomSheet:h,onCloseVariations:M,onCreateQuestionFromAi:T,showSnackbar:I}=e;const N=c(null),[j,x]=n(!1),[P,U]=n(null),B=a&&a.includes("questions-ai"),R="mobile"===d?B?"small":"card":"large",{fallbackUrl:q,timeoutInitialLoad:K,timeoutWebviewEvent:V}=m||{},Q=e=>{let{url:t,target:a,fallback:r,isDismissible:o}=e;t&&O({target:t,currentLocation:window.location})&&("parent"===a&&(window.location.href=t),"modal"===a&&f&&f({src:t,fallbackConfig:{fallbackUrl:r},isClosable:o}))},H=()=>{M&&M(),u&&u(),P&&(v(P),U(null))},z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{trackData:t=null,refreshCartIcon:a=!1,shouldUpdateComponents:r=!1,disableClose:o=!1}=e;var l;clearTimeout(N.current),o&&f({isClosable:!1}),x(!0),t&&U({melidata_event:s({},t)}),a&&(null===(l=S.freya)||void 0===l||l.emit("cart:refresh")),r&&h&&h()},F=e=>{var t;if(null!=e&&null!==(t=e.data)&&void 0!==t&&t.type)switch(e.data.type){case k:z(e.data.data);break;case y:x(!1);break;case A:f({isClosable:e.data.enabled});break;case E:Q({url:e.data.redirectUrl,target:"parent"});break;case D:x(!1),U(null),Q({url:e.data.url,target:"modal",fallback:e.data.fallback,isDismissible:e.data.isDismissible});break;case w:H();break;case G:e.data.snackbar&&I&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{snackbar:t,close:a}=e,{message:r,type:o,delay:l,called_from:s,action:n}=t;a&&H(),n&&(n.onClick=()=>Q({url:n.redirectUrl,target:"parent"})),I({message:r,type:o,delay:l,called_from:s,action:n})}(e.data);break;case L:e.data.question&&e.data.itemId&&T&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};H(),T({itemId:e.itemId,text:e.question,snackbar_message:e.snackbar_message})}(e.data)}};i((()=>{a&&q&&(N.current=setTimeout((()=>{Q({url:q,target:"parent"})}),K||1e4))}),[a]),i((()=>(l||x(!1),M&&l&&(document.querySelector(".ui-pdp-backdrop-modal").setAttribute("style","height:0px"),document.querySelectorAll(".andes-modal__overlay")[0].setAttribute("style","height:0px")),S.addEventListener("message",F),()=>{S.removeEventListener("message",F),clearTimeout(N.current)})),[l]);const W=_("iframe-modal-congrats",{"iframe-modal-congrats--desktop":"large"===R,"iframe-modal-congrats--mobile":"large"!==R,"iframe-modal-questions-ai":B});return r(b,{open:l,id:t,onClose:H,type:R,title:o||" ",className:W,closable:j&&!1!==p},void 0,r(C,{title:"iframe","data-testid":"iframe-element",src:a,showSpinner:!0,forceSpinner:!j,spinnerClassname:"center-spinner",onLoad:()=>{clearTimeout(N.current),q&&(N.current=setTimeout((()=>{Q({url:q,target:"parent"})}),V||5e3))},onMessage:g("vpp:iframe-modal:resize","height",".ui-pdp-iframe-modal",".andes-modal__header")}))};M.defaultProps={id:"",title:"",show:!1,fallbackConfig:{},isClosable:!0,updateComponentsBottomSheet:null,onCloseVariations:null,onCreateQuestionFromAi:null,showSnackbar:null},e.exports=M},25824:e=>{const t={MSG_LOADED:"vpp:iframe-modal:loaded",MSG_LOADING:"vpp:iframe-modal:loading",MSG_CLOSE_BTN:"vpp:iframe-modal:close_button",MSG_REDIRECT:"vpp:iframe-modal:redirect",MSG_NAVIGATE:"vpp:iframe-modal:navigate",MSG_CLOSE:"vpp:iframe-modal:close",MSG_SNACKBAR:"vpp:iframe-modal:snackbar",MSG_ASK_QUESTION:"vpp:iframe-modal:ask-question"};e.exports={eventTypes:t}},35122:(e,t,a)=>{"object"==typeof window?e.exports=window:e.exports=a.g},81762:(e,t,a)=>{const{onIframeModalResize:r}=a(57122);e.exports=r},81821:(e,t,a)=>{const{targetHostnameValidator:r}=a(57122);e.exports=r}}]);
//# sourceMappingURL=components-iframe-modal.761dfbd9.js.map