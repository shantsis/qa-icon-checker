(()=>{"use strict";const e=" is not using the correct export suffix option for ",s=" does not have export option 'Contents Only' enabled for ";var t={pass:!0,message:""};function n(e){return 0==e.fills.length?t:{pass:!1,message:" has a fill on the component frame"}}function o(e){return"S:7d0f6da8463371d6cbdc84a638718c38621e080d,306:59"==e.children[0].fillStyleId?t:{pass:!1,message:" is not using base/1000 for the vector fill"}}function a(e){return 32==e.width&&32==e.height?t:{pass:!1,message:" does not have the frame size set to 32 x 32px"}}const i=[{format:"PNG",suffix:"@1",contentsOnly:!0,constraint:{type:"SCALE",value:1}},{format:"PNG",suffix:"@2",contentsOnly:!0,constraint:{type:"WIDTH",value:64}},{format:"PNG",suffix:"@3",contentsOnly:!0,constraint:{type:"WIDTH",value:96}},{format:"SVG",suffix:"",contentsOnly:!0,svgIdAttribute:!1}];var r={pass:!0,message:""};function f(t){var n,o,a=t.exportSettings;if(0===a.length)return{pass:!1,message:" does not have any export settings configured"};for(var f in i){var u=a.findIndex((e=>e.format===i[f].format&&e.suffix===i[f].suffix));if(-1===u)return{pass:!1,message:" is missing the export option "+i[f].format+" "+i[f].suffix};var c=(n=a[u],o=i[f],"PNG"===n.format?n.suffix!=o.suffix?{pass:!1,message:e+"PNG "+o.suffix}:n.contentsOnly!=o.contentsOnly?{pass:!1,message:s+"PNG "+o.suffix}:n.constraint.type!=o.constraint.type||n.constraint.value!=o.constraint.value?{pass:!1,message:" is not using either 1x, 64w or 96w for the export constraint"}:r:n.suffix!=o.suffix?{pass:!1,message:e+"SVG"}:n.contentsOnly!=o.contentsOnly?{pass:!1,message:s+"SVG"}:n.svgIdAttribute!=o.svgIdAttribute?{pass:!1,message:" should not have 'include id attribute' enabled under the SVG export option"}:r);if(!1===c.pass)return c}return r}var u={pass:!0,message:""},c=["account","action","alert","communication","content","editor","file","logo","navigation","other","social","status","weather"];function l(e){return 1===e.children.length?u:{pass:!1,message:" has more than one layer in the component"}}function p(e){return"VECTOR"===e.children[0].type?u:{pass:!1,message:" has an inner layer which is a group or frame"}}function h(e){return"SCALE"===e.children[0].constraints.horizontal&&"SCALE"===e.children[0].constraints.vertical?u:{pass:!1,message:" is not set to scale both vertically & horizontally"}}function g(e){return"NONE"===e.layoutMode?u:{pass:!1,message:" has autolayout turned on"}}function m(e){var s=e.name.split("/");return s=s[0],-1!=c.findIndex((e=>e===s))?u:{pass:!1,message:" has the wrong category name is or is mispelled"}}function d(e){figma.closePlugin(e)}!function(){var e=figma.currentPage.children;if(void 0!==e[0]&&"COMPONENT"==e[0].type){for(var s of e)if("template"!=s.name){var t=[];console.log(s.name),t.push(p(s)),console.log(t[0]),!0===t[0].pass&&(t.push(l(s)),t.push(g(s)),t.push(m(s)),t.push(h(s)),t.push(n(s)),t.push(o(s)),t.push(a(s)),t.push(f(s)));var i=t.findIndex((e=>!1===e.pass));if(-1!=i)return void d('⚠️ "'+s.name+'"'+t[i].message)}d("All icons are good to go! 🚀")}else d("⚠️ No icons detected! Run this plugin from the page containing the components.")}()})();