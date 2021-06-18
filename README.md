# vue-trello
Curso de Vue de Carlos Azaustre 


## Instalación de dependencias
---
Descarga del proyecto
```sh
git clone https://github.com/JacoboG/vue-trello.git
```

Entrar al proyecto
```sh
cd vue-trello
```

Instalar dependencias
```sh
npm install
```

## DEPLOY (En Firebase Hosting)
---
Para usar las herramientas de firebase y hacer un deploy en firebase se debe instalar firebase-tools

```sh
npm install -g firebase-tools
```

Puede que te pida iniciar sesión en Google/Firebase
Iniciar sesión en google/firebase
```sh
firebase login
```

Inicializar un proyecto Firebase
```sh
firebase init
```

Opciones a seleccionar en los menus
```sh
- You are currently outside your home directory - Are you ready to proceed? Yes
- Which Firebase features do you want to set up for this directory? (Select Firebase Hosting or Hosting)
- Please select an option: (type project) Use an existing project
- Select a default Firebase project for this directory: (select project)
- What do you want to use as your public directory? (dist )
- Configure as a single-page app (rewrite all urls to /index.html)? (No)
- Set up automatic builds and deploys with GitHub? Yes
- File dist/404.html already exists. Overwrite? Yes
- File dist/index.html already exists. Overwrite? No
- Waiting for authentication (github)...
- For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
- Set up the workflow to run a build script before every deploy? (Yes)
- What script should be run before every deploy? (npm ci && npm run build)
- Set up automatic deployment to your sites live channel when a PR is merged? No

-  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
-  Action required: Push any new workflow file(s) to your repo
+  Firebase initialization complete!
```

Desplegar proyecto
```sh
firebase deploy
```

Abrir en el navegador la URL(authDomain) configurada en los settings de firebase, nosotros lo hicimos en settings.js

```js
// Your web apps Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}
```

¡¡LISTO!!

💖💻😄💖💻😁😉💖💻😊💖💻🤓😄😁💖💻💖💻