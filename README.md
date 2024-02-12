# React firebase app

Before updating anything make sure that the taiwind and other configuration is correct;
Vite some times gives weird error like even you have configured the tailwind correctly, the actual changes sometimes does not work; So make sure to set the things up and deploy the first basic app tp vercel;

## Features

1. Build using TypeScript; ZOD, React Router, React Hook forms, Firebase, ShadCn Ui, Tailwind CSS, Vite and deployed on vercel;
2. proper error handling and Loading state is applied ;
3. proper folder structure for maintainable and readable code;
4. Fully type safe  and responsive application aim to provide a better user experience.

## Steps

1. Make the project structure I personally like to use the app.tsx as the main page and I define all the other pages in the pages folder; This allows me to easily manage different pages under the same hood .
2. I installed the react router and configured that accouding to my likings; I made a seperate route folder which i use to manage different routes; It makes the main.tsx less cluttery;
3. Made different routes every thing is working fine in the development but for the deployed version was giving the not found page error ; to fix the issue I made a ```vercel.json``` file in the root directory and used a script to fix the issue

``` js
{
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

4. Creating the template for the app and the structur : I used the App.tsx file to make this template and pass the other routes as children; This allows to have different pages under the same template. But if you want to have different pages you can always configure in the route section.

5. Inside the app.tsx file I have set up a timer which pushes the people to the home page after they are giving them a greetings
6. I Made Three other pages Home, Transaction, Data .
7. The transaction have proper validations for the ```ether address``` I used the ether js for that.
8. For the database I used the firebase firestore and created Asynchronous functions to create and Read the data . Everyting is according to the docs.
7. Everything has a proper ```Error handling``` and loading state;
8. The Ui is responsive for both the laptop and the mobile.
9. It has a beautiful designed navbar ;
10. Strict types all over the project;

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
