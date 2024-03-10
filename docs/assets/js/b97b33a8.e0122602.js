"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[89592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={id:"focus_and_bang",title:"Focus and Bang",slug:"conditional-tests-with-focus-and-bang.html",sidebar_label:"Focus and Bang"},i=void 0,s={unversionedId:"framework/conditional/focus_and_bang",id:"version-5.8/framework/conditional/focus_and_bang",title:"Focus and Bang",description:"Focus",source:"@site/versioned_docs/version-5.8/framework/conditional/focus.md",sourceDirName:"framework/conditional",slug:"/framework/conditional/conditional-tests-with-focus-and-bang.html",permalink:"/docs/framework/conditional/conditional-tests-with-focus-and-bang.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/framework/conditional/focus.md",tags:[],version:"5.8",frontMatter:{id:"focus_and_bang",title:"Focus and Bang",slug:"conditional-tests-with-focus-and-bang.html",sidebar_label:"Focus and Bang"},sidebar:"framework",previous:{title:"Enabled Flags",permalink:"/docs/framework/conditional/enabled-config-flag.html"},next:{title:"X Methods",permalink:"/docs/framework/conditional/conditional-tests-with-x-methods.html"}},l={},c=[{value:"Focus",id:"focus",level:2},{value:"Bang",id:"bang",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"focus"},"Focus"),(0,a.kt)("p",null,"Kotest supports isolating a single ",(0,a.kt)("strong",{parentName:"p"},"top level")," test by preceding the test name with ",(0,a.kt)("inlineCode",{parentName:"p"},"f:"),"."),(0,a.kt)("p",null,"Then only that test (and any subtests defined inside that scope) will be executed, with the rest being skipped."),(0,a.kt)("p",null,"For example, in the following snippet only the middle test will be executed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FocusExample : StringSpec({\n    "test 1" {\n     // this will be skipped\n    }\n\n    "f:test 2" {\n     // this will be executed\n    }\n\n    "test 3" {\n     // this will be skipped\n    }\n})\n')),(0,a.kt)("p",null,"The focus on a parent allows nested tests to execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FocusExample : FunSpec({\n   context("test 1") {\n      // this will be skipped\n      test("foo") {\n         // this will be skipped\n      }\n   }\n\n   context("f:test 2") {\n      // this will be executed\n      test("foo") {\n         // this will be executed\n      }\n   }\n\n   context("test 3") {\n      // this will be skipped\n      test("foo") {\n         // this will be skipped\n      }\n    }\n})\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The focus flag ",(0,a.kt)("strong",{parentName:"p"},"does not")," work if placed on nested tests due to the fact that nested tests are only discovered once the parent test has executed. So there would be no way for the test engine to know that a nested test has the f: prefix without first executing all the parents.")),(0,a.kt)("h2",{id:"bang"},"Bang"),(0,a.kt)("p",null,"The opposite of focus is to prefix a test with an exclamation mark ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," and then that test (and any subtests defined inside that scope) will be skipped.\nIn the next example we\u2019ve disabled only the first test by adding the \u201c!\u201d prefix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class BangExample : StringSpec({\n\n  "!test 1" {\n    // this will be ignored\n  }\n\n  "test 2" {\n    // this will run\n  }\n\n  "test 3" {\n    // this will run too\n  }\n})\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to disable the use of ! (and allow it to be used as the first character in enabled test names) then set the system property ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest.bang.disable")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")))}p.isMDXComponent=!0}}]);