// Importer Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/analytics";

// 📌 CONFIGURATION FIREBASE (colle tes infos ici)
const firebaseConfig = {
    apiKey: "AIzaSyBipzIDuYDTfwnyFsWBW67aib1UXXQjvX8",
    authDomain: "popflix-de65c.firebaseapp.com",
    projectId: "popflix-de65c",
    storageBucket: "popflix-de65c.firebasestorage.app",
    messagingSenderId: "219558339530",
    appId: "1:219558339530:web:1844367f37ea2556a4a533"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Récupérer les films depuis Firebase
async function fetchMovies() {
    const querySnapshot = await getDocs(collection(db, "movies"));
    const container = document.getElementById("movies-container");
    container.innerHTML = ""; // On vide avant de remplir

    querySnapshot.forEach((doc) => {
        const movie = doc.data();
        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;
        img.classList.add("movie-poster");
        container.appendChild(img);
     });
async function fetchMovies() {
    const querySnapshot = await getDocs(collection(db, "movies"));
    
    console.log("Films récupérés :", querySnapshot.docs.map(doc => doc.data())); // 🔥 Test ici

    querySnapshot.forEach((doc) => {
        const movie = doc.data();
        
        console.log("Film :", movie); // 🔥 Vérifie chaque film récupéré
        
        if (!movie.image) {
            console.error("Pas d'image pour :", movie.title);
            return;
        }

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;
        img.classList.add("movie-poster");

        container.appendChild(img);
    });
}


// Charger les films au démarrage
fetchMovies();
