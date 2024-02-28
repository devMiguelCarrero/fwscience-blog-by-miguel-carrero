# Next.js Test Blog by [devMiguelCarrero](https://github.com/devMiguelCarrero)

This is a custom Blog made with Next.js by devMiguelCarrero with the purpose of accomplish a coding test sent by fwscience. In the future, this will be used as a Next.js blog boilerplate.

## Version controls

This application was developed an tested under the following versions

- Node.js **v20.10.0**
- npm **v10.2.3**
- git **2.44.0.windows.1**

## Getting Started

- First, install the npm components

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

- Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Site structure

- You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- This web application based in Next.js was builded under Atomic design structure combined with Next.js App Routing and has 3 main folders inside **/src** folder:

### ./app

- This folder contains the basic app-routing system of Next.js and contains all the pages used by the application.
- To create a new page, please follow the standards and best practices of [`App Router`](https://nextjs.org/docs/app)

### ./components

- This folder contains the main React components used in this application, it follows and atomic design structure.
- If you want to create a new component please, locate it in the correct folder depending of the complexity of the mentioned component **(Atoms, Molecules or Organism)**.

### ./shared

- This last folder contains the main global styles, assets, utility functions and global types of this application.
- To add global scss variables, please follow the **./shared/common** scss structure.
- To add global typescript funcions and utilities, please locate it in the folder **./lib**.
- You can create more folders and files inside **./shared** if none of the subfolders are not related to te purpose of your code.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
