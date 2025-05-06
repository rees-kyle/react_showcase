"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[873],{1873:(e,n,r)=>{r.r(n),r.d(n,{default:()=>y});var o=r(579);const t=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"underline",children:"Emotion"}),(0,o.jsx)("p",{children:"Emotion is a powerful CSS-in-JS library for styling components in React. It allows you to write CSS directly within your JavaScript and can be particularly helpful in creating dynamic and themeable components."})]}),i=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Setup"}),(0,o.jsx)("p",{children:"To install Emotion, you can use either npm or yarn in BASH."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"npm install @emotion/react @emotion/styled"})})]}),s=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Using Emotion in React"}),(0,o.jsx)("p",{children:"There are two primary ways to use Emotion:"}),(0,o.jsx)("h3",{children:"@emotion/react"}),(0,o.jsx)("p",{children:"Used for the css prop and creating styled components."}),(0,o.jsx)("h3",{children:"@emotion/styled"}),(0,o.jsx)("p",{children:"Used for building styled components similar to the Styled Components library."})]});var c=r(3290),d=r(8590);const l=()=>(0,d.FD)("div",{children:[(0,d.Y)("br",{}),(0,d.Y)("hr",{}),(0,d.Y)("h2",{children:"The 'CSS' Prop"}),(0,d.Y)("p",{children:"The 'css' prop allows you to add CSS styles directly to your component."}),(0,d.Y)("h3",{children:"Code:"}),(0,d.Y)("pre",{children:(0,d.Y)("code",{children:"/** @jsxImportSource @emotion/react */\n\nimport { css } from '@emotion/react';\n\nconst CSSProp = () => (\n  <div\n    css={css`\n      background-color: #CCCCCC;\n      padding: 20px;\n      border-radius: 5px;\n      text-align: center;\n      color: rgb(52, 52, 52);\n      font-weight: bold;\n      font-size: 18px;\n    `}\n  >\n    Hello Emotion!\n  </div>\n);\n\nexport default CSSProp;\n"})}),(0,d.Y)("h3",{children:"Output:"}),(0,d.Y)("div",{css:c.AH`
        background-color: #CCCCCC;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        color: rgb(52, 52, 52);
        font-weight: bold;
        font-size: 18px;
      `,children:"Hello Emotion!"})]});var a=r(8750);const h=a.A.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 0.3rem;

  &:hover {
    background-color: #45a049;
  }
`,m=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Styled Components with Emotion"}),(0,o.jsx)("p",{children:"You can also create reusable styled components with '@emotion/styled'."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"import styled from '@emotion/styled';\n\nconst Button = styled.button`\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.2rem;\n  margin: 0rem 1rem;\n  margin-bottom: 2rem;\n  cursor: pointer;\n  border-radius: 0.3rem;\n\n  &:hover {\n    background-color: #45a049;\n  }\n`;\n\n\nconst StyledComponents = () => (\n  <div>\n    <Button type=\"button\">Click Me</Button>\n  </div>\n);\n\nexport default StyledComponents;\n"})}),(0,o.jsx)("h3",{children:"Output:"}),(0,o.jsx)(h,{type:"button",children:"Click Me"})]});var p=r(2432);const x={colors:{primary:"#9067C6",secondary:"#7A54A3"}},u=a.A.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>{let{theme:n}=e;return n.colors.primary}};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${e=>{let{theme:n}=e;return n.colors.secondary}};
  }
`,j=()=>(0,o.jsx)(p.a,{theme:x,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Theming with Emotion"}),(0,o.jsx)("p",{children:"Emotion supports themes that can be passed through React\u2019s ThemeProvider."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"import { ThemeProvider } from '@emotion/react';\nimport styled from '@emotion/styled';\n\nconst theme = {\n  colors: {\n    primary: '#9067C6',\n    secondary: '#7A54A3'\n  }\n};\n\nconst Button = styled.button`\n  padding: 0.5rem 1rem;\n  background-color: ${({ theme }) => theme.colors.primary};  \n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.2rem;\n  margin: 0rem 1rem;\n  margin-bottom: 2rem;\n  cursor: pointer;\n  border-radius: 0.3rem;\n\n  &:hover {\n    background-color: ${({ theme }) => theme.colors.secondary};    \n  }\n`;\n\n\nconst Theming = () => (\n  <ThemeProvider theme={theme}>\n    <div>\n      <Button type=\"button\">Click Me</Button>\n    </div>\n  </ThemeProvider>\n);\n\nexport default Theming;\n"})}),(0,o.jsx)("h3",{children:"Output:"}),(0,o.jsx)(u,{type:"button",children:"Click Me"})]})}),b=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Summary"}),(0,o.jsx)("p",{children:"Emotion\u2019s flexibility with themes, the 'css' prop, and styled components makes it a versatile tool for styling React applications. This approach helps keep styles scoped and reduces the potential for styling conflicts, especially in large projects."})]}),y=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{}),(0,o.jsx)(i,{}),(0,o.jsx)(s,{}),(0,o.jsx)(l,{}),(0,o.jsx)(m,{}),(0,o.jsx)(j,{}),(0,o.jsx)(b,{})]})}}]);
//# sourceMappingURL=873.13d8f1db.chunk.js.map