var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var i,o,r,a,u,f,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,u=setTimeout(O,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=r}function O(){var e=m();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return p?d(n,r-(e-c)):n}(e))}function h(e){return u=void 0,y&&i?b(e):(i=o=void 0,a)}function w(){var e=m(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(p)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=g(t)||0,v(n)&&(l=!!n.leading,r=(p="maxWait"in n)?s(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},w.flush=function(){return void 0===u?a:h(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),b=document.querySelector('input[name="email"]'),S=document.querySelector('textarea[name="message"]'),j={};let O,h=JSON.parse(localStorage.getItem("feedback-form-state"));h&&(h.email&&(b.value=h.email),h.message&&(S.value=h.message)),y.addEventListener("input",t((function(e){j.email=b.value,j.message=S.value,O=JSON.stringify(j),localStorage.setItem("feedback-form-state",O)}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),h=JSON.parse(localStorage.getItem("feedback-form-state")),console.log(h),localStorage.clear(),y.reset()}));
//# sourceMappingURL=03-feedback.0116cb79.js.map