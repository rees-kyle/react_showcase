---
id: 6em56ge5ecy057qyly20bjc
title: File Structure
desc: ''
updated: 1730857780871
created: 1730855010677
---

react_showcase/
├── src/
│   ├── examples/              # Folder for examples on each concept
│   │   ├── Basics/
│   │   │   ├── JSXExample.js      # Example of JSX syntax
│   │   │   └── ComponentProps.js  # Example of components and props
│   │   ├── State/
│   │   │   ├── UseStateExample.js # Example of useState
│   │   │   └── UseReducerExample.js # Example of useReducer
│   │   ├── Lifecycle/
│   │   │   ├── UseEffectExample.js # Example of useEffect
│   │   │   └── UseLayoutEffectExample.js # Example of useLayoutEffect
│   │   ├── Routing/
│   │   │   ├── RoutingExample.js    # Example of React Router
│   │   │   └── NestedRoutes.js      # Example of nested routes
│   │   ├── Forms/
│   │   │   ├── ControlledForm.js    # Controlled form example
│   │   │   └── UncontrolledForm.js  # Uncontrolled form example
│   │   ├── API/
│   │   │   ├── FetchExample.js      # Fetching data with fetch
│   │   │   └── AxiosExample.js      # Fetching data with Axios
│   │   ├── Performance/
│   │   │   ├── MemoExample.js       # React.memo example
│   │   │   └── UseCallbackExample.js # useCallback example
│   │   └── Testing/
│   │       ├── JestTestExample.js   # Example Jest test
│   │       └── ComponentTestExample.js # Example of component test with RTL
│   ├── App.js                      # Root component with links to examples
│   ├── index.js                    # Entry point
└── package.json



src/
├── assets/                        # Static files like images, fonts, etc.
├── components/                    # Reusable components
│   ├── Header.js                  # Example of a reusable header component
│   ├── Footer.js                  # Example of a footer component
│   └── Button.js                  # Example of a reusable button component
├── examples/                      # Folder for examples of React concepts
│   ├── Basics/
│   │   ├── JSXExample.js
│   │   └── ComponentProps.js
│   ├── State/
│   │   ├── UseStateExample.js
│   │   └── UseReducerExample.js
│   └── ... (more examples)
├── styles/                        # Global or shared CSS files
│   ├── App.css                    # Global styles
│   ├── Header.css                 # Specific styles for Header component
│   └── Button.css                 # Specific styles for Button component
├── App.js                         # Root component
├── index.js                       # Entry point for React
└── package.json                   # Project configuration
