"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[6676],{1056:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(5893),r=o(1151);const a={title:"convertPathData",svgo:{pluginId:"convertPathData",defaultPlugin:!0,parameters:{applyTransforms:{description:"If to apply transforms.",default:!0},applyTransformsStroked:{description:"If to apply transforms to paths with a stroke.",default:!0},makeArcs:{description:"If to convert from curves to arcs when possible. This is an object with two properties, <code>threshold</code> and <code>tolerance</code>."},straightCurves:{description:"If to convert curve commands that are effectively straight lines to line commands.",default:!0},convertToQ:{description:"If to convert cubic beziers to quadratic beziers when they effectively are.",default:!0},lineShorthands:{description:"If to convert regular lines to an explicit horizontal or vertical line where possible.",default:!0},convertToZ:{description:"If to convert lines that go to the start to a <code>z</code> command.",default:!0},curveSmoothShorthands:{description:"If to convert curves to smooth curves where possible.",default:!0},floatPrecision:{description:"Number of decimal places to round to, using conventional rounding rules.",default:3},transformPrecision:{description:"Number of decimal places to round to, using conventional rounding rules.",default:5},smartArcRounding:{description:'Round the radius of circular arcs when the effective change is under the error. The effective change is determined using the <a href="https://wikipedia.org/wiki/Sagitta_(geometry)" target="_blank">sagitta</a> of the arc.',default:!0},removeUseless:{description:"Remove redundant path commands that don't draw anything.",default:!0},collapseRepeated:{description:"Collapse repeated commands when they can be merged into one.",default:!0},utilizeAbsolute:{description:"If to convert between absolute or relative coordinates, whichever is shortest.",default:!0},negativeExtraSpace:{default:!0},forceAbsolutePath:{description:"If to always convert to absolute coordinates, even if it adds more bytes.",default:!1}}}},i=void 0,s={id:"plugins/convertPathData",title:"convertPathData",description:"Optimize path commands found in `, , and  elements. Path commands are the syntax used in the d` attribute, each character represents an instruction to draw paths.",source:"@site/.svgo/docs/03-plugins/convertPathData.mdx",sourceDirName:"03-plugins",slug:"/plugins/convertPathData",permalink:"/docs/plugins/convertPathData",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/convertPathData.mdx",tags:[],version:"current",frontMatter:{title:"convertPathData",svgo:{pluginId:"convertPathData",defaultPlugin:!0,parameters:{applyTransforms:{description:"If to apply transforms.",default:!0},applyTransformsStroked:{description:"If to apply transforms to paths with a stroke.",default:!0},makeArcs:{description:"If to convert from curves to arcs when possible. This is an object with two properties, <code>threshold</code> and <code>tolerance</code>."},straightCurves:{description:"If to convert curve commands that are effectively straight lines to line commands.",default:!0},convertToQ:{description:"If to convert cubic beziers to quadratic beziers when they effectively are.",default:!0},lineShorthands:{description:"If to convert regular lines to an explicit horizontal or vertical line where possible.",default:!0},convertToZ:{description:"If to convert lines that go to the start to a <code>z</code> command.",default:!0},curveSmoothShorthands:{description:"If to convert curves to smooth curves where possible.",default:!0},floatPrecision:{description:"Number of decimal places to round to, using conventional rounding rules.",default:3},transformPrecision:{description:"Number of decimal places to round to, using conventional rounding rules.",default:5},smartArcRounding:{description:'Round the radius of circular arcs when the effective change is under the error. The effective change is determined using the <a href="https://wikipedia.org/wiki/Sagitta_(geometry)" target="_blank">sagitta</a> of the arc.',default:!0},removeUseless:{description:"Remove redundant path commands that don't draw anything.",default:!0},collapseRepeated:{description:"Collapse repeated commands when they can be merged into one.",default:!0},utilizeAbsolute:{description:"If to convert between absolute or relative coordinates, whichever is shortest.",default:!0},negativeExtraSpace:{default:!0},forceAbsolutePath:{description:"If to always convert to absolute coordinates, even if it adds more bytes.",default:!1}}}},sidebar:"docsSidebar",previous:{title:"convertOneStopGradients",permalink:"/docs/plugins/convertOneStopGradients"},next:{title:"convertShapeToPath",permalink:"/docs/plugins/convertShapeToPath"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Optimize path commands found in ",(0,n.jsx)(t.code,{children:"<path>"}),", ",(0,n.jsx)(t.code,{children:"<glyph>"}),", and ",(0,n.jsx)(t.code,{children:"<missing-glyph>"})," elements. Path commands are the syntax used in the ",(0,n.jsx)(t.code,{children:"d"})," attribute, each character represents an instruction to draw paths."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can get more context on path commands on ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/d#path_commands",children:"MDN Web Docs"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"This plugin uses multiple techniques to either reduce the number of instructions or reduce the attribute length:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Convert between relative or absolute coordinates, whichever is shortest."}),"\n",(0,n.jsx)(t.li,{children:"Convert between commands. For example, a b\xe9zier curve that behaves like a straight line might as well use a line instruction."}),"\n",(0,n.jsx)(t.li,{children:"Remove redundant commands. For example, a command that moves to the current position can be removed."}),"\n",(0,n.jsx)(t.li,{children:"Trim redundant delimiters and leading zeros."}),"\n",(0,n.jsx)(t.li,{children:"Round numeric values using conventional rounding rules."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can read more about the plugins capabilities by going through the individual parameters."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>i});var n=o(7294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);