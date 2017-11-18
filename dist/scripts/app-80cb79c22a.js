/******/!function(e){function o(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";var a=t(1);t(2),angular.module("beats",["components","ui.router","hljs"]).config(a.routerConfig)},function(e,o){"use strict";function t(e,o){"ngInject";e.state("home",{url:"/",component:"homeComponent"}),o.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(o,"__esModule",{value:!0}),o.routerConfig=t},function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=t(3),l=a(i),n=t(5),s=a(n),r=t(6),d=a(r),c=t(7),p=a(c),u=t(9),m=a(u);angular.module("components",[]).component("homeComponent",l["default"]).component("cardComponent",s["default"]).component("formsComponent",d["default"]).component("tabsComponent",p["default"]).component("buttonsComponent",m["default"])},function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(4),l=a(i),n={templateUrl:"app/components/home/home.html",controllerAs:"$home",controller:l["default"]};o["default"]=n},function(e,o){"use strict";function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var a=function(){function e(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(o,t,a){return t&&e(o.prototype,t),a&&e(o,a),o}}(),i=function(){function e(){"ngInject";t(this,e),this.index=0}return a(e,[{key:"openTab",value:function(e){this.index=e}}]),e}();o["default"]=i},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t={templateUrl:"app/components/card/card.html",controller:angular.noop};o["default"]=t},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t={templateUrl:"app/components/forms/forms.html",controller:angular.noop};o["default"]=t},function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(8),l=(a(i),{templateUrl:"app/components/tabs/tabs.html",controller:angular.noop});o["default"]=l},function(e,o){"use strict";function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var a=function i(){"ngInject";t(this,i)};o["default"]=a},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t={templateUrl:"app/components/buttons/buttons.html",controller:angular.noop};o["default"]=t}]),angular.module("beats").run(["$templateCache",function(e){e.put("app/components/buttons/buttons.html",'<div class="container box-shadow"><button class=primary type=submit>Submit</button> <button class=secondary type=reset>Reset</button> <button class=right type=button>Cancel</button></div><div class="container box-shadow"><div class=btn-group><button class=primary type=submit>Submit</button> <button class="primary icon-only"><span ng-include="\'../../assets/icons/chevron-down.svg\'"></span></button> <button class=secondary type=button>Cancel</button></div></div>'),e.put("app/components/card/card.html","<p>Card</p><div><div class=panel><div class=panel-header>Welcome Event !!</div><div class=panel-media></div><div class=panel-body></div><div class=panel-footer></div></div></div>https://dribbble.com/shots/2121350-Delivery-Card-UX-UI-App-Interface https://dribbble.com/shots/2466585-Daily-UI-challenge-037-Weather"),e.put("app/components/forms/forms.html",'<form class="container box-shadow"><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required><div class="msg color-info">We\'ll never share your email with anyone else.</div></div><div hljs><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required><div class="msg color-info">We\'ll never share your email with anyone else.</div></div></div><div class=form-group><label for=password>Password</label><input type=password id=password placeholder="Enter password"></div><pre hljs>\n    <div class=form-group>\n      <label for=password>Password</label>\n      <input type=password id=password placeholder="Enter password">\n    </div>\n  </pre><div class=form-group><label for=age>Age group</label><select id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div><div hljs><div class=form-group><label for=age>Age group</label><select id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div></div><div class=form-group><label for=age>Multi age group</label><select multiple id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select><div class="msg color-error">Make sure that age is correct.</div></div><div hljs><div class=form-group><label for=age>Multi age group</label><select multiple id=age><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select><div class="msg color-error">Make sure that age is correct.</div></div></div><div class=form-group><label for=age>Age group</label><select id=age class=material><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div><div hljs><div class=form-group><label for=age>Age group</label><select id=age class=material><option>0 - 20 Years</option><option>20 - 40 Years</option><option>40 - 60 Years</option><option>60 - 80 Years</option><option>> 100 Years</option></select></div></div><div class=form-group><label for=textarea>Example Textarea</label><textarea id=textarea></textarea></div><div hljs><div class=form-group><label for=textarea>Example Textarea</label><textarea id=textarea></textarea></div></div><div class="form-group inline"><label for=range>Range Picker</label><input type=range id=range></div><div hljs><div class="form-group inline"><label for=range>Range Picker</label><input type=range id=range></div></div><div class="form-group inline"><label for=question>Faviourite Question ?</label><input type=text id=question placeholder="Enter question"></div><div hljs><div class="form-group inline"><label for=question>Faviourite Question ?</label><input type=text id=question placeholder="Enter question"></div></div><div class=form-group><input type=checkbox id=checkbox><label for=checkbox>Agree with terms and conditions ?</label></div><div hljs><div class=form-group><input type=checkbox id=checkbox><label for=checkbox>Agree with terms and conditions ?</label></div></div><div class=form-group><input type=radio name=radio id=radio1><label for=radio1>Agree with terms and conditions ?</label></div><div hljs><div class=form-group><input type=radio name=radio id=radio1><label for=radio1>Agree with terms and conditions ?</label></div></div><div class=form-group><input type=radio name=radio id=radio2><label for=radio2>Agree with terms and conditions ?</label></div><div hljs><div class=form-group><input type=radio name=radio id=radio2><label for=radio2>Agree with terms and conditions ?</label></div></div><div class=form-group><label for=email>Email address</label><input class=material type=email id=email placeholder="Enter email" required></div><div hljs><div class=form-group><label for=email>Email address</label><input class=material type=email id=email placeholder="Enter email" required></div></div><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required></div><div hljs><div class=form-group><label for=email>Email address</label><input type=email id=email placeholder="Enter email" required></div></div><button class=primary type=submit>Submit</button> <button class=secondary type=reset>Reset</button> <button class=right type=button>Cancel</button><div hljs><button class=primary type=submit>Submit</button> <button class=secondary type=reset>Reset</button> <button class=right type=button>Cancel</button></div></form>'),e.put("app/components/home/home.html",'<div><h1 class=custom-title>Beats.css</h1><div class=tabs><ul class=links><li class=link ng-click=$home.openTab(0) ng-class="{ active : $home.index == 0 }">Form</li><li class=link ng-click=$home.openTab(1) ng-class="{ active : $home.index == 1 }">Tabs</li><li class=link ng-click=$home.openTab(2) ng-class="{ active : $home.index == 2 }">Card</li><li class=link ng-click=$home.openTab(3) ng-class="{ active : $home.index == 3 }">Buttons</li></ul><div class=content><forms-component ng-show="$home.index == 0"></forms-component><tabs-component ng-show="$home.index == 1"></tabs-component><card-component ng-show="$home.index == 2"></card-component><buttons-component ng-show="$home.index == 3"></buttons-component></div></div></div>'),e.put("app/components/stamp/stamp.html","https://dribbble.com/shots/3946629-Birds-Stamps-collection https://dribbble.com/shots/2532114-Onboarding-Illustrations https://dribbble.com/shots/2466585-Daily-UI-challenge-037-Weather https://dribbble.com/shots/2121350-Delivery-Card-UX-UI-App-Interface https://dribbble.com/search?q=card"),e.put("app/components/tabs/tabs.html",'<form class="container box-shadow"><div class=tabs><ul class=links><li class="link active">Tab 1</li><li class=link>Tab 2</li><li class=link>Tab 3</li></ul><div class=content></div></div><div hljs><div class=tabs><ul class=links><li class="link active">Tab 1</li><li class=link>Tab 2</li><li class=link>Tab 3</li></ul><div class=content><!-- Use JS Logics to hide and show specific tabs --><div class="tab tab1"></div><div class="tab tab2"></div><div class="tab tab3"></div></div></div></div></form>')}]);
//# sourceMappingURL=../maps/scripts/app-80cb79c22a.js.map
