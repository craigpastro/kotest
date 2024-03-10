"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[22376],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?o.createElement(h,r(r({ref:n},p),{},{components:t})):o.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const l={title:"Isolation Modes",slug:"isolation-mode.html"},r=void 0,i={unversionedId:"framework/isolation_mode",id:"version-5.2/framework/isolation_mode",title:"Isolation Modes",description:"All specs allow you to control how the test engine creates instances of Specs for test cases. This behavior is called the isolation mode and is controlled",source:"@site/versioned_docs/version-5.2/framework/isolation_mode.md",sourceDirName:"framework",slug:"/framework/isolation-mode.html",permalink:"/docs/5.2/framework/isolation-mode.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/framework/isolation_mode.md",tags:[],version:"5.2",frontMatter:{title:"Isolation Modes",slug:"isolation-mode.html"},sidebar:"framework",previous:{title:"Gradle",permalink:"/docs/5.2/framework/conditional/conditional-tests-with-gradle.html"},next:{title:"Lifecycle hooks",permalink:"/docs/5.2/framework/lifecycle-hooks.html"}},s={},c=[{value:"Single Instance",id:"single-instance",level:2},{value:"InstancePerTest",id:"instancepertest",level:2},{value:"InstancePerLeaf",id:"instanceperleaf",level:2},{value:"Global Isolation Mode",id:"global-isolation-mode",level:2},{value:"System Property",id:"system-property",level:3},{value:"Config",id:"config",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All specs allow you to control how the test engine creates instances of Specs for test cases. This behavior is called the ",(0,a.kt)("em",{parentName:"p"},"isolation mode")," and is controlled\nby an enum ",(0,a.kt)("inlineCode",{parentName:"p"},"IsolationMode"),". There are three values: ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleInstance"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"InstancePerLeaf"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"InstancePerTest"),"."),(0,a.kt)("p",null,"If you want tests to be executed inside fresh instances of the spec - to allow for state shared between tests to be reset -\nyou can change the isolation mode."),(0,a.kt)("p",null,"This can be done by using the DSL such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTestClass : WordSpec({\n isolationMode = IsolationMode.SingleInstance\n // tests here\n})\n")),(0,a.kt)("p",null,"Or if you prefer function overrides, you can override ",(0,a.kt)("inlineCode",{parentName:"p"},"fun isolationMode(): IsolationMode"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTestClass : WordSpec() {\n  override fun isolationMode() = IsolationMode.SingleInstance\n  init {\n    // tests here\n  }\n}\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The default in Kotest is Single Instance which is the same as ScalaTest (the inspiration for this framework), Jest, Jasmine, and other Javascript frameworks, but different to JUnit.")),(0,a.kt)("h2",{id:"single-instance"},"Single Instance"),(0,a.kt)("p",null,"The default isolation mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleInstance")," whereby one instance of the Spec class is created and then each test case\nis executed in turn until all tests have completed."),(0,a.kt)("p",null,"For example, in the following spec, the same id would be printed three times as the same instance is used for all tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SingleInstanceExample : WordSpec({\n   val id = UUID.randomUUID()\n   "a" should {\n      println(id)\n      "b" {\n         println(id)\n      }\n      "c" {\n         println(id)\n      }\n   }\n})\n')),(0,a.kt)("h2",{id:"instancepertest"},"InstancePerTest"),(0,a.kt)("p",null,"The next mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"IsolationMode.InstancePerTest"),' where a new spec will be created for every test case, including inner contexts.\nIn other words, outer contexts will execute as a "stand alone" test in their own instance of the spec.\nAn example should make this clear.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerTestExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerTest\n\n  init {\n    "a" should {\n      println("Hello")\n      "b" {\n        println("From")\n      }\n      "c" {\n        println("Sam")\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Do you see how we've overridden the ",(0,a.kt)("inlineCode",{parentName:"p"},"isolationMode")," function here."),(0,a.kt)("p",null,"When this is executed, the following will be printed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello\nHello\nFrom\nHello\nSam\n")),(0,a.kt)("p",null,'This is because the outer context (test "a") will be executed first. Then it will be executed again for test "b", and then again for test "c".\nEach time in a clean instance of the Spec class. This is very useful when we want to re-use variables.'),(0,a.kt)("p",null,"Another example will show how the variables are reset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerTestExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerTest\n\n  val counter = AtomicInteger(0)\n\n  init {\n    "a" should {\n      println("a=" + counter.getAndIncrement())\n      "b" {\n        println("b=" + counter.getAndIncrement())\n      }\n      "c" {\n        println("c=" + counter.getAndIncrement())\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This time, the output will be:"),(0,a.kt)("p",null,"a=0\na=0\nb=1\na=0\nc=1"),(0,a.kt)("h2",{id:"instanceperleaf"},"InstancePerLeaf"),(0,a.kt)("p",null,"The next mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"IsolationMode.InstancePerLeaf"),' where a new spec will be created for every leaf test case - so excluding inner contexts.\nIn other words, inner contexts are only executed as part of the "path" to an outer test.\nAn example should make this clear.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerLeafExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerLeaf\n\n  init {\n    "a" should {\n      println("Hello")\n      "b" {\n        println("From")\n      }\n      "c" {\n        println("Sam")\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"When this is executed, the following will be printed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello\nFrom\nHello\nSam\n")),(0,a.kt)("p",null,'This is because the outer context - test "a" - will be executed first, followed by test "b" in the same instance.\nThen a new spec will be created, and test "a" again executed, followed by test "c".'),(0,a.kt)("p",null,"Another example will show how the variables are reset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerLeafExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerLeaf\n\n  val counter = AtomicInteger(0)\n\n  init {\n    "a" should {\n      println("a=" + counter.getAndIncrement())\n      "b" {\n        println("b=" + counter.getAndIncrement())\n      }\n      "c" {\n        println("c=" + counter.getAndIncrement())\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This time, the output will be:"),(0,a.kt)("p",null,"a=0\nb=1\na=0\nc=1"),(0,a.kt)("h2",{id:"global-isolation-mode"},"Global Isolation Mode"),(0,a.kt)("p",null,"Rather than setting the isolation mode in every spec, we can set it globally in project config or via a system property."),(0,a.kt)("h3",{id:"system-property"},"System Property"),(0,a.kt)("p",null,"To set the global isolation mode at the command line, use the system property ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest.framework.isolation.mode")," with one of the values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"InstancePerTest"),(0,a.kt)("li",{parentName:"ul"},"InstancePerLeaf"),(0,a.kt)("li",{parentName:"ul"},"SingleInstance")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The values are case sensitive.")),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("p",null,"See the docs on setting up ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.2/framework/project-config.html"},"project wide config"),", and then add the isolation mode you want to be the default. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig: AbstractProjectConfig() {\n   override val isolationMode = IsolationMode.InstancePerLeaf\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Setting an isolation mode in a Spec will always override the project wide setting.")))}d.isMDXComponent=!0}}]);