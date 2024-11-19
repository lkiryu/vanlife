import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBjyC_vEH46iYaj_RlWjgVAreaWdcx3Ul4",
    authDomain: "vanslife-77eea.firebaseapp.com",
    projectId: "vanslife-77eea",
    storageBucket: "vanslife-77eea.appspot.com",
    messagingSenderId: "486522756462",
    appId: "1:486522756462:web:c129e503e536851acd357f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vansArray = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vansArray
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}