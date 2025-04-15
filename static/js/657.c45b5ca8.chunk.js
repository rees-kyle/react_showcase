"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[657],{9657:(e,s,o)=>{o.r(s),o.d(s,{default:()=>x});var n=o(579);const t=()=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"underline",children:"Fetching Data"}),(0,n.jsx)("p",{children:"Fetching data from an API is a core skill in JavaScript and React projects. Here\u2019s a quick overview of how to do it with both 'fetch' and 'axios'."})]});var r=o(5043);const a=()=>((0,r.useEffect)((()=>{fetch("https://jsonplaceholder.typicode.com/posts/1").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log("Fetched data:",e)})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("hr",{}),(0,n.jsx)("h2",{children:"Using 'fetch'"}),(0,n.jsx)("p",{children:"The 'fetch' API is native to JavaScript and returns a 'Promise'."}),(0,n.jsx)("h3",{children:"Code:"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// fetchData.js\nexport const fetchData = () => {\n  fetch('https://jsonplaceholder.typicode.com/posts/1')\n    .then(response => {\n      if (!response.ok) {\n        throw new Error('Network response was not ok');\n      }\n      return response.json();\n    })\n    .then(data => {\n      console.log('Fetched data:', data);\n    })\n    .catch(error => {\n      console.error('There was a problem with the fetch operation:', error);\n    });\n};\n"})}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// UsingFetch.js\nimport { useEffect } from 'react';\nimport { fetchData } from '../../../api/fetchData';\n\nconst UsingFetch = () => {\n  useEffect(() => {\n    fetchData();\n  }, []);\n\n  return (\n    <div>\n      <h1 className=\"output\">\n        You can use the browser\u2019s developer tools (Inspect) to view console messages for this example.\n      </h1>\n    </div>\n  );\n};\n\nexport default UsingFetch;\n"})}),(0,n.jsx)("h1",{className:"output",children:"You can use the browser\u2019s developer tools (Inspect) to view console messages for this example."})]})),c=()=>((0,r.useEffect)((()=>{(async()=>{try{const e=await fetch("https://jsonplaceholder.typicode.com/posts/1");if(!e.ok)throw new Error("Network response was not ok");const s=await e.json();console.log("Fetched data:",s)}catch(e){console.error("There was a problem with the fetch operation:",e)}})()}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("hr",{}),(0,n.jsx)("h2",{children:"Using 'fetch' with Async/Await"}),(0,n.jsx)("h3",{children:"Code:"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// fetchDataAsyncAwait.js\nexport const fetchDataAsyncAwait = async () => {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    const data = await response.json();\n    console.log('Fetched data:', data);\n  } catch (error) {\n    console.error('There was a problem with the fetch operation:', error);\n  }\n};\n"})}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// UsingFetchAsyncAwait.js\nimport { useEffect } from 'react';\nimport { fetchDataAsyncAwait } from '../../../api/fetchDataAsyncAwait';\n\nconst UsingFetchAsyncAwait = () => {\n  useEffect(() => {\n    fetchDataAsyncAwait();\n  }, []);\n\n  return (\n    <div>\n      <h1 className=\"output\">\n        You can use the browser\u2019s developer tools (Inspect) to view console messages for this example.\n      </h1>\n    </div>\n  );\n};\n\nexport default UsingFetchAsyncAwait;\n"})}),(0,n.jsx)("h1",{className:"output",children:"You can use the browser\u2019s developer tools (Inspect) to view console messages for this example."})]}));var i=o(6213);const h=()=>((0,r.useEffect)((()=>{i.A.get("https://jsonplaceholder.typicode.com/posts/1").then((e=>{console.log("Fetched data:",e.data)})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("hr",{}),(0,n.jsx)("h2",{children:"Using 'Axios'"}),(0,n.jsx)("p",{children:"'axios' is a popular library for making HTTP requests. It\u2019s easier to use than 'fetch' in some ways because it automatically transforms the response to JSON and simplifies error handling."}),(0,n.jsx)("h3",{children:"Code:"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"# Navigate to project directory and install axios in BASH if you haven't done so already\nnpm install axios\n"})}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// fetchDataAxios.js\nimport axios from 'axios';\n\nexport const fetchDataAxios = () => {\n  axios.get('https://jsonplaceholder.typicode.com/posts/1')\n    .then(response => {\n      console.log('Fetched data:', response.data);\n    })\n    .catch(error => {\n      console.error('There was a problem with the fetch operation:', error);\n    });\n};\n"})}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// UsingAxios.js\nimport { useEffect } from 'react';\nimport { fetchDataAxios } from '../../../api/fetchDataAxios';\n\nconst UsingAxios = () => {\n  useEffect(() => {\n    fetchDataAxios();\n  }, []);\n\n  return (\n    <div>\n      <h1 className=\"output\">\n        You can use the browser\u2019s developer tools (Inspect) to view console messages for this example.\n      </h1>\n    </div>\n  );\n};\n\nexport default UsingAxios;\n"})}),(0,n.jsx)("h1",{className:"output",children:"You can use the browser\u2019s developer tools (Inspect) to view console messages for this example."})]})),l=()=>((0,r.useEffect)((()=>{(async()=>{await(async()=>{try{const e=await i.A.get("https://jsonplaceholder.typicode.com/posts/1");console.log("Fetched data:",e.data)}catch(e){console.error("There was a problem with the fetch operation:",e)}})()})()}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("hr",{}),(0,n.jsx)("h2",{children:"Using 'Axios' with Async/Await"}),(0,n.jsx)("h3",{children:"Code:"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// fetchDataAxiosAsyncAwait.js\nimport axios from 'axios';\n\nexport const fetchDataAxiosAsyncAwait = async () => {\n  try {\n    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');\n    console.log('Fetched data:', response.data);\n  } catch (error) {\n    console.error('There was a problem with the fetch operation:', error);\n  }\n};\n"})}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"// UsingAxiosAsyncAwait.js\nimport { useEffect } from 'react';\nimport { fetchDataAxiosAsyncAwait } from '../../../api/fetchDataAxiosAsyncAwait';\n\nconst UsingAxiosAsyncAwait = () => {\n  useEffect(() => {\n    const fetchData = async () => {\n      await fetchDataAxiosAsyncAwait();\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <div>\n      <h1 className=\"output\">\n        You can use the browser\u2019s developer tools (Inspect) to view console messages for this example.\n      </h1>\n    </div>\n  );\n};\n\nexport default UsingAxiosAsyncAwait;\n"})}),(0,n.jsx)("h1",{className:"output",children:"You can use the browser\u2019s developer tools (Inspect) to view console messages for this example."})]})),p=()=>(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("hr",{}),(0,n.jsx)("h2",{children:"Key Differences"}),(0,n.jsx)("h3",{children:"Error Handling"}),(0,n.jsx)("p",{children:"'fetch' does not throw an error for HTTP errors (like '404' or '500'), whereas 'axios' does."}),(0,n.jsx)("h3",{children:"Response Parsing"}),(0,n.jsx)("p",{children:"'fetch' requires '.json()' to parse the response, while 'axios' automatically parses it for JSON responses."}),(0,n.jsx)("h3",{children:"Interceptors"}),(0,n.jsx)("p",{children:"'axios' supports interceptors to modify requests or responses globally, which is useful for handling authentication."})]}),d=()=>(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("hr",{}),(0,n.jsx)("h2",{children:"Summary"}),(0,n.jsx)("p",{children:"Both approaches work well, so choose based on your project\u2019s needs and personal preference."})]}),x=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{}),(0,n.jsx)(a,{}),(0,n.jsx)(c,{}),(0,n.jsx)(h,{}),(0,n.jsx)(l,{}),(0,n.jsx)(p,{}),(0,n.jsx)(d,{})]})}}]);
//# sourceMappingURL=657.c45b5ca8.chunk.js.map