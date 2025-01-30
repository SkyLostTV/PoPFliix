// Liste de films dynamiques
const movies = [
    { title: "Inception", image: "https://source.unsplash.com/200x300/?movie,1" },
    { title: "Interstellar", image: "https://source.unsplash.com/200x300/?movie,2" },
    { title: "Dune", image: "https://source.unsplash.com/200x300/?movie,3" },
    { title: "Avatar", image: "https://source.unsplash.com/200x300/?movie,4" },
    { title: "The Dark Knight", image: "https://source.unsplash.com/200x300/?movie,5" },
    { title: "Tenet", image: "https://source.unsplash.com/200x300/?movie,6" },
];

// Sélectionne l'élément HTML où on va afficher les films
const container = document.getElementById("movies-container");

// Génère les films dynamiquement
movies.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;
    img.classList.add("movie-poster");
    container.appendChild(img);
});
