// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDG8umtfJRbv2QFB5XtCR2xTlXoPAx8ViY",
  authDomain: "todolensdb.firebaseapp.com",
  projectId: "todolensdb",
  storageBucket: "todolensdb.appspot.com",
  messagingSenderId: "391916400483",
  appId: "1:391916400483:web:b77b2801d9125e9aa66d56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (
  fech,
  nameFac,
  ccFac,
  lenFac,
  lenFacVal,
  monFac,
  monFacVal,
  otrFac,
  otrFacVal,
  aboFac,
  salFac,
  totFac,
  telFac,
  numFac
) =>
  addDoc(collection(db, "facs"), {
    fech,
    nameFac,
    ccFac,
    lenFac,
    lenFacVal,
    monFac,
    monFacVal,
    otrFac,
    otrFacVal,
    aboFac,
    salFac,
    totFac,
    telFac,
    numFac
});

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "facs"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "facs", id));

export const getTask = (id) => getDoc(doc(db, "facs", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "facs", id), newFields);

export const getTasks = () => getDocs(collection(db, "facs"));
