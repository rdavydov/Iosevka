(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{9002:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customizer",function(){return i(6281)}])},6281:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Customizer}});var n=i(5893),s=i(7294),a=i(5022),__assign=function(){return(__assign=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function lowerCase(e){return e.toLowerCase()}"function"==typeof SuppressedError&&SuppressedError;var r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function replace(e,t,i){return t instanceof RegExp?e.replace(t,i):t.reduce(function(e,t){return e.replace(t,i)},e)}function paramCase(e,t){var i;return void 0===t&&(t={}),void 0===(i=__assign({delimiter:"-"},t))&&(i={}),function(e,t){void 0===t&&(t={});for(var i=t.splitRegexp,n=t.stripRegexp,s=t.transform,a=void 0===s?lowerCase:s,o=t.delimiter,d=void 0===o?" ":o,c=replace(replace(e,void 0===i?r:i,"$1\x00$2"),void 0===n?l:n,"\x00"),u=0,p=c.length;"\x00"===c.charAt(u);)u++;for(;"\x00"===c.charAt(p-1);)p--;return c.slice(u,p).split("\x00").map(a).join(d)}(e,__assign({delimiter:"."},i))}var o=i(3513),d=i(9008),c=i.n(d),esm_useLifecycles=function(e,t){(0,s.useEffect)(function(){return e&&e(),function(){t&&t()}},[])},u=i(6548),p=i(216);function CheckGroup(e){return(0,n.jsxs)("label",{className:(0,p.D)("check-group","extender",e.disabled?"disabled":""),children:[(0,n.jsx)("input",{type:"checkbox",disabled:e.disabled,checked:e.value,onChange:t=>e.onChange(t.target.checked)}),(0,n.jsx)("span",{className:"check-mark"}),e.label]})}var h=i(2419),f=i(7546),g=i(7268),m=i(356),x=i(5186),y=i(9384),v=i(5881),b=i(5429),j=i(3562),S=i(8367),C=i(3484),w=i(1139);function Customizer(){let e=(0,C.M)(x.sN),t=(0,C.M)(k);return esm_useLifecycles(()=>{setTimeout(()=>{e.set(w.mE(e.val))},0)},()=>{}),(0,n.jsx)(N.Provider,{value:e,children:(0,n.jsx)(G.Provider,{value:t,children:(0,n.jsxs)("div",{className:"page",children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:"Iosevka Customizer"})}),(0,n.jsx)(g.$,{className:"customizer",children:(0,n.jsxs)("div",{className:"config-panel introduction",children:[(0,n.jsx)("h1",{children:"Iosevka Customizer"}),(0,n.jsx)(CustomizerBanner,{})]})}),(0,n.jsxs)(g.$,{className:"customizer",children:[(0,n.jsxs)("div",{className:"config-panel",children:[(0,n.jsx)(CustomizerHeader,{index:1,children:"Basics"}),(0,n.jsx)(BasicsPanel,{})]}),(0,n.jsx)("div",{className:"config-co-panel",children:(0,n.jsx)(BasicsPanel2,{})})]}),(0,n.jsxs)(g.$,{className:"customizer",children:[(0,n.jsxs)("div",{className:"config-panel",children:[(0,n.jsx)(CustomizerHeader,{index:2,children:"Variants"}),(0,n.jsx)(VariantsPanel,{})]}),(0,n.jsx)(FloatingPreview,{})]}),(0,n.jsx)(g.$,{className:"customizer",children:(0,n.jsxs)("div",{className:"config-panel",children:[(0,n.jsx)(CustomizerHeader,{index:3,children:"Ligations"}),(0,n.jsx)(LigationPanel,{}),(0,n.jsx)(LigationPreview,{})]})}),(0,n.jsx)(g.$,{className:"customizer",children:(0,n.jsxs)("div",{className:"result-panel",children:[(0,n.jsx)(CustomizerHeader,{index:4,children:"Your Config"}),(0,n.jsx)(TomlResultPanel,{}),(0,n.jsx)(BuildInstructionsPanel,{})]})}),(0,n.jsx)(h.d,{pCc:e,pUx:t})]})})})}let N=(0,s.createContext)(C._.Default(x.sN)),k={popupVisible:!1},G=(0,s.createContext)(C._.Default(k));function CustomizerBanner(){return(0,n.jsxs)("p",{children:["Iosevka Customizer is a tool help creating"," ",(0,n.jsx)("a",{href:"https://github.com/be5invis/Iosevka/blob/master/doc/custom-build.md",children:"Iosevka custom build configurations"}),"."]})}function CustomizerHeader(e){return(0,n.jsxs)("h2",{children:[(0,n.jsx)("em",{children:String(e.index).padStart(2,"0")})," ",e.children]})}function BasicsPanel(){let e=(0,s.useContext)(N),t=(0,s.useContext)(G),i=C._.Lens(e,"serifStyle");return(0,n.jsxs)("div",{className:"customizer-body",children:[(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Family Name"}),(0,n.jsx)("dd",{children:(0,n.jsx)("input",{type:"text",value:e.val.family,onChange:t=>C._.Lens(e,"family").set(t.target.value)})})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Serifs"}),(0,n.jsx)("dd",{children:(0,n.jsx)(f.K,{options:v.xE,value:i.val,onChange:i.set})})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Spacing"}),(0,n.jsx)("dd",{children:(0,n.jsx)(f.K,{value:e.val.spacing,options:v._H,onChange:C._.Lens(e,"spacing").set})})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{}),(0,n.jsx)("dd",{children:(0,n.jsx)(h.Y,{...t})})]})]})}function BasicsPanel2(){let e=(0,s.useContext)(N),{val:t,set:i}=e,a=C._.Lens(e,"fExportCvSs"),r=C._.Lens(e,"fExportGlyphNames");return(0,n.jsxs)("div",{className:"customizer-body",children:[(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Weights"}),(0,n.jsx)(GradeCheckBoxList,{source:v.Id.keys(),fEnabled:e=>t.weightGradesIncluded.has(e),formatter:I,fInteractive:e=>e!==v.vS.Regular,sink:(e,n)=>{let s=new Set(t.weightGradesIncluded);n?s.delete(e):s.add(e),i({...t,weightGradesIncluded:s})}})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Widths"}),(0,n.jsx)(GradeCheckBoxList,{dummies:2,source:v.FL.keys(),fEnabled:e=>t.widthGradesIncluded.has(e),formatter:E,fInteractive:e=>e!==(t.defaultWidthAtExpanded?v.Lu.Expanded:v.Lu.Normal),sink:(e,n)=>{let s=new Set(t.widthGradesIncluded);n?s.delete(e):s.add(e),i({...t,widthGradesIncluded:s})}})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Slopes"}),(0,n.jsx)(GradeCheckBoxList,{source:v.dm.keys(),fEnabled:e=>t.slopeGradesIncluded.has(e),formatter:L,fInteractive:e=>e!==v.m3.Upright,sink:(e,n)=>{let s=new Set(t.slopeGradesIncluded);n?s.delete(e):s.add(e),i({...t,slopeGradesIncluded:s})}})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{}),(0,n.jsx)("dd",{children:(0,n.jsx)(CheckGroup,{label:"Default width being 600",value:t.defaultWidthAtExpanded,onChange:e=>{let n=new Set(t.widthGradesIncluded);e?n.add(v.Lu.Expanded):n.add(v.Lu.Normal),i({...t,defaultWidthAtExpanded:e,widthGradesIncluded:n})}})})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{}),(0,n.jsx)("dd",{children:(0,n.jsx)(CheckGroup,{label:"Export cv## / ss## OpenType features",value:a.val,onChange:a.set})})]}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{}),(0,n.jsx)("dd",{children:(0,n.jsx)(CheckGroup,{label:(0,n.jsxs)(n.Fragment,{children:["Export glyph names for"," ",(0,n.jsx)("a",{href:"https://sw.kovidgoyal.net/kitty/",children:"Kitty"})]}),value:r.val,onChange:r.set})})]})]})}function GradeCheckBoxList(e){let t=[],i=Array.from(e.source).sort(e.formatter.order);if(e.dummies)for(let i=0;i<e.dummies;i++)t.push((0,n.jsx)(GradeCheckBoxDummy,{},"dummy-".concat(i)));for(let n of i){let i=e.fInteractive(n);t.push((0,s.createElement)(GradeCheckBox,{...e,grade:n,key:e.formatter.identifier(n),interactive:i,title:e.formatter.titleT(n,i)}))}return(0,n.jsx)("dd",{className:(0,p.D)("grade-list",e.className),children:t})}function GradeCheckBoxDummy(){return(0,n.jsx)("button",{disabled:!0,className:"thumb-check-box grade-button weight dummy"})}function GradeCheckBox(e){return(0,n.jsx)("button",{className:(0,p.D)("thumb-check-box grade-button weight",e.fEnabled(e.grade)?"checked":"unchecked",e.interactive?"interactive":"non-interactive",v.yK(e.formatter.getFontStyle(e.grade))),title:e.title,onClick:t=>{e.interactive&&e.sink(e.grade,e.fEnabled(e.grade)),t.preventDefault(),t.stopPropagation()},children:(0,n.jsx)("span",{className:"label",children:e.formatter.display(e.grade)})})}let I={order:(e,t)=>e-t,identifier:e=>"weight-".concat(e),display:e=>String(e),titleT:(e,t)=>{let i=v.Id.get(e).display;return t?"Click to toggle whether weight ".concat(i," is included."):"Weight ".concat(i," is always included and cannot be disabled.")},getFontStyle:e=>({...v.Y8,weight:e})},E={order:(e,t)=>e-t,identifier:e=>"width-".concat(e),display:e=>String(e),titleT:(e,t)=>{let i=v.FL.get(e).display;return t?"Click to toggle whether weight ".concat(i," is included."):"Weight ".concat(i," is always included and cannot be disabled.")},getFontStyle:e=>({...v.Y8,width:e})},L={order:(e,t)=>e-t,identifier:e=>"slope-".concat(e),display:e=>v.m3[e],titleT:(e,t)=>{let i=v.dm.get(e).display;return t?"Click to toggle whether slope ".concat(i," is included."):"Slope ".concat(i," is always included and cannot be disabled.")},getFontStyle:e=>({...v.Y8,slope:e})};function enableOverrideGroup(e,t){t.set((0,o.Uy)(t=>{t.charVariants[e]={...t.charVariants.design}}))}function clearOverrideGroup(e,t){t.set((0,o.Uy)(t=>{delete t.charVariants[e]}))}function VariantsPanel(){let e=(0,s.useContext)(N);return(0,n.jsxs)("div",{className:"customizer-body variants",children:[(0,n.jsx)(VariantsInheritanceField,{}),(0,n.jsx)(VariantGroup,{slopeKey:"design",visible:!0}),(0,n.jsx)(CheckGroup,{label:"Override Italics",value:!!e.val.charVariants.italic,onChange:t=>{t?enableOverrideGroup("italic",e):clearOverrideGroup("italic",e)}}),(0,n.jsx)(VariantGroup,{slopeKey:"italic",visible:!!e.val.charVariants.italic}),(0,n.jsx)(CheckGroup,{label:"Override Oblique",value:!!e.val.charVariants.oblique,onChange:t=>{t?enableOverrideGroup("oblique",e):clearOverrideGroup("oblique",e)}}),(0,n.jsx)(VariantGroup,{slopeKey:"oblique",visible:!!e.val.charVariants.oblique})]})}function VariantsInheritanceField(){let e=(0,s.useContext)(N);return(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Inherits"}),(0,n.jsx)("dd",{children:(0,n.jsx)("select",{value:(e.val.charVariants.inherits||y.NA).key,onChange:t=>(function(e,t){e.set((0,o.Uy)(e=>{e.charVariants.inherits=t===y.NA?void 0:t}))})(e,y.Xf.get(t.target.value)||y.NA),children:Array.from(y.Xf.values()).map(e=>(0,n.jsx)("option",{value:e.key,children:e.description+(e.tag&&e.rank?" ("+e.tag+")":"")},e.key))})})]})}function VariantGroup(e){if(!e.visible)return null;let t=(0,s.useContext)(N),i=t.val,a="italic"===e.slopeKey?v.m3.Italic:"oblique"===e.slopeKey?v.m3.Oblique:v.m3.Upright,r=w.yL(i.charVariants,{isSlab:i.serifStyle===v.Hn.Slab,slope:a}),l={style:(0,x.gV)(i),slope:a};return(0,n.jsx)("div",{className:"group",children:Array.from(y.D.values()).map(s=>{var a,d;return(0,n.jsx)(u.nM,{className:"large",prime:s,fontStyle:l,onItemSelect:(a=e.slopeKey,e=>t.set((0,o.Uy)(t=>{t.charVariants[a]||(t.charVariants[a]={}),t.charVariants[a][s.key]=e}))),onItemClear:(d=e.slopeKey,()=>t.set((0,o.Uy)(e=>{let t=e.charVariants[d]||{};delete t[s.key],e.charVariants[d]=t}))),activeVariantKey:r.resolvedComposition[s.key],activeVariantKind:i.charVariants[e.slopeKey]&&s.key in i.charVariants[e.slopeKey]?u.Ft.NonDefault:u.Ft.Default},s.key)})})}function FloatingPreview(){let{val:e}=(0,s.useContext)(N),t=w.yL(e.charVariants,{isSlab:e.serifStyle===v.Hn.Slab,slope:v.m3.Upright}),i={style:(0,x.gV)(e),spacingTag:e.spacing?"NWID":"",width:e.defaultWidthAtExpanded?v.Lu.Expanded:v.Lu.Normal,charVarTags:t.userFriendlyFeatureAssignment};return(0,n.jsx)("div",{className:"preview-panel customizer-preview",children:(0,n.jsxs)("div",{className:"inner",children:[(0,n.jsx)(HighlightsToggle,{}),(0,n.jsx)(CharGridPreview,{fs:i})]})})}function HighlightsToggle(){let e=(0,s.useContext)(N);return(0,n.jsxs)("label",{className:"highlight-toggle toggle-group",children:[(0,n.jsx)("input",{type:"checkbox",checked:e.val.fDisplayHighlight,onChange:t=>e.set({...e.val,fDisplayHighlight:t.target.checked})})," ",(0,n.jsx)("span",{className:"check-mark"}),"Highlight Customized Characters"]})}let P=["✳",...function(e,t){let i="";for(let e=33;e<=126;e++)i+=String.fromCodePoint(e);return i}(0,0),"\uD83E\uDFB2\uD83E\uDFB3"],V="← ↑ → ↓ ■ □ ▲ △ ◇ ◈ <= >= λ \xdf ≨ ∑".split(" ");function CharGridPreview(e){return(0,n.jsxs)("ol",{className:"grid-preview",children:[(0,n.jsx)(GridPreviewCodeRows,{...e,slope:v.m3.Upright}),(0,n.jsx)(GridPreviewCodeRows,{...e,slope:v.m3.Italic}),(0,n.jsx)(GridPreviewCodeRows,{...e,slope:v.m3.Oblique}),(0,n.jsx)(GridPreviewCharRows,{...e,sample:P}),(0,n.jsx)(GridPreviewCharRows,{...e,sample:V})]})}function GridPreviewCharRows(e){let t=[],{val:i}=(0,s.useContext)(N),a=w.yL(i.charVariants,{isSlab:i.serifStyle===v.Hn.Slab,slope:v.m3.Upright});for(let i of e.sample){let s=a.hotChars.get(i),r=s?{fontFeatureSettings:Array.from(Object.entries(s)).map(e=>{let[t,i]=e;return"'".concat(t,"' ").concat(i)}).join(",")}:{};t.push((0,n.jsx)("li",{className:(0,p.D)("cell","single-char",v.yK(e.fs)),style:r,children:i},i))}return(0,n.jsx)(n.Fragment,{children:t})}function GridPreviewCodeRows(e){let{val:t}=(0,s.useContext)(N),i=w.yL(t.charVariants,{isSlab:t.serifStyle===v.Hn.Slab,slope:e.slope}),a={style:(0,x.gV)(t),slope:e.slope,spacingTag:t.spacing?"NWID":"",width:t.defaultWidthAtExpanded?v.Lu.Expanded:v.Lu.Normal};return(0,n.jsxs)("li",{className:(0,p.D)("cell","code-sample",t.slopeGradesIncluded.has(e.slope)?"included":"excluded",t.fDisplayHighlight?"display-highlight":"ignore-highlight"),children:[(0,n.jsx)("div",{className:"header",children:v.m3[e.slope]}),(0,n.jsx)(m.V,{fontStyle:a,code:S.K,highlightCharSet:i.stepHotChars})]})}function LigationPanel(){let e=(0,s.useContext)(N),setLigSet=t=>{e.set((0,o.Uy)(e=>{for(let i of b.cy)if(i.selector===t){e.ligationSet=i;return}e.ligationSet=b.cy[0]}))},t=e.val.spacing===v.Ki.Fixed;return(0,n.jsx)("div",{className:"customizer-body",children:(0,n.jsx)("select",{disabled:t,value:t?".disabled":e.val.ligationSet.selector||".disabled",onChange:e=>setLigSet(e.target.value),children:b.cy.map(e=>(0,n.jsx)("option",{value:e.selector||".disabled",children:t?"Ligation Disabled in Fixed":e.desc||e.brief},e.selector||".disabled"))})})}function LigationPreview(){let{val:e}=(0,s.useContext)(N),t=w.yL(e.charVariants,{isSlab:e.serifStyle===v.Hn.Slab,slope:v.m3.Upright}),i={style:(0,x.gV)(e),spacingTag:e.spacing?"NWID":"",width:e.defaultWidthAtExpanded?v.Lu.Expanded:v.Lu.Normal,charVarTags:t.userFriendlyFeatureAssignment};return(0,n.jsx)("div",{className:"customizer-body ligation-sampler",children:(0,n.jsx)(j.$,{fontStyle:i,currentLigationSet:e.spacing===v.Ki.Fixed?b.cy[0]:e.ligationSet,ligationCherry:b.X8,ligationSamples:b.kM})})}function TomlResultPanel(){let{val:e}=(0,s.useContext)(N),t=paramCase(e.family),i={buildPlans:{[t]:(0,x.Lr)(e)}};return(0,n.jsxs)("dl",{className:"custom-build-commands",children:[(0,n.jsxs)("dt",{children:["Your ",(0,n.jsx)("code",{children:"private-build-plans.toml"}),":"]}),(0,n.jsx)("dd",{className:"custom-config-source",children:a.stringify(i)})]})}function BuildInstructionsPanel(){let{val:e}=(0,s.useContext)(N),t=paramCase(e.family);return(0,n.jsxs)("dl",{className:"custom-build-commands",children:[(0,n.jsx)("dt",{children:"Command to build TTF + Web Font:"}),(0,n.jsxs)("dd",{children:["npm run build -- contents::",t]}),(0,n.jsx)("dt",{children:"Command to build TTF:"}),(0,n.jsxs)("dd",{children:["npm run build -- ttf::",t]}),(0,n.jsx)("dt",{children:"Command to build TTF Unhinted:"}),(0,n.jsxs)("dd",{children:["npm run build -- ttf-unhinted::",t]}),(0,n.jsxs)("dt",{children:["For further information, see"," ",(0,n.jsx)("a",{href:"https://github.com/be5invis/Iosevka/blob/master/doc/custom-build.md",children:"here"}),"."]})]})}},2419:function(e,t,i){"use strict";i.d(t,{Y:function(){return ImportConfigurationPopupEnableButton},d:function(){return ImportConfigurationPopup}});var n=i(5893),s=i(7294),a=i(5186);function ImportConfigurationPopup(e){let[t,i]=(0,s.useState)("");return e.pUx.val.popupVisible?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"customizer popup-background",onClick:()=>e.pUx.set({...e.pUx.val,popupVisible:!1})}),(0,n.jsxs)("div",{className:"customizer popup",children:[(0,n.jsx)("h2",{children:"Import Configuration"}),(0,n.jsx)("div",{className:"inner",children:(0,n.jsx)("textarea",{value:t,onChange:e=>i(e.target.value)})}),(0,n.jsx)("input",{type:"button",value:"Import",onClick:()=>{let n=(0,a.S3)(t,a.sN);e.dropInheritedCvs&&(n=(0,a.mo)(n)),e.pCc.set(n),i(""),e.pUx.set({...e.pUx.val,popupVisible:!1})}})]})]}):null}function ImportConfigurationPopupEnableButton(e){return(0,n.jsx)("input",{type:"button",value:"Import Configuration",onClick:()=>e.set({popupVisible:!0})})}},7546:function(e,t,i){"use strict";i.d(t,{K:function(){return EnumSelect}});var n=i(5893);function EnumSelect(e){return(0,n.jsx)("select",{value:e.value,onChange:t=>e.onChange?e.onChange(Number(t.target.value)):void 0,children:Array.from(e.options).map(e=>{let[t,i]=e;return(0,n.jsx)("option",{value:t,children:i.display},t)})})}},7335:function(e,t,i){"use strict";i.d(t,{b:function(){return PickerFrame}});var n=i(5893),s=i(7294),a=i(5881),r=i(216),l=i(7268);let o=(0,s.createContext)({externFontStyle:{},currentFontStyle:{},receiver:()=>{}});function PickerFrame(e){let[t,i]=(0,s.useState)({...e.defaultFontStyle}),r=e.styleGrades||[a.bg.Sans,a.bg.Slab];return(0,n.jsx)(o.Provider,{value:{externFontStyle:e.externFontStyle,currentFontStyle:t,receiver:n=>{let s=function(e){let t=e.style||a.bg.Sans;return a.GQ(t)||(e.slope=a.oz(t,e.slope)),a.zd(t)||(e.width=a.OO(t,e.width)),e}({...t,...n});e.onFontSet&&e.onFontSet(s),i(s)}},children:(0,n.jsxs)("div",{className:"picker-frame",children:[(0,n.jsxs)(l.y,{withToolbar:e.wholeSection,children:[(0,n.jsxs)(Group,{className:"style",disabled:e.disableStyle,children:[(0,n.jsx)(ButtonLabel,{children:"Style"}),r.map(e=>(0,n.jsx)(Button,{apply:{style:e},children:a.bg[e]},e))]}),(0,n.jsxs)(Group,{className:"weight",disabled:e.disableWeight,children:[(0,n.jsx)(ButtonLabel,{children:"Weight"}),(0,n.jsx)(Button,{apply:{weight:a.vS.Thin},children:"1"}),(0,n.jsx)(Button,{apply:{weight:a.vS.ExtraLight},children:"2"}),(0,n.jsx)(Button,{apply:{weight:a.vS.Light},children:"3"}),(0,n.jsx)(Button,{apply:{weight:a.vS.Regular},children:"4"}),(0,n.jsx)(Button,{apply:{weight:a.vS.Medium},children:"5"}),(0,n.jsx)(Button,{apply:{weight:a.vS.SemiBold},children:"6"}),(0,n.jsx)(Button,{apply:{weight:a.vS.Bold},children:"7"}),(0,n.jsx)(Button,{apply:{weight:a.vS.ExtraBold},children:"8"}),(0,n.jsx)(Button,{apply:{weight:a.vS.Heavy},children:"9"})]}),(0,n.jsxs)(Group,{className:"slope",disabled:e.disableSlope,children:[(0,n.jsx)(ButtonLabel,{children:"Slope"}),(0,n.jsx)(Button,{unapply:{slope:a.m3.Upright},apply:{slope:a.m3.Italic},children:"Italic"}),(0,n.jsx)(Button,{unapply:{slope:a.m3.Upright},apply:{slope:a.m3.Oblique},className:a.GQ(t.style||a.bg.Sans)?"enabled":"disabled",children:"Oblique"})]}),(0,n.jsxs)(Group,{className:"width",disabled:e.disableWidth,children:[(0,n.jsx)(ButtonLabel,{children:"Width"}),(0,n.jsx)(Button,{unapply:{width:a.Lu.Normal},apply:{width:a.Lu.Expanded},className:a.zd(t.style||a.bg.Sans)?"enabled":"disabled",children:"Extended"})]}),(0,n.jsxs)(Group,{className:"spacing",disabled:!e.enableSpacing,children:[(0,n.jsx)(ButtonLabel,{children:"Spacing"}),(0,n.jsx)(Button,{unapply:{spacingTag:void 0},apply:{spacingTag:"NWID"},title:"Show symbols in terminal width",children:"Terminal"}),(0,n.jsx)(Button,{unapply:{spacingTag:void 0},apply:{spacingTag:"WWID"},title:"Make mosaics double-width",children:"WideMosaic"})]}),(0,n.jsxs)(Group,{className:"markings",disabled:!e.enableMarkings,children:[(0,n.jsx)(ButtonLabel,{children:"Markings"}),(0,n.jsx)(Button,{apply:{markingsVisible:!0},unapply:{markingsVisible:!1},title:"Toggle markings visibility",children:"Markings"})]})]}),(0,n.jsx)(e.content,{fontStyle:{...e.externFontStyle,...t}})]})})}function Group(e){return e.disabled?null:(0,n.jsx)("div",{className:(0,r.D)("button-group",e.className),children:e.children})}function Button(e){let t=(0,s.useContext)(o),i=!0,l={...a.Y8,...t.currentFontStyle};for(let t in e.apply)l[t]!==e.apply[t]&&(i=!1);return(0,n.jsx)("a",{onClick:()=>t.receiver(i&&e.unapply?e.unapply:e.apply),className:(0,r.D)("picker-button",i?"active":null,a.yK({...a.Y8,...e.apply}),e.className),title:e.title,children:e.children})}function ButtonLabel(e){return(0,n.jsx)("span",{className:"picker-button-label",children:e.children})}},5186:function(e,t,i){"use strict";i.d(t,{Lr:function(){return formatBuildPlan},O:function(){return slopeToCustomizerStyleKey},S3:function(){return parseCustomization},gV:function(){return resolveDisplayStyle},mo:function(){return dropInheritedCvs},sN:function(){return o},vn:function(){return getResolvedBuildPlanCharVariants}});var n=i(5022),s=i(9384),a=i(5881),r=i(5429),l=i(1139);let o={family:"Iosevka Custom",serifStyle:a.Hn.Sans,spacing:a.Ki.Normal,defaultWidthAtExpanded:!1,charVariants:{},weightGradesIncluded:new Set(a.Id.keys()),widthGradesIncluded:new Set(a.PE.keys()),slopeGradesIncluded:new Set(a.dm.keys()),ligationSet:r.cy[1],fDisplayHighlight:!0,fExportCvSs:!1,fExportGlyphNames:!1};function parseCustomization(e,t){let i=n.parse(e);if(!isJsonMap(i.buildPlans))return t;for(let[e,n]of Object.entries(i.buildPlans))isJsonMap(n)&&("string"==typeof n.family&&(t={...t,family:n.family}),"string"==typeof n.spacing&&(t={...t,spacing:function(e){return a._H.find(a.Ki.Normal,(t,i)=>i.internal===e)}(n.spacing)}),"string"==typeof n.serifs&&(t={...t,serifStyle:function(e){return a.xE.find(a.Hn.Sans,(t,i)=>i.internal===e)}(n.serifs)}),"boolean"==typeof n["no-cv-ss"]&&(t={...t,fExportCvSs:!n["no-cv-ss"]}),"boolean"==typeof n["export-glyph-names"]&&(t={...t,fExportGlyphNames:n["export-glyph-names"]}),isJsonMap(n.ligations)&&(t=function(e,t){if("string"==typeof e.inherits){for(let i of r.cy)if(i.selector&&i.selector===e.inherits){t={...t,ligationSet:i};break}}return t}(n.ligations,t)),isJsonMap(n.variants)&&(t=function(e,t){let i={};if("string"==typeof e.inherits)for(let[t,n]of s.Xf)n.key===e.inherits&&(i={...i,inherits:n});for(let t of l.AT){let n=e[t];if(!isJsonMap(n))continue;let s={};for(let[e,t]of Object.entries(n))"string"==typeof t&&(s[e]=t);i={...i,[t]:s}}return t={...t,charVariants:i}}(n.variants,t)),isJsonMap(n.weights)&&(t=function(e,t){let i=new Set;for(let[t,n]of Object.entries(e))if(isJsonMap(n)&&"number"==typeof n.shape)for(let[e,t]of a.Id)e===n.shape&&i.add(e);return t={...t,weightGradesIncluded:i}}(n.weights,t)),isJsonMap(n.widths)&&(t=function(e,t){let i=new Set,n=!1;for(let[t,s]of Object.entries(e))if(isJsonMap(s)&&"number"==typeof s.shape&&"string"==typeof s.css)for(let[e,t]of a.FL)e===s.shape&&(i.add(e),s.css!==t.css&&(n=!0));return n?i.add(a.Lu.Expanded):i.add(a.Lu.Normal),{...t,defaultWidthAtExpanded:n,widthGradesIncluded:i}}(n.widths,t)),isJsonMap(n.slopes)&&(t=function(e,t){let i=new Set;for(let[t,n]of Object.entries(e))if(isJsonMap(n)&&"string"==typeof n.shape)for(let[e,t]of a.dm)t.internal===n.shape&&i.add(e);return t={...t,slopeGradesIncluded:i}}(n.slopes,t)));return t}function isJsonMap(e){return!!e&&"object"==typeof e&&!(e instanceof Array)&&!(e instanceof Date)}function formatBuildPlan(e){let t={family:e.family,spacing:a._H.get(e.spacing).internal,serifs:a.xE.get(e.serifStyle).internal,"no-cv-ss":!e.fExportCvSs,"export-glyph-names":e.fExportGlyphNames};return e.ligationSet.selector||(t["no-ligation"]=!0),function(e,t){let i={};for(let t of(e.charVariants.inherits&&(i.inherits=e.charVariants.inherits.key),l.AT)){let n=e.charVariants[t];if(!n||!Object.keys(n).length)continue;let a={};for(let[e,t]of s.D)n[e]&&(a[e]=n[e]);i[t]=a}Object.keys(i).length&&(t.variants=i)}(e,t),e.ligationSet.selector&&e.ligationSet!==r.cy[1]&&(t.ligations={inherits:e.ligationSet.selector}),function(e,t){let i=!0,n={};for(let[t,s]of a.Id)e.weightGradesIncluded.has(t)?n[s.internal]={shape:t,menu:t,css:t}:i=!1;i||(t.weights=n)}(e,t),function(e,t){let i=!e.defaultWidthAtExpanded,n={};for(let[t,s]of a.FL)if(e.widthGradesIncluded.has(t)!==a.PE.has(t)&&(i=!1),e.widthGradesIncluded.has(t)){let i=t*(e.defaultWidthAtExpanded?500/600:1),s=a.Lu.Normal,r=a.Db.get(s);for(let[e,t]of a.Db)Math.abs(e-i)<Math.abs(s-i)&&(s=e,r=t);n[r.internal]={shape:t,menu:r.menu,css:r.css}}i||(t.widths=n)}(e,t),function(e,t){let i=!0,n={};for(let[t,s]of a.dm)e.slopeGradesIncluded.has(t)?n[s.internal]={angle:s.angle,shape:s.internal,menu:s.internal,css:s.css}:i=!1;i||(t.slopes=n)}(e,t),t}function resolveDisplayStyle(e){switch(e.serifStyle){case a.Hn.Sans:if(e.spacing===a.Ki.QuasiProportional)return a.bg.QP;if(e.spacing===a.Ki.QuasiProportionalExtOnly)return a.bg.QPE;return a.bg.Sans;case a.Hn.Slab:if(e.spacing===a.Ki.QuasiProportional)return a.bg.QPSlab;if(e.spacing===a.Ki.QuasiProportionalExtOnly)return a.bg.QPESlab;return a.bg.Slab}}function slopeToCustomizerStyleKey(e){switch(e){case a.m3.Upright:return"design";case a.m3.Italic:return"italic";case a.m3.Oblique:return"oblique";default:return"design"}}function getResolvedBuildPlanCharVariants(e,t){let i=l.yL(e.charVariants,{isSlab:e.serifStyle===a.Hn.Slab,slope:a.m3.Upright}),n=l.yL(e.charVariants,{isSlab:e.serifStyle===a.Hn.Slab,slope:a.m3.Italic}),s=l.yL(e.charVariants,{isSlab:e.serifStyle===a.Hn.Slab,slope:a.m3.Oblique});if(!t)return{design:i.resolvedNonDefaultComposition,italic:n.resolvedNonDefaultComposition,oblique:s.resolvedNonDefaultComposition};{let e=l.eu(n.resolvedComposition,i.resolvedComposition),t=l.eu(s.resolvedComposition,i.resolvedComposition),a={design:l.oU(i.resolvedNonDefaultComposition),...e?{italic:e}:{},...t?{oblique:t}:{}};return a}}function dropInheritedCvs(e){return{...e,charVariants:getResolvedBuildPlanCharVariants(e,!1)}}},3484:function(e,t,i){"use strict";i.d(t,{M:function(){return useStatePtr},_:function(){return s}});var n=i(7294);let s={Default:e=>({val:e,set:()=>{}}),Lens:(e,t)=>({val:e.val[t],set:i=>{i instanceof Function?e.set(e=>({...e,[t]:i(e[t])})):e.set(e=>({...e,[t]:i}))}})};function useStatePtr(e){let[t,i]=(0,n.useState)(e);return{val:t,set:i}}}},function(e){e.O(0,[774,637,426,99,888,179],function(){return e(e.s=9002)}),_N_E=e.O()}]);