"use strict";define("mobiledoc-kit-demo/app",["exports","ember","ember/resolver","ember/load-initializers","mobiledoc-kit-demo/config/environment"],function(e,t,o,d,n){var r;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:o["default"]}),d["default"](r,n["default"].modulePrefix),e["default"]=r}),define("mobiledoc-kit-demo/components/app-version",["exports","ember-cli-app-version/components/app-version","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=o["default"].APP,n=d.name,r=d.version;e["default"]=t["default"].extend({version:r,name:n})}),define("mobiledoc-kit-demo/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-component-card",["exports","ember-mobiledoc-editor/components/mobiledoc-component-card/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-dom-renderer",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/dom","ember-mobiledoc-dom-renderer"],function(e,t,o,d){var n=new d["default"]({cards:o["default"]});e["default"]=t["default"].Component.extend({didRender:function(){var e=this.get("mobiledoc");if(e){this._teardownRender&&(this._teardownRender(),this._teardownRender=null);var t=this.$();t.empty();try{var o=n.render(e),d=o.result,r=o.teardown;t.append(d),this._teardownRender=r}catch(i){console.error(i);var d=document.createTextNode(i.message);t.append(d)}}}})}),define("mobiledoc-kit-demo/components/mobiledoc-editor",["exports","ember-mobiledoc-editor/components/mobiledoc-editor/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-html-renderer",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/html","ember-mobiledoc-html-renderer"],function(e,t,o,d){var n=new d["default"]({cards:o["default"]});e["default"]=t["default"].Component.extend({didRender:function(){var e=this.get("mobiledoc");if(e){var t=this.$();t.empty();try{var o=n.render(e),d=o.result;t.text(d)}catch(r){console.error(r);var i=document.createTextNode(r.message);t.append(i)}}}})}),define("mobiledoc-kit-demo/components/mobiledoc-link-button",["exports","ember-mobiledoc-editor/components/mobiledoc-link-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-link-prompt",["exports","ember-mobiledoc-editor/components/mobiledoc-link-prompt/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-markup-button",["exports","ember-mobiledoc-editor/components/mobiledoc-markup-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-section-button",["exports","ember-mobiledoc-editor/components/mobiledoc-section-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-text-renderer",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/text","ember-mobiledoc-text-renderer"],function(e,t,o,d){var n=new d["default"]({cards:o["default"]}),r=function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")};e["default"]=t["default"].Component.extend({didRender:function(){var e=this.get("mobiledoc");if(e){this._teardownRender&&(this._teardownRender(),this._teardownRender=null);var t=this.$();t.empty();try{var o=n.render(e),d=o.result,i=o.teardown;d=r(d),t.html(d),this._teardownRender=i}catch(a){console.error(a);var l=document.createTextNode(a.message);t.append(l)}}}})}),define("mobiledoc-kit-demo/components/mobiledoc-toolbar",["exports","ember-mobiledoc-editor/components/mobiledoc-toolbar/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/render-mobiledoc",["exports","ember-mobiledoc-dom-renderer/components/render-mobiledoc"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/tether-to-selection",["exports","ember-mobiledoc-editor/components/tether-to-selection/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("mobiledoc-kit-demo/controllers/index",["exports","ember","mobiledoc-kit-demo/mobiledocs/index"],function(e,t,o){var d=t["default"].$;e["default"]=t["default"].Controller.extend({init:function(){this._super.apply(this,arguments);var e=o["default"].simple;this.set("mobiledoc",e),this.set("editedMobiledoc",e),this.set("rendererName","dom")},actions:{changeMobiledoc:function(){var e=d("#select-mobiledoc"),t=e.val(),n=o["default"][t];this.set("mobiledoc",n),this.set("editedMobiledoc",n)},setRenderer:function(e){this.set("rendererName",e)},didEdit:function(e){this.set("editedMobiledoc",e)}}})}),define("mobiledoc-kit-demo/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("mobiledoc-kit-demo/helpers/format-object",["exports","ember"],function(e,t){function o(e){var t=d(e,1),o=t[0];return JSON.stringify(o,null,"  ")}e.formatObject=o;var d=function(){function e(e,t){var o=[],d=!0,n=!1,r=void 0;try{for(var i,a=e[Symbol.iterator]();!(d=(i=a.next()).done)&&(o.push(i.value),!t||o.length!==t);d=!0);}catch(l){n=!0,r=l}finally{try{!d&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=t["default"].Helper.helper(o)}),define("mobiledoc-kit-demo/helpers/hash",["exports","ember-mobiledoc-editor/helpers/hash"],function(e,t){e["default"]=t["default"],e.hash=t.hash}),define("mobiledoc-kit-demo/helpers/in-array",["exports","ember-mobiledoc-editor/helpers/in-array"],function(e,t){e["default"]=t["default"],e.inArray=t.inArray}),define("mobiledoc-kit-demo/helpers/mobiledoc-cards-list",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/dom"],function(e,t,o){function d(){return o["default"]}e.mobiledocCardsList=d,e["default"]=t["default"].Helper.helper(d)}),define("mobiledoc-kit-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=o["default"].APP,n=d.name,r=d.version;e["default"]={name:"App Version",initialize:t["default"](n,r)}}),define("mobiledoc-kit-demo/initializers/export-application-global",["exports","ember","mobiledoc-kit-demo/config/environment"],function(e,t,o){function d(){var e=arguments[1]||arguments[0];if(o["default"].exportApplicationGlobal!==!1){var d,n=o["default"].exportApplicationGlobal;d="string"==typeof n?n:t["default"].String.classify(o["default"].modulePrefix),window[d]||(window[d]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[d]}}))}}e.initialize=d,e["default"]={name:"export-application-global",initialize:d}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/codemirror",["exports"],function(e){function t(e,t){var o=arguments.length<=2||void 0===arguments[2]?!0:arguments[2],d=arguments.length<=3||void 0===arguments[3]?function(){}:arguments[3];setTimeout(function(){var n=$("<textarea>"+t+"</textarea>").appendTo(e),r={mode:"javascript"};o&&(r.readOnly="nocursor");var i=CodeMirror.fromTextArea(n[0],r);d(i)})}var o="let x = 3;";e["default"]={name:"codemirror-card",type:"dom",render:function(e){var d=e.env,n=(e.options,e.payload),r=$("<div></div>")[0],i=n.code||o;d.isInEditor&&$("<button>Edit</button>").appendTo(r).on("click",d.edit);var a=!0;return t(r,i,a),r},edit:function(e){var d=e.env,n=(e.options,e.payload),r=$("<div></div>")[0],i=n.code||o,a=$("<button>Save</button>").appendTo(r),l=!1,c=function(e){a.on("click",function(){return d.save({code:e.getValue()})})};return t(r,i,l,c),r}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/image",["exports"],function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?o:arguments[0];return $("<div></div>").append('<img src="'+e+'">')[0]}var o="http://placekitten.com/200/75";e["default"]={name:"image-card",type:"dom",render:function(e){var o=e.env,d=e.payload,n=t(d.src),r=o.isInEditor;return r&&$("<button>Change</button>").appendTo(n).on("click",o.edit),n},edit:function(e){function o(e){var t=new FileReader,o=e.target.files[0];t.onloadend=function(){d.save({src:t.result})},t.readAsDataURL(o)}var d=e.env,n=e.payload,r=t(n.src);return $('<input type="file">').appendTo(r).on("change",o),$("<button>Save</button>").appendTo(r).on("click",function(){d.save(n)}),r}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/input",["exports","ember"],function(e,t){var o=t["default"].$;e["default"]={name:"input-card",type:"dom",render:function(e){var t=e.env,d=e.payload,n="I am in display mode";d.name&&(n="Hello, "+d.name+"!");var r=o("<div>"+n+"</div>"),i=o("<button>Edit</button>");return i.on("click",t.edit),t.edit&&r.append(i),r[0]},edit:function(e){var t=e.env,d=o("<div>What is your name?</div>");d.innerHTML="What is your name?";var n=o('<input placeholder="Enter your name...">'),r=o("<button>Save</button>");return r.on("click",function(){var e=n.val();t.save({name:e})}),d.append(n),d.append(r),d[0]}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/selfie",["exports","ember"],function(e,t){var o=t["default"].$;e["default"]={name:"selfie-card",type:"dom",render:function(e){var t=e.env,d=e.payload,n=o("<div></div>")[0],r=t.isInEditor;return d.src?o('<div><img src="'+d.src+'"><br><div>You look nice today.</div>'+(r?"<div><button id='go-edit'>Take a better picture</button></div>":"")+"</div>").appendTo(n):o("<div>Hello there!"+(r?"<button id='go-edit'>Click here to take a picture</button>":"")+"</div>").appendTo(n),r&&setTimeout(function(){o("#go-edit").on("click",t.edit)}),n},edit:function(e){var t=e.env,d=o("<div></div>")[0];return o('<div><video id="video" width="400" height="300" autoplay></video><button id="snap">Snap Photo</button><canvas id="canvas" width="400" height="300"></canvas></div>').appendTo(d),setTimeout(function(){var e=document.getElementById("canvas"),d=e.getContext("2d"),n=document.getElementById("video"),r={video:!0},i=function(){return alert("error getting video feed")};navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getMedia(r,function(r){var i=void 0;navigator.mozGetUserMedia?n.mozSrcObject=r:(i=window.URL||window.webkitURL,n.src=i.createObjectURL(r),n.play()),o("#snap").click(function(){d.drawImage(n,0,0,400,300);var o=e.toDataURL("image/png");t.save({src:o})})},i)}),d}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom/simple",["exports","ember"],function(e,t){var o=t["default"].$;e["default"]={name:"simple-card",type:"dom",render:function(e){var t=e.env,d=document.createElement("div"),n=document.createElement("span");n.innerHTML="Hello, world",d.appendChild(n);var r=o("<button>Remove card</button>");return r.on("click",t.remove),d}}}),define("mobiledoc-kit-demo/mobiledoc-cards/dom",["exports","mobiledoc-kit-demo/mobiledoc-cards/dom/input","mobiledoc-kit-demo/mobiledoc-cards/dom/simple","mobiledoc-kit-demo/mobiledoc-cards/dom/selfie","mobiledoc-kit-demo/mobiledoc-cards/dom/image","mobiledoc-kit-demo/mobiledoc-cards/dom/codemirror"],function(e,t,o,d,n,r){e["default"]=[t["default"],o["default"],d["default"],n["default"],r["default"]]}),define("mobiledoc-kit-demo/mobiledoc-cards/html/codemirror",["exports"],function(e){e["default"]={name:"codemirror-card",type:"html",render:function(e){var t=e.payload;return t.code?"<code>"+t.code+"</code>":void 0}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/image",["exports"],function(e){var t="http://placekitten.com/200/75";e["default"]={name:"image-card",type:"html",render:function(e){var o=e.payload;return'<img src="'+(o.src||t)+'">'}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/input",["exports"],function(e){e["default"]={name:"input-card",type:"html",render:function(e){var t=e.payload;return"Hello, "+(t.name||"unknown")+"!"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/selfie",["exports"],function(e){e["default"]={name:"selfie-card",type:"html",render:function(e){var t=(e.env,e.payload);return'<img src="'+t.src+'">'}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html/simple",["exports"],function(e){e["default"]={name:"simple-card",type:"html",render:function(){return"Hello, world"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/html",["exports","mobiledoc-kit-demo/mobiledoc-cards/html/input","mobiledoc-kit-demo/mobiledoc-cards/html/selfie","mobiledoc-kit-demo/mobiledoc-cards/html/simple","mobiledoc-kit-demo/mobiledoc-cards/html/image","mobiledoc-kit-demo/mobiledoc-cards/html/codemirror"],function(e,t,o,d,n,r){e["default"]=[t["default"],o["default"],d["default"],n["default"],r["default"]]}),define("mobiledoc-kit-demo/mobiledoc-cards/text/codemirror",["exports"],function(e){e["default"]={name:"codemirror-card",type:"text",render:function(e){var t=e.payload;return t.code?"[code] "+t.code:void 0}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/image",["exports"],function(e){e["default"]={name:"image-card",type:"text",render:function(){return"[image]"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/input",["exports"],function(e){e["default"]={name:"input-card",type:"text",render:function(e){var t=e.payload;return"Hello, "+(t.name||"unknown")+"!"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/selfie",["exports"],function(e){e["default"]={name:"selfie-card",type:"text",render:function(){return"[ :) ]"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text/simple",["exports"],function(e){e["default"]={name:"simple-card",type:"text",render:function(){return"Hello, world"}}}),define("mobiledoc-kit-demo/mobiledoc-cards/text",["exports","mobiledoc-kit-demo/mobiledoc-cards/text/codemirror","mobiledoc-kit-demo/mobiledoc-cards/text/simple","mobiledoc-kit-demo/mobiledoc-cards/text/input","mobiledoc-kit-demo/mobiledoc-cards/text/image","mobiledoc-kit-demo/mobiledoc-cards/text/selfie"],function(e,t,o,d,n,r){e["default"]=[t["default"],o["default"],d["default"],n["default"],r["default"]]}),define("mobiledoc-kit-demo/mobiledoc-titleize/helper",["exports","ember-mobiledoc-editor/helpers/mobiledoc-titleize"],function(e,t){e["default"]=t["default"],e.mobiledocTitleize=t.mobiledocTitleize}),define("mobiledoc-kit-demo/mobiledocs/index",["exports"],function(e){e["default"]={codemirrorCard:{version:"0.2.0",sections:[[],[[1,"h2",[[[],0,"Codemirror"]]],[10,"codemirror-card"]]]},empty:{version:"0.2.0",sections:[[],[]]},inputCard:{version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"Input Card"]]],[10,"input-card"],[1,"P",[[[],0,"Text after the card."]]]]]},imageCard:{version:"0.2.0",sections:[[],[[1,"p",[[[],0,"before"]]],[10,"image-card"],[1,"p",[[[],0,"after"]]]]]},selfieCard:{version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"Selfie Card"]]],[10,"selfie-card"]]]},simpleCard:{version:"0.2.0",sections:[[],[[1,"p",[[[],0,"before"]]],[10,"simple-card"],[1,"p",[[[],0,"after"]]]]]},simpleList:{version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"To do today:"]]],[3,"ul",[[[[],0,"buy milk"]],[[[],0,"water plants"]],[[[],0,"world domination"]]]]]]},simple:{version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"Hello World"]]],[1,"p",[[[],0,"This is Mobiledoc-kit."]]]]]}}}),define("mobiledoc-kit-demo/router",["exports","ember","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=t["default"].Router.extend({location:o["default"].locationType});d.map(function(){}),e["default"]=d}),define("mobiledoc-kit-demo/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"mobiledoc-kit-demo/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("h1"),n=e.createTextNode("Mobiledoc");e.appendChild(d,n);var n=e.createElement("span");e.setAttribute(n,"class","headline-note");var r=e.createTextNode("beta!");e.appendChild(n,r),e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p");e.setAttribute(d,"class","subheadline");var n=e.createTextNode("A web-friendly file format for WYSIWYG editors");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("hr");e.appendChild(t,o);var o=e.createTextNode("\n\n");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=new Array(1);return d[0]=e.createMorphAt(t,4,4,o),d},statements:[["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[]}}())}),define("mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","rendered-mobiledoc");var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("mobiledoc-kit-demo/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:30,column:6},end:{line:38,column:6}},moduleName:"mobiledoc-kit-demo/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createTextNode("        ");e.appendChild(t,o);var o=e.createElement("button"),d=e.createTextNode("Add image");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n        ");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=e.childAt(t,[1]),n=new Array(2);return n[0]=e.createElementMorph(d),n[1]=e.createMorphAt(t,3,3,o),n},statements:[["element","action",[["get","editor.addCardInEditMode",["loc",[null,[36,25],[36,49]]]],"image-card"],[],["loc",[null,[36,16],[36,64]]]],["inline","mobiledoc-toolbar",[],["editor",["subexpr","@mut",[["get","editor",["loc",[null,[37,35],[37,41]]]]],[],[]]],["loc",[null,[37,8],[37,43]]]]],locals:["editor"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:64,column:0}},moduleName:"mobiledoc-kit-demo/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p"),n=e.createTextNode("\n    Mobiledoc is a publishing solution designed for both text and\n    dynamically rendered cards. Posts are serialized into ");e.appendChild(d,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/bustlelabs/mobiledoc-kit/blob/master/MOBILEDOC.md");var r=e.createTextNode("Mobiledoc");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode(", and\n    rendered to DOM in a reader's browser.\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p"),n=e.createTextNode("\n    Read more on the ");e.appendChild(d,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/bustlelabs/mobiledoc-kit");var r=e.createTextNode("mobiledoc-kit");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n    GitHub repo.\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("br");e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("h2"),n=e.createTextNode("Try a Demo");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("div");e.setAttribute(o,"class","container");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","output full-left");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("select");e.setAttribute(r,"id","select-mobiledoc");var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"disabled","");var a=e.createTextNode("Load a new Mobiledoc");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","simple");var a=e.createTextNode("Simple text content");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","empty");var a=e.createTextNode("Empty mobiledoc");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","simpleList");var a=e.createTextNode("List example");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","simpleCard");var a=e.createTextNode("Simple Card");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","imageCard");var a=e.createTextNode("Image Card");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","inputCard");var a=e.createTextNode("Card with Input");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","selfieCard");var a=e.createTextNode("Selfie Card");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("option");e.setAttribute(i,"value","codemirrorCard");var a=e.createTextNode("Codemirror Card");e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("    ");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","output");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("h4"),i=e.createTextNode("Mobiledoc Output");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("pre");e.setAttribute(r,"class","serialized-mobiledoc-wrapper");var i=e.createElement("code");e.setAttribute(i,"id","serialized-mobiledoc");var a=e.createComment("");e.appendChild(i,a),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","output full-right");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("h4"),i=e.createTextNode("Rendered with ");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode(" renderer");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("ul"),i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("li"),a=e.createTextNode("Use ");e.appendChild(i,a);var a=e.createElement("button"),l=e.createTextNode("DOM-Renderer");e.appendChild(a,l),e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("li"),a=e.createTextNode("Use ");e.appendChild(i,a);var a=e.createElement("button"),l=e.createTextNode("HTML Renderer");e.appendChild(a,l),e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("li"),a=e.createTextNode("Use ");e.appendChild(i,a);var a=e.createElement("button"),l=e.createTextNode("Text Renderer");e.appendChild(a,l),e.appendChild(i,a),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("hr");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(o,d);var d=e.createTextNode("\n\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=e.childAt(t,[4]),n=e.childAt(d,[1,1]),r=e.childAt(n,[1]),i=e.childAt(d,[5,1]),a=e.childAt(i,[3]),l=e.childAt(a,[1,1]),c=e.childAt(a,[3,1]),m=e.childAt(a,[5,1]),p=new Array(8);return p[0]=e.createElementMorph(r),p[1]=e.createMorphAt(n,3,3),p[2]=e.createMorphAt(e.childAt(d,[3,1,3,0]),0,0),p[3]=e.createMorphAt(e.childAt(i,[1]),1,1),p[4]=e.createElementMorph(l),p[5]=e.createElementMorph(c),p[6]=e.createElementMorph(m),p[7]=e.createMorphAt(i,7,7),p},statements:[["element","action",["changeMobiledoc"],["on","change"],["loc",[null,[19,36],[19,76]]]],["block","mobiledoc-editor",[],["class","post-editor__editor","mobiledoc",["subexpr","@mut",[["get","mobiledoc",["loc",[null,[32,20],[32,29]]]]],[],[]],"cards",["subexpr","mobiledoc-cards-list",[],[],["loc",[null,[33,16],[33,38]]]],"on-change",["subexpr","action",["didEdit"],[],["loc",[null,[34,20],[34,38]]]]],0,null,["loc",[null,[30,6],[38,27]]]],["inline","format-object",[["get","editedMobiledoc",["loc",[null,[46,24],[46,39]]]]],[],["loc",[null,[46,6],[46,43]]]],["content","rendererName",["loc",[null,[52,24],[52,40]]]],["element","action",["setRenderer","dom"],[],["loc",[null,[54,24],[54,54]]]],["element","action",["setRenderer","html"],[],["loc",[null,[55,24],[55,55]]]],["element","action",["setRenderer","text"],[],["loc",[null,[56,24],[56,55]]]],["inline","component",[["subexpr","concat",["mobiledoc-",["get","rendererName",["loc",[null,[59,39],[59,51]]]],"-renderer"],[],["loc",[null,[59,18],[59,64]]]]],["mobiledoc",["subexpr","@mut",[["get","editedMobiledoc",["loc",[null,[59,75],[59,90]]]]],[],[]]],["loc",[null,[59,6],[59,92]]]]],locals:[],templates:[e]}}())}),define("mobiledoc-kit-demo/config/environment",["ember"],function(e){var t="mobiledoc-kit-demo";try{var o=t+"/config/environment",d=e["default"].$('meta[name="'+o+'"]').attr("content"),n=JSON.parse(unescape(d));return{"default":n}}catch(r){throw new Error('Could not read config from meta tag with name "'+o+'".')}}),runningTests?require("mobiledoc-kit-demo/tests/test-helper"):require("mobiledoc-kit-demo/app")["default"].create({name:"mobiledoc-kit-demo",version:"0.0.0+94507c9f"});