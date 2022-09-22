(function(){"use strict";var t={3972:function(t,e,r){var n=r(9242),i=r(3396);const s=(0,i._)("p",null,"This app will let you produce a made-to-measure arm bracer pattern based on your own body measurements. The design assumes that you want to produce a flat sheet that can be rolled into a truncated cone, and allows you to pick just a part of the truncated cone to cover in the end.",-1),a=(0,i._)("p",null,[(0,i.Uk)("The diagram has "),(0,i._)("b",{style:{color:"lightblue"}},"construction curves"),(0,i.Uk)(", "),(0,i._)("b",{style:{color:"darkgoldenrod"}},"truncated cone surface"),(0,i.Uk)(", and "),(0,i._)("b",{style:{color:"black"}},"pattern surface"),(0,i.Uk)(".")],-1),h=(0,i._)("p",null,"To use it, measure circumference at your wrist (where the bracer starts), on your arm (where the bracer ends) and the length (along the arm) that you want your bracer to be.",-1);function o(t,e,r,n,o,u){const c=(0,i.up)("IntroBlock"),l=(0,i.up)("BracerComputing");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c,{msg:"Customizable Arm Bracer Patterns"},{default:(0,i.w5)((()=>[s,a,h])),_:1}),(0,i.Wm)(l)],64)}var u=r(7139);const c={class:"intro"};function l(t,e,r,n,s,a){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("h1",null,(0,u.zw)(r.msg),1),(0,i.WI)(t.$slots,"default")])}var d={name:"IntroBlock",props:{msg:String}},p=r(89);const m=(0,p.Z)(d,[["render",l]]);var R=m;const f=t=>((0,i.dD)("data-v-ec7b4612"),t=t(),(0,i.Cn)(),t),b={id:"controls"},w={for:"wrist"},g={for:"arm"},v={for:"length"},y=f((()=>(0,i._)("label",{for:"wrap"},"Coverage (%):",-1))),M=f((()=>(0,i._)("label",{for:"metric"},"Metric",-1)));function $(t,e,r,s,a,h){const o=(0,i.up)("BracerRender");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",b,[(0,i._)("label",w,"Wrist Circumference ("+(0,u.zw)(this.metric?"cm":"in")+"):",1),(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>a.wrist=t),name:"wrist",placeholder:"Wrist Circumference"},null,512),[[n.nr,a.wrist]]),(0,i._)("label",g,"Arm Circumference ("+(0,u.zw)(this.metric?"cm":"in")+"):",1),(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=t=>a.arm=t),name:"wrist",placeholder:"Arm Circumference"},null,512),[[n.nr,a.arm]]),(0,i._)("label",v,"Bracer Length ("+(0,u.zw)(this.metric?"cm":"in")+"):",1),(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>a.length=t),name:"length",placeholder:"Bracer Length"},null,512),[[n.nr,a.length]]),y,(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=t=>a.wrap=t),name:"wrap",placeholder:"Bracer Coverage (%)"},null,512),[[n.nr,a.wrap]]),M,(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=t=>a.metric=t),name:"metric"},null,512),[[n.e8,a.metric]])]),(0,i.Wm)(o,{R1:h.R1,R2:h.R2,fullpath:h.fullpath,bracerpath:h.bracerpath,viewBox:h.viewBox,SVGhw:h.SVGhw},null,8,["R1","R2","fullpath","bracerpath","viewBox","SVGhw"])],64)}const L=["src"],x=["href"];function Y(t,e,r,n,s,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("img",{id:"svg",src:a.svghref},null,8,L),(0,i._)("p",null,[(0,i._)("a",{href:a.svghref,download:"bracer.svg"},"Download SVG",8,x)])],64)}var _={name:"BracerRender",props:{SVGhw:Number,viewBox:String,R1:Number,R2:Number,fullpath:String,bracerpath:String},computed:{svghref(){return"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg width="30in" height="30in" viewBox="${this.viewBox}" xmlns='http://www.w3.org/2000/svg'><circle style="stroke: lightblue; fill: none; stroke-width: 0.1;" cx="0" cy="0" r="${this.R1}" /><circle style="stroke: lightblue; fill: none; stroke-width: 0.1;" cx="0" cy="0" r="${this.R2}" /><path style="stroke: darkgoldenrod; fill: none; stroke-width: 0.2;" d="${this.fullpath}" /><path style="stroke: black; fill: none; stroke-width: 0.3;" d="${this.bracerpath}" /></svg>`)}}};const k=(0,p.Z)(_,[["render",Y]]);var X=k,B={name:"BracerComputing",components:{BracerRender:X},data(){return{wrist:7.5,arm:11.5,length:12,wrap:75,metric:!1}},watch:{metric(t,e){var r=e?1/2.54:2.54;this.wrist=this.wrist*r,this.arm=this.arm*r,this.length=this.length*r}},computed:{basediameter(){return this.arm/Math.PI},topdiameter(){return this.wrist/Math.PI},deltadiameter(){return this.basediameter-this.topdiameter},scaling(){return this.basediameter/this.deltadiameter},coneside(){return this.length*this.scaling},theta(){return this.arm/this.coneside},R2(){return this.coneside},R1(){return this.coneside-this.length},thetaR(){return-Math.PI/2-this.theta/2},thetaL(){return-Math.PI/2+this.theta/2},RstartX(){return this.R1*Math.cos(this.thetaR)},RstartY(){return this.R1*Math.sin(this.thetaR)},RendX(){return this.R2*Math.cos(this.thetaR)},RendY(){return this.R2*Math.sin(this.thetaR)},LstartX(){return this.R1*Math.cos(this.thetaL)},LstartY(){return this.R1*Math.sin(this.thetaL)},LendX(){return this.R2*Math.cos(this.thetaL)},LendY(){return this.R2*Math.sin(this.thetaL)},fullpath(){return`M ${this.RstartX},${this.RstartY} L ${this.RendX},${this.RendY} A ${this.R2} ${this.R2} ${this.theta} 0 1 ${this.LendX} ${this.LendY} L ${this.LstartX},${this.LstartY} A ${this.R1} ${this.R1} ${this.theta} 0 0 ${this.RstartX} ${this.RstartY} z`},phi(){return this.theta*this.wrap/100},phiR(){return-Math.PI/2-this.phi/2},phiL(){return-Math.PI/2+this.phi/2},bRstartX(){return this.R1*Math.cos(this.phiR)},bRstartY(){return this.R1*Math.sin(this.phiR)},bRendX(){return this.R2*Math.cos(this.phiR)},bRendY(){return this.R2*Math.sin(this.phiR)},bLstartX(){return this.R1*Math.cos(this.phiL)},bLstartY(){return this.R1*Math.sin(this.phiL)},bLendX(){return this.R2*Math.cos(this.phiL)},bLendY(){return this.R2*Math.sin(this.phiL)},bracerpath(){return`M ${this.bRstartX},${this.bRstartY} L ${this.bRendX},${this.bRendY} A ${this.R2} ${this.R2} ${this.phi} 0 1 ${this.bLendX} ${this.bLendY} L ${this.bLstartX},${this.bLstartY} A ${this.R1} ${this.R1} ${this.phi} 0 0 ${this.bRstartX} ${this.bRstartY} z`},yValues(){return[this.LstartY,this.LendY,this.RstartY,this.RendY,this.LstartY,this.LendY,this.RstartY,this.RendY,this.R1*Math.sin(-Math.PI/2),this.R2*Math.sin(-Math.PI/2)]},yMin(){return Math.min(...this.yValues)},yMax(){return Math.max(...this.yValues)},yRange(){return this.yMax-this.yMin},xValues(){return[this.LstartX,this.LendX,this.RstartX,this.RendX,this.LstartX,this.LendX,this.RstartX,this.RendX]},xMin(){return Math.min(...this.xValues)},xMax(){return Math.max(...this.xValues)},xRange(){return this.xMax-this.xMin},viewBox(){return`${this.xMin-.2*this.xRange} ${this.yMin-.2*this.yRange} ${1.4*this.xRange} ${1.4*this.yRange}`},SVGhw(){return this.metric?"50cm":"30in"}}};const V=(0,p.Z)(B,[["render",$],["__scopeId","data-v-ec7b4612"]]);var C=V,I={name:"App",components:{IntroBlock:R,BracerComputing:C}};const O=(0,p.Z)(I,[["render",o]]);var P=O;(0,n.ri)(P).mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,s){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],s=t[c][2];for(var h=!0,o=0;o<n.length;o++)(!1&s||a>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[o])}))?n.splice(o--,1):(h=!1,s<a&&(a=s));if(h){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,i,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,a=n[0],h=n[1],o=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in h)r.o(h,i)&&(r.m[i]=h[i]);if(o)var c=o(r)}for(e&&e(n);u<a.length;u++)s=a[u],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(c)},n=self["webpackChunkbracer_pattern"]=self["webpackChunkbracer_pattern"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3972)}));n=r.O(n)})();
//# sourceMappingURL=app.cc10e5c0.js.map