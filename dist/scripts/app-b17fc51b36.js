/******/!function(t){function e(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var o=n(1);n(2),n(20),angular.module("beats",["components","directives","ui.router","hljs"]).config(o.routerConfig)},function(t,e){"use strict";function n(t,e){"ngInject";t.state("home",{url:"/",component:"homeComponent"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var s=n(3),i=o(s),a=n(6),l=o(a),r=n(7),d=o(r),c=n(8),u=o(c),p=n(10),m=o(p),b=n(11),v=o(b),f=n(14),h=o(f),g=n(17),y=o(g);angular.module("components",[]).component("homeComponent",i["default"]).component("cardComponent",l["default"]).component("formsComponent",d["default"]).component("tabsComponent",u["default"]).component("buttonsComponent",m["default"]).component("dropdownComponent",v["default"]).component("tooltipComponent",h["default"]).component("modalComponent",y["default"])},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),i=o(s),a={templateUrl:"app/components/home/home.html",controllerAs:"$home",controller:i["default"]};e["default"]=a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(5),a=function(){function t(){"ngInject";o(this,t),this.component="Modal",this.components=i.COMPONENTS}return s(t,[{key:"openTab",value:function(t){this.component=t}}]),t}();e["default"]=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.COMPONENTS=["Form","Tabs","Card","Buttons","Dropdown","Modal","Tooltip","Chips","Slider","Notifications"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={templateUrl:"app/components/card/card.html",controller:angular.noop};e["default"]=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={templateUrl:"app/components/forms/forms.html",controller:angular.noop};e["default"]=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(9),i=o(s),a={templateUrl:"app/components/tabs/tabs.html",controllerAs:"$tabs",controller:i["default"]};e["default"]=a},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function s(){"ngInject";n(this,s)};e["default"]=o},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={templateUrl:"app/components/buttons/buttons.html",controller:angular.noop};e["default"]=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),i=o(s),a={templateUrl:"app/components/dropdown/dropdown.html",controllerAs:"$dropdown",controller:i["default"]};e["default"]=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(13),l=o(a),r=function(){function t(){"ngInject";s(this,t),this.dropdown="eldest",this.options=[{text:"Sort by...",value:null,disabled:!0},{text:"Sort by name",value:"name",seperator:!0},{text:"Sort by oldest",value:"oldest"},{text:"Sort by eldest",value:"eldest"},{text:"Sort by category",value:"category",seperator:!0,disabled:!0}]}return i(t,[{key:"$onInit",value:function(){var t=[];t[0]=new l["default"]("#dropdown1"),t[2]=new l["default"]("#dropdown3"),t[3]=new l["default"]("#dropdown4")}},{key:"onClick",value:function(t){console.log(t)}}]),t}();e["default"]=r},function(t,e){"use strict";function n(t){this.dd=document.querySelector(t),this.placeholder=this.dd.querySelector(".title"),this.opts=this.dd.querySelectorAll("ul.menu > li:not([disabled])"),this.val="",this.index=-1,this.initEvents()}Object.defineProperty(e,"__esModule",{value:!0}),n.prototype={initEvents:function(){var t=this,e="click",n="active";t.dd.addEventListener(e,function(){return this.classList.toggle(n),!1}),t.opts.forEach(function(n,o){n.addEventListener(e,function(){t.val=n.innerText,t.index=o,t.placeholder&&(t.placeholder.innerText=t.val)})}),document.addEventListener(e,function(e){null==e.target.closest("#"+t.dd.getAttribute("id"))&&t.dd.classList.remove(n)})},getValue:function(){return this.val},getIndex:function(){return this.index}},e["default"]=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),i=o(s),a={templateUrl:"app/components/tooltip/tooltip.html",controllerAs:"$tooltip",controller:i["default"]};e["default"]=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(16),l=o(a),r=function(){function t(){"ngInject";s(this,t)}return i(t,[{key:"$onInit",value:function(){new l["default"]("#hoverMe1","Good. Now hover over next"),new l["default"]("#hoverMe2","Cool."),new l["default"]("#left","Is'nt is awesome",{direction:"left"}),new l["default"]("#top","Is'nt is awesome",{direction:"top"}),new l["default"]("#bottom","Is'nt is awesome",{direction:"bottom"}),new l["default"]("#right","Is'nt is awesome",{direction:"right"})}}]),t}();e["default"]=r},function(t,e){"use strict";function n(t,e,n){var o=document.querySelector(t);this.text=e,this.options=n||{},o.addEventListener("mouseenter",this.mouseEnter.bind(this)),o.addEventListener("mouseleave",this.mouseLeave.bind(this))}Object.defineProperty(e,"__esModule",{value:!0}),n.prototype.mouseEnter=function(t){var e=this.getTooltipElement();e.querySelector("span").innerHTML=this.text;var n=t.currentTarget.getBoundingClientRect();e.style.display="inline-block",e.classList.add(this.options.direction),"top"==this.options.direction?this.top(e,n):"left"==this.options.direction?this.left(e,n):"right"==this.options.direction?this.right(e,n):this.bottom(e,n)},n.prototype.mouseLeave=function(t){var e=this.getTooltipElement();e.removeAttribute("class"),e.style.display="none",e.querySelector("span").innerHTML=""},n.prototype.getTooltipElement=function(){var t=document.querySelector("#tooltip")||null;if(!t){t=document.createElement("span"),t.id="tooltip";var e=document.createElement("span");t.appendChild(e),document.body.appendChild(t)}return t},n.prototype.top=function(t,e){t.style.top=e.y+"px",t.style.left=e.x+e.width/2+"px"},n.prototype.bottom=function(t,e){t.style.top=e.y+e.height-5+"px",t.style.left=e.x+e.width/2+"px"},n.prototype.left=function(t,e){t.style.top=e.y+e.height/2+"px",t.style.left=e.x+5+"px"},n.prototype.right=function(t,e){t.style.top=e.y+e.height/2+"px",t.style.left=e.x+e.width-5+"px"},e["default"]=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(18),i=o(s),a={templateUrl:"app/components/modal/modal.html",controllerAs:"$modal",controller:i["default"]};e["default"]=a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(19),a=function(){function t(){"ngInject";o(this,t),this.modal1=null,this.modal2=null}return s(t,[{key:"$onInit",value:function(){var t=this;this.modal1=new i.Modal("#modal1"),this.modal2=new i.Modal("#modal2"),window.onDeleteClick=function(){t.modal1.close(),t.modal2.close()}}},{key:"openModal1",value:function(){this.modal1.show()}},{key:"openModal2",value:function(){this.modal2.show()}},{key:"alert",value:function(){(0,i.Alert)("OK. The data has been deleted !!")}},{key:"confirm",value:function(){(0,i.Confirm)("Are you sure ?",function(t){console.log(t)})}},{key:"prompt",value:function(){(0,i.Prompt)("Please provide your input",function(t){console.log(t)})}}]),t}();e["default"]=a},function(t,e){"use strict";function n(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$modal=document.querySelector(e),this.$modal instanceof HTMLElement&&(document.body.appendChild(this.$modal),this.$modal.addEventListener("click",function(e){(e.target.classList.contains("modal")||e.target.classList.contains("close"))&&t.close()}))}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="alert-modal",n=document.getElementById(e);if(!n){var o=function(t){var e=t.target.classList;(e.contains("modal")||e.contains("close"))&&n.classList.remove("visible")},s=function(t){"Enter"==t.code&&n.classList.remove("visible")};n=document.createElement("div"),n.innerHTML='<div class="modal" id="'+e+'">\n      <div class="modal-inner">\n        <div class="modal-body">'+t+'</div>\n        <div class="modal-footer">\n          <button class="close">OK</button>\n        </div>\n      </div>\n    </div>',n=n.querySelector("#"+e),n.addEventListener("click",o),document.addEventListener("keypress",s),document.body.appendChild(n)}n.classList.add("visible")}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],n="confirm-modal",o=document.getElementById(n);if(!o){var s=function(t){var n=t.target.classList;(n.contains("modal")||n.contains("close"))&&o.classList.remove("visible"),n.contains("yes")&&e(!0),n.contains("no")&&e(!1)},i=function(t){"Enter"==t.code&&(o.classList.remove("visible"),e(!0))};o=document.createElement("div"),o.innerHTML='<div class="modal" id="'+n+'">\n        <div class="modal-inner">\n          <div class="modal-body">'+t+'</div>\n          <div class="modal-footer">\n            <button class="close no">NO</button>\n            <button class="close yes">YES</button>\n          </div>\n        </div>\n      </div>',o=o.querySelector("#"+n),o.addEventListener("click",s),document.addEventListener("keypress",i),document.body.appendChild(o)}o.classList.add("visible")}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],n="prompt-modal",o=document.getElementById(n);if(!o){var s=function(t){var n=t.target.classList;(n.contains("modal")||n.contains("close"))&&o.classList.remove("visible"),n.contains("ok")&&e(o.querySelector("input").value)},i=function(t){"Enter"==t.code&&(o.classList.remove("visible"),e(o.querySelector("input").value))};o=document.createElement("div"),o.innerHTML='<div class="modal" id="'+n+'">\n          <div class="modal-inner">\n            <div class="modal-body">\n              <div>'+t+'</div>\n              <input type=\'text\' />\n            </div>\n            <div class="modal-footer">\n              <button class="close ok">OK</button>\n            </div>\n          </div>\n        </div>',o=o.querySelector("#"+n),o.addEventListener("click",s),document.addEventListener("keypress",i),document.body.appendChild(o)}o.classList.add("visible"),o.querySelector("input").focus()}Object.defineProperty(e,"__esModule",{value:!0}),e.Modal=n,e.Alert=o,e.Confirm=s,e.Prompt=i,n.prototype.show=function(){this.$modal instanceof HTMLElement&&this.$modal.classList.add("visible")},n.prototype.close=function(){this.$modal instanceof HTMLElement&&this.$modal.classList.remove("visible")}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var s=n(21),i=o(s),a=n(22),l=o(a);angular.module("directives",[]).directive("dropdown",function(){return new i["default"]}).controller("dropdownController",l["default"])},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function s(){"ngInject";n(this,s),this.restrict="E",this.templateUrl="app/directives/dropdown/dropdown.template.html",this.scope={placeholder:"@",ngModel:"=",options:"=",onOptionClick:"&"},this.controller="dropdownController",this.controllerAs="$ctrl",this.bindToController=!0};e["default"]=o},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=function(){function t(){"ngInject";n(this,t),this.isOptionsVisible=!1}return o(t,[{key:"toggleMenu",value:function(){this.isOptionsVisible=!this.isOptionsVisible}},{key:"optionClick",value:function(t){this.ngModel=t.value||t.text,this.onOptionClick({option:t})}},{key:"getValue",value:function(t){var e=null,n=!0,o=!1,s=void 0;try{for(var i,a=this.options[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;if(l.value==t){e=l.text;break}}}catch(r){o=!0,s=r}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw s}}return e}}]),t}();e["default"]=s}]),angular.module("beats").run(["$templateCache",function(t){t.put("app/components/buttons/buttons.html",'<div class="container box-shadow"><button class=primary type=submit><span class=text>Submit</span></button> <button class=secondary type=reset><span class=text>Reset</span></button> <button type=button><span class=text>Cancel</span></button></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit><span class=text>Submit</span></button> <button class=secondary type=reset><span class=text>Reset</span></button> <button type=button><span class=text>Cancel</span></button></div></div><div class="container box-shadow"><button class=primary type=submit><span class=text>Like </span><span class=icon ng-include="\'assets/icons/thumbs-up.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span></button> <button class=primary type=submit><span class=icon ng-include="\'assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span> <span class=icon ng-include="\'assets/icons/bar-chart.svg\'"></span></button></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit><span class=text>Like </span><span class=icon ng-include="\'assets/icons/thumbs-up.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span></button> <button class=primary type=submit><span class=icon ng-include="\'assets/icons/chevron-down.svg\'"></span> <span class=text>Submit</span> <span class=icon ng-include="\'assets/icons/bar-chart.svg\'"></span></button></div></div><div class="container box-shadow"><button class=primary type=submit><span class=icon ng-include="\'assets/icons/thumbs-up.svg\'"></span></button> <button class=secondary type=submit><span class=icon ng-include="\'assets/icons/thumbs-down.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'assets/icons/trash.svg\'"></span></button></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit disabled><span class=icon ng-include="\'assets/icons/thumbs-up.svg\'"></span></button> <button class=secondary type=submit><span class=icon ng-include="\'assets/icons/thumbs-down.svg\'"></span></button> <button class=primary type=submit><span class=icon ng-include="\'assets/icons/trash.svg\'"></span></button></div></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit>1</button> <button class=primary type=submit>2</button> <button class=primary type=submit>3</button> <button class=primary type=submit>4</button> <button class=primary type=submit>5</button> <button class=primary type=submit>6</button></div></div>'),t.put("app/components/card/card.html","<div class=flex><div class=card><img src=../../../assets/images/wine-bg.jpg><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></div></div><div class=card><img src=../../../assets/images/wedding-bg.jpg><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></div></div><div class=card><img src=../../../assets/images/coffee-bg.jpg><div class=body><div class=title>Coffee Time</div><div class=subtitle>Good Morning</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></div></div></div><div class=flex><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wine-bg.jpg><div class=body><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button><span class=icon ng-include=\"'assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wedding-bg.jpg><div class=body><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button><span class=icon ng-include=\"'assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Coffee Time</div><div class=subtitle>Good Morning</div></div><img src=../../../assets/images/coffee-bg.jpg><div class=body><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button><span class=icon ng-include=\"'assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'assets/icons/more-horizontal.svg'\"></span></button></div></div></div><div class=flex><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wine-bg.jpg><div class=body><button><span class=icon ng-include=\"'assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Meeting</div><div class=subtitle>19 September, 2018</div></div><img src=../../../assets/images/wedding-bg.jpg><div class=body><button><span class=icon ng-include=\"'assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'assets/icons/more-horizontal.svg'\"></span></button></div></div><div class=card><div class=body><div class=title>Coffee Time</div><div class=subtitle>Good Morning</div></div><img src=../../../assets/images/coffee-bg.jpg><div class=body><button><span class=icon ng-include=\"'assets/icons/thumbs-up.svg'\"></span></button> <button><span class=icon ng-include=\"'assets/icons/thumbs-down.svg'\"></span></button> <button class=right><span class=icon ng-include=\"'assets/icons/more-horizontal.svg'\"></span></button></div></div></div><div class=card><div class=body><div class=title>Invitation Card</div><div class=subtitle>Josh webs Jemmu, Mountain View, California</div><div class=text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div><button class=primary type=submit><span class=text>Submit</span></button> <button class=\"secondary right\" type=reset><span class=text>Reset</span></button></div></div><!-- \nhttps://dribbble.com/shots/2121350-Delivery-Card-UX-UI-App-Interface\n\nhttps://dribbble.com/shots/2466585-Daily-UI-challenge-037-Weather -->"),t.put("app/components/dropdown/dropdown.html",'<div class="container box-shadow"><dropdown placeholder="Sort by..." ng-model=$dropdown.dropdown options=$dropdown.options on-option-click=$dropdown.onClick(option)></dropdown></div><div class=flex><div class="container box-shadow"><div id=dropdown1 class=dropdown><div class=title>Sort by...</div><ul class=menu><li disabled>Sort by...</li><li class=seperator>Sort by name</li><li>Sort by oldest</li><li>Sort by eldest</li><li disabled class=seperator>Sort be category</li></ul></div></div><div class="container box-shadow"><div id=dropdown3 class="dropdown no-label direction-left"><span class=icon ng-include="\'assets/icons/more-horizontal.svg\'"></span><!-- <div class="title">Sort by...</div> --><ul class=menu><li disabled>Sort by...</li><li class=seperator>Sort by name</li><li>Sort by oldest</li><li>Sort by eldest</li><li disabled class=seperator>Sort be category</li></ul></div></div><div class="container box-shadow"><div id=dropdown4 class="dropdown no-label direction-right"><span class=icon ng-include="\'assets/icons/more-horizontal.svg\'"></span><!-- <div class="title">Sort by...</div> --><ul class=menu><li disabled>Sort by...</li><li class=seperator>Sort by name</li><li>Sort by oldest</li><li>Sort by eldest</li><li disabled class=seperator>Sort be category</li></ul></div></div></div>'),t.put("app/components/forms/forms.html",'<form class="container box-shadow"><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required><div class="msg color-info">We\'ll never share your email with anyone else.</div></div><pre hljs>\n    <div class=form-group>\n      <label for=email>Email address</label>\n      <input type=email id=email placeholder="Enter email" required>\n      <div class="msg color-info">We\'ll never share your email with anyone else.</div>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=password>Password</label><input type=password id=password placeholder="Enter password"></div><pre hljs>\n    <div class=form-group>\n      <label for=password>Password</label>\n      <input type=password id=password placeholder="Enter password">\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=age>Age group</label><select id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div><pre hljs>\n    <div class=form-group>\n      <label for=age>Age group</label>\n      <select id=age>\n        <option>0 - 20 Years</option>\n        <option>20 - 40 Years</option>\n        <option>40 - 60 Years</option>\n        <option>60 - 80 Years</option>\n        <option>> 100 Years</option>\n      </select>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=age>Multi age group</label><select multiple id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select><div class="msg color-error">Make sure that age is correct.</div></div><pre hljs>\n    <div class=form-group>\n      <label for=age>Multi age group</label>\n      <select multiple id=age>\n        <option>0 - 20 Years</option>\n        <option>20 - 40 Years</option>\n        <option>40 - 60 Years</option>\n        <option>60 - 80 Years</option>\n        <option>> 100 Years</option>\n      </select>\n      <div class="msg color-error">Make sure that age is correct.</div>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=age>Age group</label><select id=age class=material><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div><pre hljs>\n    <div class=form-group>\n      <label for=age>Age group</label>\n      <select id=age class=material>\n        <option>0 - 20 Years</option>\n        <option>20 - 40 Years</option>\n        <option>40 - 60 Years</option>\n        <option>60 - 80 Years</option>\n        <option>> 100 Years</option>\n      </select>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=textarea>Example Textarea</label><textarea id=textarea></textarea></div><pre hljs>\n    <div class=form-group>\n      <label for=textarea>Example Textarea</label>\n      <textarea id=textarea></textarea>\n    </div>\n  </pre></form><form class="container box-shadow"><div class="form-group inline"><label for=range>Range Picker</label><input type=range id=range></div><pre hljs>\n    <div class="form-group inline">\n      <label for=range>Range Picker</label>\n      <input type=range id=range>\n    </div>\n  </pre></form><form class="container box-shadow"><div class="form-group inline"><label for=question>Faviourite Question ?</label><input type=text id=question placeholder="Enter question"></div><pre hljs>\n    <div class="form-group inline">\n      <label for=question>Faviourite Question ?</label>\n      <input type=text id=question placeholder="Enter question">\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><input type=checkbox id=checkbox><label for=checkbox>Agree with terms and conditions ?</label></div><pre hljs>\n    <div class=form-group>\n      <input type=checkbox id=checkbox>\n      <label for=checkbox>Agree with terms and conditions ?</label>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><input type=radio name=radio id=radio1><label for=radio1>Agree with terms and conditions ?</label></div><pre hljs>\n    <div class=form-group>\n      <input type=radio name=radio id=radio1>\n      <label for=radio1>Agree with terms and conditions ?</label>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><input type=radio name=radio id=radio2><label for=radio2>Agree with terms and conditions ?</label></div><pre hljs>\n    <div class=form-group>\n      <input type=radio name=radio id=radio2>\n      <label for=radio2>Agree with terms and conditions ?</label>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=email>Email address</label><input class=material type=email id=email placeholder="Enter email" required></div><pre hljs>\n    <div class=form-group>\n      <label for=email>Email address</label>\n      <input class=material type=email id=email placeholder="Enter email" required>\n    </div>\n  </pre></form><form class="container box-shadow"><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required></div><pre hljs>\n    <div class=form-group>\n      <label for=email>Email address</label>\n      <input type=email id=email placeholder="Enter email" required>\n    </div>\n  </pre></form><form class="container box-shadow"><button class=primary type=submit>Submit</button> <button class=secondary type=reset>Reset</button> <button class=right type=button>Cancel</button><pre hljs>\n    <button class=primary type=submit>\n      Submit\n    </button>\n\n    <button class=secondary type=reset>\n      Reset\n    </button>\n\n    <button class=right type=button>\n      Cancel\n    </button>\n  </pre></form>'),t.put("app/components/home/home.html",'<div><h1 class=beats-header><span ng-include="\'assets/icons/beats.svg\'"></span> Beats.css <span class=github><a href=https://github.com/ashvin777/beats target=_new><span ng-include="\'assets/icons/github-logo.svg\'"></span> <span class=version>v1.0 - pre-alpha</span> </a></span><span class=profile><a href=https://github.com/ashvin777/ target=_new><span class=version>@ashvin</span></a></span></h1><div class="tabs beats-subheader"><ul class=links><li class=link ng-repeat="cmp in $home.components" ng-click=$home.openTab(cmp) ng-class="{ active : $home.component == cmp }">{{cmp}}</li></ul></div><div class=beats-body><div class=tabs><div class=content><forms-component ng-show="$home.component == \'Form\'"></forms-component><tabs-component ng-show="$home.component == \'Tabs\'"></tabs-component><card-component ng-show="$home.component == \'Card\'"></card-component><buttons-component ng-show="$home.component == \'Buttons\'"></buttons-component><dropdown-component ng-show="$home.component == \'Dropdown\'"></dropdown-component><tooltip-component ng-show="$home.component == \'Tooltip\'"></tooltip-component><modal-component ng-show="$home.component == \'Modal\'"></modal-component></div></div></div></div>'),t.put("app/components/modal/modal.html","<button class=primary ng-click=$modal.openModal1()>Open Modal 1</button> <button class=primary ng-click=$modal.openModal2()>Open Modal 2</button> <button class=primary ng-click=$modal.alert()>Alert</button> <button class=primary ng-click=$modal.confirm()>Confirm</button> <button class=primary ng-click=$modal.prompt()>Prompt</button><div class=modal id=modal1><div class=modal-inner><div class=modal-title>Delete this data file?</div><div class=modal-body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div><div class=modal-footer><button class=close>CANCEL</button> <button onclick=window.onDeleteClick()>DELETE</button></div></div></div><div class=modal id=modal2><div class=modal-inner><div class=modal-title>Modal 2</div><div class=modal-body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div><div class=modal-footer><button class=close>CANCEL</button> <button onclick=window.onDeleteClick()>DELETE</button></div></div></div>"),
t.put("app/components/stamp/stamp.html","https://dribbble.com/shots/3946629-Birds-Stamps-collection https://dribbble.com/shots/2532114-Onboarding-Illustrations https://dribbble.com/shots/2466585-Daily-UI-challenge-037-Weather https://dribbble.com/shots/2121350-Delivery-Card-UX-UI-App-Interface https://dribbble.com/search?q=card"),t.put("app/components/tabs/tabs.html",'<form class="container box-shadow"><div class=tabs><ul class=links><li class="link active">Tab 1</li><li class=link>Tab 2</li><li class=link>Tab 3</li></ul><div class=content></div></div><div hljs><div class=tabs><ul class=links><li class="link active">Tab 1</li><li class=link>Tab 2</li><li class=link>Tab 3</li></ul><div class=content><!-- Use JS Logics to hide and show specific tabs --><div class="tab tab1"></div><div class="tab tab2"></div><div class="tab tab3"></div></div></div></div></form>'),t.put("app/components/tooltip/tooltip.html","<div class=flex><div class=\"container box-shadow\"><button id=hoverMe1 class=primary>Hover me 1!!</button> <button id=hoverMe2 class=primary>Hover me 2!!</button></div><div class=\"container box-shadow\"><button id=top class=primary>Top</button> <button id=bottom class=primary>Bottom</button> <button id=left class=primary>Left</button> <button id=right class=primary>Right</button></div></div><pre class=\"container box-shadow\" hljs>\nnew Tooltip('#hoverMe1', 'Good. Now hover over next');\n\nnew Tooltip('#hoverMe2', 'Cool.');\n\nnew Tooltip('#left', 'Is\\'nt it awesome', {\n  direction: 'left'\n});\n\nnew Tooltip('#top', 'Is\\'nt it awesome', {\n  direction: 'top'\n});\n\nnew Tooltip('#bottom', 'Is\\'nt it awesome', {\n  direction: 'bottom'\n});\n\nnew Tooltip('#right', 'Is\\'nt it awesome', {\n  direction: 'right'\n});\n</pre>"),t.put("app/directives/dropdown/dropdown.template.html",'<div class=dropdown ng-click=$ctrl.toggleMenu() ng-class="{ active : $ctrl.isOptionsVisible }"><div ng-if=$ctrl.placeholder class=title>{{$ctrl.getValue($ctrl.ngModel) || $ctrl.placeholder}}</div><ul class=options ng-if=$ctrl.isOptionsVisible><li ng-repeat="option in $ctrl.options" ng-click=$ctrl.optionClick(option) ng-disabled=option.disabled ng-class="{ seperator : option.seperator }">{{option.text}}</li></ul></div>')}]);
//# sourceMappingURL=../maps/scripts/app-b17fc51b36.js.map