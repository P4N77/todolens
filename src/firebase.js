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
  idClient,
  nameClient,
  lastnameClient,
  birthClient,
  telClient,
  controlClient,
  od_es,
  od_cil,
  od_gra,
  od_add,
  od_av,
  od_dpu,
  oi_es,
  oi_cil,
  oi_gra,
  oi_add,
  oi_av,
  oi_dpu,
  len_od_es,
  len_od_cil,
  len_od_gra,
  len_od_add,
  len_od_av,
  len_od_dpu,
  len_oi_es,
  len_oi_cil,
  len_oi_gra,
  len_oi_add,
  len_oi_av,
  len_oi_dpu,
   ) =>
  addDoc(collection(db, "tasks"), {
    idClient,
  nameClient,
  lastnameClient,
  birthClient,
  telClient,
  controlClient,
  od_es,
  od_cil,
  od_gra,
  od_add,
  od_av,
  od_dpu,
  oi_es,
  oi_cil,
  oi_gra,
  oi_add,
  oi_av,
  oi_dpu,
  len_od_es,
  len_od_cil,
  len_od_gra,
  len_od_add,
  len_od_av,
  len_od_dpu,
  len_oi_es,
  len_oi_cil,
  len_oi_gra,
  len_oi_add,
  len_oi_av,
  len_oi_dpu,
  });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
