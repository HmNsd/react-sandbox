# React

- React is a **library**
- React is a **JavaScript library** for building user interfaces, primarily maintained by **Meta (Facebook)**.
- It focuses on building **component-based, declarative, and efficient UIs** for web and mobile applications.

1. Core Idea
- **Build UIs as components** → small, reusable pieces of UI.

- **Declarative** → You describe what the UI should look like, React figures out how to update it.

- **Uses a Virtual DOM** → improves performance by updating only the necessary parts of the UI.


---

#### 1. What is npm?
- Stands for → Node Package Manager

- Purpose → Installs, updates, and manages dependencies in a project.

- Usage:

  - Install packages globally or locally.

  - Run scripts defined in package.json.

Common Commands:

```bash
npm install lodash         # Install lodash locally
npm install -g nodemon     # Install nodemon globally
npm uninstall lodash       # Remove a package
npm run build              # Run a custom script from package.json
 
```
**Key points:**

- npm is for package management.

- Installing globally means the package is available everywhere but might lead to version conflicts.

### What is npx?
- Stands for → Node Package Execute

- Purpose → Runs Node.js packages without requiring a global install.

- Usage:

  - Executes a package binary directly.

  - Downloads and runs a package on the fly if it’s not installed.

  - Runs locally installed package binaries without node_modules/.bin path issues.

Common Commands:

```bash
npx create-react-app my-app   # Runs the latest create-react-app without installing globally
npx eslint myfile.js          # Uses eslint from local node_modules
npx serve                     # Serves a local static site

```
> **Note**
> - Never use npx CRA: its a legacy way it provide full bundle having huge package size, Instead.
> 
> - Use Vite to CRA: it Grabs `react` and `react-dom` from npm, set up your custom build process with these bundler like `vite` and `parcel`.

**Key points:**

- Saves disk space (no permanent global install).

- Always uses the latest version unless you specify one.

- Handy for one-time commands like project scaffolding.

### When to Use What

- Use npm when:

  - You want the package available for repeated use.

  - You need to add it as a dependency in package.json.

- Use npx when:

  - You want to run a package once without permanent install.

  - You want to avoid version conflicts.

  - You need the latest CLI tools for project setup.

--- 


1. Key Features
   
|Feature	|Description |
|--- |--- |
|Component-based	|UI split into reusable building blocks.|
|JSX	|JavaScript + HTML syntax for easy component writing.|
|Virtual DOM	|Efficient UI updates by diffing and batching changes.|
|Unidirectional Data Flow	|Data flows from parent → child (top-down).|
|Hooks	|Functions like useState and useEffect for state and side effects.|
|Ecosystem	|Works with tools like Redux, React Router, Vite, Next.js.|

3. How React Works
- **Initial Render** → React creates a Virtual DOM representation of your UI.

- **Updates** → When state/props change, React compares new Virtual DOM with the old one (diffing).

- **Reconciliation** → React updates only the changed parts in the real DOM.

4. Common Concepts
- **Props** → Read-only data passed from parent to child.

- **State** → Mutable data within a component.

- **Events** → onClick, onChange, etc.

- **Conditional Rendering** → Rendering UI based on conditions.

- **Lists & Keys** → Rendering multiple items efficiently.

- **Hooks** → State and lifecycle features in functional components.


#### Let’s break down React, React DOM, React Native, and Next.js, and show how they relate to each other.

```rust
React         → Core library for building UI components
React DOM     → Renderer for web browsers
React Native  → Renderer for mobile apps (iOS, Android)
Next.js       → Framework on top of React DOM for web with SSR/SSG and routing

```
### React DOM

- **What it is:**
The renderer that tells React how to render components in the browser DOM.

- **Purpose:**
Bridges React with web browsers.

- **Key Point:**
React DOM is separate so React can be reused with other renderers (like React Native).

### React Native

- **What it is:**
A renderer for React that outputs native mobile UI components instead of HTML.

- **Purpose:**
Use React syntax to build Android and iOS apps.

- **Key Point:**
Instead of <div> or <span>, you use <View> and <Text> which map to native mobile components.

### Next.js

- **What it is:**
A React framework for building full-stack web applications.

- **Purpose:**
Adds features React doesn’t have out-of-the-box:

  - Server-Side Rendering (**SSR**)

  - Static Site Generation (**SSG**)

  - API routes

  - Routing system without React Router

- **Key Point:**
Still uses React and React DOM, but handles rendering both on the server and client for performance and SEO.

### React in a Nutshell
- React → The core library for UI.

- React DOM / React Native → Environment-specific renderers.

- Frameworks (Next.js, Remix, Gatsby) → Add routing, SSR, SSG, and backend features.

- Ecosystem → State management, styling, data fetching tools.
---

### Tooling Around React
- Vite → Fast dev server + bundler

- Webpack → Traditional bundler

- Parcel → Zero-config bundler

- ESBuild → Extremely fast JS bundler

---
### State Management Libraries for React
- React’s built-in state is enough for many apps, but larger apps use:

- Redux → Predictable global state container

- Zustand → Minimal state management

- Recoil → Facebook’s state library for fine-grained reactivity

- Jotai → Primitive and flexible state atoms

---
***

### Major Frameworks Built on React

These frameworks add structure, routing, and optimizations on top of React.

a) Next.js
- By: Vercel

- Purpose: Server-Side Rendering (SSR), Static Site Generation (SSG), API routes, file-based routing.

- When to Use: SEO-friendly apps, blogs, e-commerce, dashboards.

b) Remix
- By: Remix team (acquired by Shopify)

- Purpose: Server-first rendering, built-in data fetching with loaders/actions, great for full-stack apps.

- When to Use: Apps needing progressive enhancement, server-driven UI.

c) Gatsby
- By: GatsbyJS

- Purpose: Static Site Generation (SSG) optimized for performance, plugins for CMS integration.

- When to Use: Content-heavy sites (blogs, marketing websites).

d) Blitz.js
- By: Blitz.js community

- Purpose: Full-stack React framework inspired by Ruby on Rails, integrates Prisma ORM.

- When to Use: Full-stack web apps without manually setting up backend API endpoints.

e) RedwoodJS
- By: RedwoodJS team

- Purpose: Opinionated full-stack React + GraphQL + Prisma framework.

- When to Use: SaaS products, startups, apps that need GraphQL from day one.



# Babel in React — what & why

**What it is:** 
Babel is a JavaScript compiler/transpiler. In React projects it’s used to transform JSX and modern JS (ES2015+) into code browsers understand.

**Why you need it**

- JSX → JS (e.g. <MyComp /> → React.createElement(...))

- Transpile modern syntax (arrow functions, classes, optional chaining, etc.) for older browsers

- Use proposals (class fields, decorators) via plugins

**Common setup**

- Packages: @babel/core, @babel/cli (optional), @babel/preset-env, @babel/preset-react

Example .babelrc:

```json
{
  "presets": ["@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
✅ With bundlers:

- Webpack: use babel-loader.

- Vite: uses esbuild by default (faster) but can use Babel for specific plugins.

- Create React App: Babel is configured for you.

- Next.js / Remix: include Babel hooks (if you need custom transforms).

**Tips**

- Use "runtime": "automatic" preset-react to avoid importing React for JSX in modern setups.

- Prefer @babel/preset-env with targets or browserslist so only necessary polyfills/transforms are applied.

- For polyfills, use core-js + useBuiltIns options or rely on tools like polyfill.io / browserslist.


>  Note:
> - Function and Component naming convention should be in Upper camel casing. Ex: Cart.jsx
>  - Extension should be in jsx recommended as its a component and if its exporting or component returned.
> Component means HTML used in jsx.

--- 
---

> FYI

#### Here's a breakdown of common casing types: 

- camelCase: The first letter of the first word is lowercase, and the first letter of each subsequent word is uppercase. Example: myVariableName.
- PascalCase: Also known as UpperCamelCase, the first letter of each word is uppercase. Example: MyClassName.
- snake_case: Words are separated by underscores, and all letters are typically lowercase. Example: my_variable_name.
- kebab-case: Words are separated by hyphens, and all letters are typically lowercase. Example: my-variable-name.
- UPPER_CASE: All letters are uppercase. Example: MY_CONSTANT.
- lowercase: All letters are lowercase. Example: myvariable.
--- 