"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[375],{375:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var o=t(579);const s=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"underline",children:"Memoization"}),(0,o.jsx)("p",{children:"React provides 'React.memo' as a way to optimize functional components by memoizing their output. This is particularly helpful when you have components that receive the same props frequently, as it can help reduce unnecessary re-renders."})]}),r=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"How It Works"}),(0,o.jsx)("p",{children:"'React.memo' is a higher-order component (HOC) that only re-renders the component if its props change. If the same props are passed again, React reuses the previous render, making your component faster by avoiding unnecessary updates."})]});var a=t(5043);const c=a.memo((e=>{let{value:n}=e;return console.log("Rendering MyComponent with value:",n),(0,o.jsx)("h1",{children:n})})),i=()=>{const[e,n]=(0,a.useState)(0),[t,s]=(0,a.useState)("Hello Memo!");return console.log("ParentComponent Rendered | count:",e,"| value:",t),(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Basic Usage"}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"// MyComponent.js\nimport React from 'react';\n\nconst MyComponent = React.memo(({ value }) => {\n  console.log(\"Rendering MyComponent with value:\", value);\n  return <h1>{value}</h1>;\n});\n\nexport default MyComponent;\n"})}),(0,o.jsx)("br",{}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"// BasicUsage.js\nimport React, { useState } from 'react';\nimport MyComponent from './MyComponent';\n\nconst BasicUsage = () => {\n  const [count, setCount] = useState(0);\n  const [value, setValue] = useState('Hello Memo!');\n\n  console.log(\"ParentComponent Rendered | count:\", count, \"| value:\", value);\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>\n        Increase Count\n      </button>\n      <button onClick={() => setValue('Value Updated!')}>\n        Change Value\n      </button>\n      <h1 className=\"output\">Count: {count}</h1>\n      <div className=\"output\">\n        <MyComponent value={value} />\n      </div>\n    </div>\n  );\n};\n\nexport default BasicUsage;\n"})}),(0,o.jsx)("h3",{children:"Output:"}),(0,o.jsx)("button",{onClick:()=>n(e+1),children:"Increase Count"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:()=>s("Value Updated!"),children:"Change Value"}),(0,o.jsxs)("h1",{className:"output",children:["Count: ",e]}),(0,o.jsx)("div",{className:"output",children:(0,o.jsx)(c,{value:t})}),(0,o.jsx)("h1",{className:"output",children:"You can use the browser\u2019s developer tools (Inspect) to view console messages for this example."}),(0,o.jsx)("p",{children:"In this example, 'BasicUsage' (the parent component) re-renders whenever its state (count or value) changes. However, thanks to React.memo, MyComponent only re-renders when its specific prop (value) changes."})]})},h=a.memo((e=>{let{obj:n}=e;return console.log("Rendering MyComponent"),(0,o.jsx)("h1",{className:"output",children:n.text})}),((e,n)=>e.obj.id===n.obj.id)),l=()=>{const[e,n]=(0,a.useState)({id:1,text:"Hello"});return(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Custom Comparison Function"}),(0,o.jsx)("p",{children:"Sometimes, you may need a custom comparison function to determine whether the props are the same. You can pass a second argument to 'React.memo' to control this behavior."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:'import React, { useState } from \'react\';\n\nconst MyComponent = React.memo(({ obj }) => {\n  console.log("Rendering MyComponent");\n  return <h1 className="output">{obj.text}</h1>;\n}, (prevProps, nextProps) => prevProps.obj.id === nextProps.obj.id);\n\nconst CustomComparisonFunction = () => {\n  const [obj, setObj] = useState({ id: 1, text: "Hello" });\n\n  const changeText = () => {\n    setObj(prev => {\n      const newObj = { ...prev, text: "Updated text!" };\n      console.log("Text changed to:", newObj.text);\n      return newObj;\n    });\n  };\n\n  const changeId = () => setObj(prev => ({ ...prev, id: prev.id + 1 }));\n\n  return (\n    <div>\n      <button onClick={changeText}>Change Text</button>\n      <br/>\n      <button onClick={changeId}>Change ID</button>\n      <MyComponent obj={obj} />\n    </div>\n  );\n};\n\nexport default CustomComparisonFunction;\n'})}),(0,o.jsx)("h3",{children:"Output:"}),(0,o.jsx)("button",{onClick:()=>{n((e=>{const n={...e,text:"Updated text!"};return console.log("Text changed to:",n.text),n}))},children:"Change Text"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:()=>n((e=>({...e,id:e.id+1}))),children:"Change ID"}),(0,o.jsx)(h,{obj:e}),(0,o.jsx)("h1",{className:"output",children:"You can use the browser\u2019s developer tools (Inspect) to view console messages for this example."}),(0,o.jsx)("p",{children:"In this example, MyComponent only re-renders when the id of the obj prop changes. When the text property is updated, the component doesn't re-render because the id stays the same."})]})},d=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"When To Use"}),(0,o.jsx)("p",{children:"Use 'React.memo' when a component always gives the same result with the same props, and those props don't change much. It helps stop the component from re-rendering when it doesn\u2019t need to."}),(0,o.jsx)("p",{children:"You should also use 'React.memo' if you notice components are re-rendering even though their props stay the same. This can make your app run faster by avoiding extra work."})]}),p=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"When Not To Use"}),(0,o.jsx)("p",{children:"Avoid using 'React.memo' for components that frequently change their props. In these cases, memoization won\u2019t help and might even slow things down slightly."}),(0,o.jsx)("p",{children:"For complex or deeply nested components, React.memo can add a bit of overhead. Only use it when you see real performance improvements in your app."})]}),u=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Summary"}),(0,o.jsx)("p",{children:"Using 'React.memo' effectively can lead to noticeable improvements, especially in large applications."})]}),m=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(r,{}),(0,o.jsx)(i,{}),(0,o.jsx)(l,{}),(0,o.jsx)(d,{}),(0,o.jsx)(p,{}),(0,o.jsx)(u,{})]})}}]);
//# sourceMappingURL=375.34dfa835.chunk.js.map