var R=Object.create;var c=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var O=e=>c(e,"__esModule",{value:!0});var S=(e,r,s,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of v(r))!F.call(e,o)&&(s||o!=="default")&&c(e,o,{get:()=>r[o],enumerable:!(t=E(r,o))||t.enumerable});return e},x=(e,r)=>S(O(c(e!=null?R(h(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var p=x(require("fs")),n="src/app/feature/";var T="src/app/core",g="src/app/shared";function d(e){return{ImportDeclaration(r){let s=I(n),t=e.getFilename(),o=t.indexOf(n)>1&&s.find(a=>(r.source.value.toString().startsWith("@".concat(a))||r.source.value.toString().startsWith(n.concat(a)))&&t.indexOf(n.concat(a))<1),i=(t.indexOf(T)>1||t.indexOf(g)>1)&&s.find(a=>r.source.value.toString().startsWith("@".concat(a))||r.source.value.toString().startsWith(n.concat(a)));o&&e.report({node:r,message:"import statement forbidden, no import between features allowed"}),i&&e.report({node:r,message:"import statement forbidden, no import of features allowed in core or shared"})}}}function I(e){return p.readdirSync(e)}var C="src/app/feature/";function m(e){return{ExportNamedDeclaration(r){e.getFilename().indexOf(C)>1&&(r.declaration.decorators||[]).forEach(i=>{i.expression.arguments.forEach(u=>{u&&u.properties.forEach(f=>{f.key.name==="providedIn"&&f.value.value==="root"&&e.report({node:r,message:"providedIn:'root' statement forbidden for feature service"})})})})}}}module.exports={rules:{"no-feature-imports":{create:d},"no-feature-service-provided-root":{create:m}}};
