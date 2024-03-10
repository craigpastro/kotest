"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[39670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"test_coroutine_dispatcher",title:"Test Coroutine Dispatcher",slug:"test-coroutine-dispatcher.html",sidebar_label:"Test Coroutine Dispatcher"},a=void 0,s={unversionedId:"framework/coroutines/test_coroutine_dispatcher",id:"version-5.6/framework/coroutines/test_coroutine_dispatcher",title:"Test Coroutine Dispatcher",description:"A TestDispatcher is a special CoroutineDispatcher provided by",source:"@site/versioned_docs/version-5.6/framework/coroutines/test_coroutine_dispatcher.md",sourceDirName:"framework/coroutines",slug:"/framework/coroutines/test-coroutine-dispatcher.html",permalink:"/docs/5.6/framework/coroutines/test-coroutine-dispatcher.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/framework/coroutines/test_coroutine_dispatcher.md",tags:[],version:"5.6",frontMatter:{id:"test_coroutine_dispatcher",title:"Test Coroutine Dispatcher",slug:"test-coroutine-dispatcher.html",sidebar_label:"Test Coroutine Dispatcher"},sidebar:"framework",previous:{title:"Examples",permalink:"/docs/5.6/framework/extensions/extension-examples.html"},next:{title:"Coroutine Debugging",permalink:"/docs/5.6/framework/coroutines/coroutine-debugging.html"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"TestDispatcher")," is a special ",(0,o.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-dispatcher/"},"CoroutineDispatcher")," provided by\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-test/README.md"},"kotlinx-coroutines-test")," module that allows\ndevelopers to control its virtual clock and skip delays."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"TestDispatcher")," supports the following operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currentTime")," gets the current virtual time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runCurrent()")," runs the tasks that are scheduled at this point of virtual time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"advanceUntilIdle()")," runs all enqueued tasks until there are no more."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"advanceTimeBy(timeDelta)")," runs the enqueued tasks until the current virtual time advances by timeDelta.")),(0,o.kt)("p",null,"To use a ",(0,o.kt)("em",{parentName:"p"},"TestDispatcher")," for a test, you can enable ",(0,o.kt)("inlineCode",{parentName:"p"},"coroutineTestScope")," in test config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TestDispatcherTest : FunSpec() {\n   init {\n      test("foo").config(coroutineTestScope = true) {\n         // this test will run with a test dispatcher\n      }\n   }\n}\n')),(0,o.kt)("p",null,"Inside this test, can you retrieve a handle to the scheduler through the extension val ",(0,o.kt)("inlineCode",{parentName:"p"},"testCoroutineScheduler"),".\nUsing this scheduler, you can then manipulate the time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.kotest.core.test.testCoroutineScheduler\n\nclass TestDispatcherTest : FunSpec() {\n   init {\n      test("advance time").config(coroutineTestScope = true) {\n        val duration = 1.days\n        // launch a coroutine that would normally sleep for 1 day\n        launch {\n          delay(duration.inWholeMilliseconds)\n        }\n        // move the clock on and the delay in the above coroutine will finish immediately.\n        testCoroutineScheduler.advanceTimeBy(duration.inWholeMilliseconds)\n        val currentTime = testCoroutineScheduler.currentTime\n      }\n   }\n}\n')),(0,o.kt)("p",null,"You can enable a test dispatcher for all tests in a spec by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"coroutineTestScope")," to true at the spec level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TestDispatcherTest : FunSpec() {\n   init {\n      coroutineTestScope = true\n      test("this test uses a test dispatcher") {\n      }\n      test("and so does this test!") {\n      }\n   }\n}\n')),(0,o.kt)("p",null,"Finally, you can enable test dispatchers for all tests in a module by using ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.6/framework/project-config.html"},"ProjectConfig"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig : AbstractProjectConfig() {\n  override var coroutineTestScope = true\n}\n")))}p.isMDXComponent=!0}}]);