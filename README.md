# QRCodeApp

This is a web application to generate QR codes from files that the user uploads to a Firebase Storage. This application was developed in React, materializes as a CSS framework and SASS as a style preprocessor.

The files must be pdf, png, jpg and jpeg format. If the user try to upload another type of file, the application won't allow the upload of the file.

## Quick start

```
npm install
```
In the file src/js/fireBaseConfig.js you must replace the values according to your firebase project:

```
const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "yourAuthDomain",
  projectId: "yourProjectId",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "yourMessagingSenderId",
  appId: "yourAppId"
};
```
You must make sure that you have 3 folders in your storage ('store1', 'store2' and 'store3') with the corresponding names so that the files are saved in the corresponding folder. 

## Run dev server

And you can run this project locally:
```
npm run start
```

## Live demo
In the following [link](https://qrcodeapp-official.web.app/) you can see the app deployed on Firebase.

## License
This is an open initiative under [MIT license](https://opensource.org/licenses/MIT).
