import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMr1g0nY-fTc31rB9kK3ZdaKBNiP4RH50",
  authDomain: "netflix-clone-e8552.firebaseapp.com",
  projectId: "netflix-clone-e8552",
  storageBucket: "netflix-clone-e8552.appspot.com",
  messagingSenderId: "491229897475",
  appId: "1:491229897475:web:ac120010ae8e9b178fbf36",
};
/*const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();*/
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
/* signOut(auth)
  .then(() => {
    alert("signout successfull");
  })
  .catch((error) => {
    error.message;
  });*/

/*export { auth };
export default db;*/
