"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[383],{7383:(n,e,r)=>{r.r(e),r.d(e,{default:()=>j});var o=r(579);const t=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"underline",children:"Styled Components"}),(0,o.jsx)("p",{children:"Using styled-components in React is a popular way to style components with a clean, modular approach. Styled-components allow you to create custom, reusable components with encapsulated styles."})]}),s=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Installing"}),(0,o.jsx)("p",{children:"First, you\u2019ll need to install the package by running the following command in Bash."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"npm install styled-components"})})]});var i=r(5464);const d=i.Ay.button`
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
`,l=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Creating Styled Components"}),(0,o.jsx)("p",{children:"Once installed, you can create styled components directly in your JavaScript file. Each styled component is essentially a React component with styles applied to it."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"import styled from 'styled-components';\n\nconst Button = styled.button`\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.2rem;\n  margin: 0rem 1rem;\n  margin-bottom: 2rem;\n  cursor: pointer;\n  border-radius: 0.3rem;\n\n  &:hover {\n    background-color: #45a049;\n  }\n`;\n"})}),(0,o.jsx)("h2",{children:"Using Styled Components in Your Components"}),(0,o.jsx)("p",{children:"Now, you can use your styled Button component like any other React component."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"const CreateAndUse = () => {\n  return (\n    <div>\n      <Button>Click Me</Button>\n    </div>\n  );\n};\n\nexport default CreateAndUse;\n"})}),(0,o.jsx)("h3",{children:"Output:"}),(0,o.jsx)(d,{children:"Click Me"})]}),c=i.Ay.button`
  /* Set background color based on the 'primary' prop */
  background-color: ${n=>n.primary?"#E07A5F":"#008CBA"};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  /* Change background color on hover, based on the 'primary' prop */
  &:hover {
    background-color: ${n=>n.primary?"#B75C43":"#005f73"};
  }
`,a=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Passing Props to Styled Components"}),(0,o.jsx)("p",{children:"You can also make your styled components dynamic by passing props. For instance, changing the button color based on a 'primary' prop."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"import styled from 'styled-components';\n\nconst Button = styled.button`\n  background-color: ${props => props.primary ? '#E07A5F' : '#008CBA'};\n  color: white;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.3rem;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 0.3rem;\n  font-size: 1.2rem;\n  margin: 0rem 1rem;\n  margin-bottom: 2rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ${props => props.primary ? '#B75C43' : '#005f73'};\n  }\n`;\n"})}),(0,o.jsx)("p",{children:"Now, pass the 'primary' prop to control the button\u2019s style."}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"const PassingProps = () => {\n  return (\n    <div>\n      <Button primary>Primary Button</Button>\n      <br/>\n      <Button>Default Button</Button>\n    </div>\n  );\n};\n\nexport default PassingProps;\n"})}),(0,o.jsx)("h3",{children:"Output:"}),(0,o.jsx)(c,{primary:!0,children:"Primary Button"}),(0,o.jsx)("br",{}),(0,o.jsx)(c,{children:"Default Button"})]}),p=i.Ay.button`
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
`,h=(0,i.Ay)(p)`
  background-color: #9067C6;

  &:hover {
    background-color: #7A54A3;
  }
`,m=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Extending Styled Components"}),(0,o.jsx)("p",{children:"Styled-components also let you extend existing styles easily."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"const ExtendedButton = styled(Button)`\n  background-color: #9067C6;\n\n  &:hover {\n    background-color: #7A54A3;\n  }\n`;\n\n\nconst Extending = () => {\n  return (\n    <div>\n      <ExtendedButton>Extended Button</ExtendedButton>\n    </div>\n  );\n};\n\nexport default Extending;\n"})}),(0,o.jsx)("h3",{children:"Output:"}),(0,o.jsx)(h,{children:"Extended Button"})]}),u=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Global Styles"}),(0,o.jsx)("p",{children:"If you want to apply global styles across your app, you can use 'createGlobalStyle'."}),(0,o.jsx)("h3",{children:"Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"import { createGlobalStyle } from 'styled-components';\n\nconst GlobalStyle = createGlobalStyle`\n  body {\n    font-family: Arial, sans-serif;\n    background-color: #f5f5f5;\n    margin: 0;\n    padding: 0;\n  }\n`;\n\n\nconst App = () => (\n  <>\n    <GlobalStyle />\n    <Button>Button with Global Styles</Button>\n  </>\n);\n\nexport default App;\n"})})]}),x=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Tips for Using Styled Components"}),(0,o.jsx)("h3",{children:"Consistent Theming"}),(0,o.jsx)("p",{children:"Use themes to maintain consistency across your app."}),(0,o.jsx)("h3",{children:"Scoped Styling"}),(0,o.jsx)("p",{children:"Since each component's styles are scoped to that component, it helps avoid unintended style bleeding."}),(0,o.jsx)("h3",{children:"Dynamic Styling"}),(0,o.jsx)("p",{children:"Pass props to components to create reusable, adaptable styles."})]}),y=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:"Summary"}),(0,o.jsx)("p",{children:"This approach gives your components modular, readable, and maintainable styles while keeping the styling concerns scoped and organized in your React project."})]}),j=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{}),(0,o.jsx)(s,{}),(0,o.jsx)(l,{}),(0,o.jsx)(a,{}),(0,o.jsx)(m,{}),(0,o.jsx)(u,{}),(0,o.jsx)(x,{}),(0,o.jsx)(y,{})]})}}]);
//# sourceMappingURL=383.9ca24352.chunk.js.map