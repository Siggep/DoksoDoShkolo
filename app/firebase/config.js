import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBOj2UMTVoGYN8y21HxwBGcMizjDlFbh1Q",
  authDomain: "hemnia-app-f420c.firebaseapp.com",
  databaseURL: "https://hemnia-app-f420c.firebaseio.com",
  projectId: "hemnia-app-f420c",
  storageBucket: "hemnia-app-f420c.appspot.com",
  messagingSenderId: "920723841551",
  appId: "1:920723841551:web:861d5c266af26a1ec4f97a",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
