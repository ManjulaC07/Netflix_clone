// Movies data (add more as needed)
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    poster: "assets/shawshank.jpg",
    category: "Top Rated",
    trailerEmbed:"https://www.youtube.com/embed/PLl99DlL6b4?si=kEhLtf2lLzm4c2Sg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    category: "Top Rated",
    trailerEmbed: "https://www.youtube.com/embed/EXeTwQWrcwY",
    description: "Batman sets out to dismantle the remaining criminal organizations in Gotham while facing the chaos unleashed by the Joker."
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    poster: "assets/inception.jpg",
    category: "Trending",
    trailerEmbed: "https://www.youtube.com/embed/YoHD9XEInc0",
    description: "A skilled thief who steals secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    id: 4,
    title: "Fight Club",
    year: 1999,
    poster: "assets/fight_club.jpg",
    category: "Trending",
    trailerEmbed: "https://www.youtube.com/embed/SUXWAEX2jlg",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more."
  },
  {
    id: 5,
    title: "Interstellar",
    year: 2014,
    poster: "assets/interstellar.jpg",
    category: "Trending",
    trailerEmbed: "https://www.youtube.com/embed/zSWdZVtXT7E",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 6,
    title: "Parasite",
    year: 2019,
    poster: "assets/parasite.jpg",
    category: "New Releases",
    trailerEmbed: "https://www.youtube.com/embed/5xH0HfJHsaY",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    id: 7,
    title: "Joker",
    year: 2019,
    poster: "assets/joker.jpg",
    category: "New Releases",
    trailerEmbed: "https://www.youtube.com/embed/zAGVQLHvwOY",
    description: "In Gotham City, a mentally troubled comedian embarks on a downward spiral of social isolation and nihilism, transforming into the criminal mastermind known as the Joker."
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    year: 2019,
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    category: "Popular",
    trailerEmbed: "https://www.youtube.com/embed/TcMBFSGVi1c",
    description: "The Avengers assemble once more to undo Thanos’ actions and restore balance to the universe."
  },
  {
    id: 9,
    title: "The Lion King",
    year: 1994,
    poster: "assets/lion_king.jpg",
    category: "Popular",
    trailerEmbed: "https://www.youtube.com/embed/4sj1MT05lAA",
    description: "A lion cub prince is cast out of his pride by his cruel uncle, only to learn the true meaning of responsibility and bravery."
  },
  {
    id: 10,
    title: "Titanic",
    year: 1997,
    poster: "assets/titanic.jpg",
    category: "Popular",
    trailerEmbed: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    description: "A young aristocrat falls in love with a kind but poor artist aboard the ill-fated Titanic."
  },
  {
    id: 11,
    title: "The Matrix",
    year: 1999,
    poster: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_SY445_.jpg",
    category: "Top Rated",
    trailerEmbed: "https://www.youtube.com/embed/vKQi3bBA1y8",
    description: "A hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    id: 12,
    title: "Forrest Gump",
    year: 1994,
    poster: "assets/forrest_gump.jpg",
    category: "Top Rated",
    trailerEmbed: "https://www.youtube.com/embed/bLvqoHBptjg",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man with a low IQ."
  },
  {
    id: 13,
    title: "The Godfather",
    year: 1972,
    poster: "assets/godfather.jpg",
    category: "Top Rated",
    trailerEmbed: "https://www.youtube.com/embed/sY1S34973zA",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    id: 14,
    title: "Deadpool",
    year: 2016,
    poster: "assets/deadpool.jpg",
    category: "Popular",
    trailerEmbed: "https://www.youtube.com/embed/ONHBaC-pfsk",
    description: "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers."
  },
  {
    id: 15,
    title: "Black Panther",
    year: 2018,
    poster: "assets/black_panther.jpg",
    category: "Popular",
    trailerEmbed: "https://www.youtube.com/embed/xjDjIWPwcPU",
    description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future."
  },
  {
    id: 16,
    title: "Spider-Man: No Way Home",
    year: 2021,
    poster: "assets/spider_man.jpg",
    category: "New Releases",
    trailerEmbed: "https://www.youtube.com/embed/JfVOs4VSpmA",
    description: "Peter Parker's life and reputation are turned upside down when his secret identity is revealed."
  },
  {
    id: 17,
    title: "Guardians of the Galaxy",
    year: 2014,
    poster: "assets/guardians_of_the_galaxy.jpg",
    category: "Popular",
    trailerEmbed: "https://www.youtube.com/embed/d96cjJhvlMA",
    description: "A group of intergalactic criminals must pull together to stop a fanatical warrior from taking control of the universe."
  },
  {
    id: 18,
    title: "The Irishman",
    year: 2019,
    poster: "assets/irishman.jpg",
    category: "New Releases",
    trailerEmbed: "https://www.youtube.com/embed/WHXxVmeGQUc",
    description: "An epic saga of organized crime in post-war America told through the eyes of World War II veteran Frank Sheeran."
  },
  {
    id: 19,
    title: "Coco",
    year: 2017,
    poster: "assets/coco.jpg",
    category: "Trending",
    trailerEmbed: "https://www.youtube.com/embed/Rvr68u6k5sI",
    description: "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
  },
  {
    id: 20,
    title: "Doctor Strange",
    year: 2016,
    poster: "assets/doctor_strange.jpg",
    category: "Trending",
    trailerEmbed: "https://www.youtube.com/embed/HSzx-zryEgM",
    description: "A former neurosurgeon embarks on a journey of healing only to be drawn into the world of the mystic arts."
  },

  // Added 20 more movies

  {
    id: 21,
    title: "Logan",
    year: 2017,
    poster: "assets/logan.jpg",
    category: "Popular",
  },
  {
    id: 22,
    title: "The Avengers",
    year: 2012,
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    category: "Popular",
  },
  {
    id: 23,
    title: "Star Wars: The Force Awakens",
    year: 2015,
    poster: "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SY679_.jpg",
    category: "Popular",
  },
  {
    id: 24,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    poster: "assets/harry_potter.jpg",
    category: "Popular",
  },
  {
    id: 25,
    title: "Jurassic Park",
    year: 1993,
    poster: "assets/jurassic.jpg",
    category: "Popular",
  },
  {
    id: 26,
    title: "The Social Network",
    year: 2010,
    poster: "assets/the_social_network.jpg",
    category: "Trending",
  },
  {
    id: 27,
    title: "Dead Poets Society",
    year: 1989,
    poster: "assets/dead_poets_society.jpg",
    category: "Top Rated",
  },
  {
    id: 28,
    title: "Saving Private Ryan",
    year: 1998,
    poster: "assets/saving_private_ryan.jpg",
    category: "Top Rated",
  },
  {
    id: 29,
    title: "Whiplash",
    year: 2014,
    poster: "assets/whiplash.jpg",
    category: "Trending",
  },
  {
    id: 30,
    title: "La La Land",
    year: 2016,
    poster: "assets/lala_land.jpg",
    category: "Trending",
  },
  {
    id: 31,
    title: "The Grand Budapest Hotel",
    year: 2014,
    poster: "assets/the_grand_budapest_hotel.jpg",
    category: "Trending",
  },
  {
    id: 32,
    title: "The Prestige",
    year: 2006,
    poster: "assets/the_prestige.jpg",
    category: "Top Rated",
  },
  {
    id: 33,
    title: "Dunkirk",
    year: 2017,
    poster: "assets/dunkirk.jpg",
    category: "New Releases",
  },
  {
    id: 34,
    title: "Frozen",
    year: 2013,
    poster: "assets/frozen.jpg",
    category: "Popular",
  },
  {
    id: 35,
    title: "The Martian",
    year: 2015,
    poster: "assets/the_martian.jpg",
    category: "Popular",
  },
  {
    id: 36,
    title: "Wonder Woman",
    year: 2017,
    poster: "assets/wonder_woman.jpg",
    category: "Popular",
  },
  {
    id: 37,
    title: "Inside Out",
    year: 2015,
    poster: "assets/inside_out.jpg",
    category: "Trending",
  },
  {
    id: 38,
    title: "The Wolf of Wall Street",
    year: 2013,
    poster: "assets/the_wolf_of_wall_street.jpg",
    category: "Trending",
  },
  {
    id: 39,
    title: "The Hunger Games",
    year: 2012,
    poster: "assets/the_hunger_games.jpg",
    category: "Popular",
  },
  {
  id: 40,
  title: "The Fault in Our Stars",
  year: 2014,
  poster: "assets/the_fault_in_our_stars.jpg",
  category: "Popular",
  trailer: "https://www.youtube.com/embed/9ItBvH5J6ss", // Add this line
  description: "A touching love story of two teenagers with cancer who find strength in each other."
}

   // Add more movies here for bigger lists
];

 

// UI Elements
const movieListContainer = document.getElementById("movie-list-container");
const hero = document.getElementById("hero");
const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");
const playBtn = document.getElementById("playBtn");
const infoBtn = document.getElementById("infoBtn");

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const loginModalClose = document.getElementById("loginModalClose");
const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchCloseBtn = document.getElementById("searchCloseBtn");

const languageDropdown = document.getElementById("language-dropdown");

const trailerModal = document.getElementById("trailerModal");
const trailerModalClose = document.getElementById("trailerModalClose");
const trailerContainer = document.getElementById("trailerContainer");

// Current featured movie (for hero)
let featuredMovie = movies[0];

// Language text dictionary
const translations = {
  en: {
    home: "Home",
    tvshows: "TV Shows",
    movies: "Movies",
    mylist: "My List",
    login: "Login",
    email: "Email:",
    password: "Password:",
    play: "Play",
    moreinfo: "More Info",
  },
  hi: {
    home: "होम",
    tvshows: "टीवी शो",
    movies: "मूवीज़",
    mylist: "मेरी सूची",
    login: "लॉगिन",
    email: "ईमेल:",
    password: "पासवर्ड:",
    play: "चलाएँ",
    moreinfo: "और जानकारी",
  },
  es: {
    home: "Inicio",
    tvshows: "Series",
    movies: "Películas",
    mylist: "Mi lista",
    login: "Iniciar sesión",
    email: "Correo electrónico:",
    password: "Contraseña:",
    play: "Reproducir",
    moreinfo: "Más información",
  },
  fr: {
    home: "Accueil",
    tvshows: "Séries TV",
    movies: "Films",
    mylist: "Ma liste",
    login: "Connexion",
    email: "E-mail:",
    password: "Mot de passe:",
    play: "Lecture",
    moreinfo: "Plus d'infos",
  }
};

// --- Functions ---

// Render the hero section background and text
function renderHero(movie) {
  hero.style.backgroundImage = `url(${movie.poster})`;
  heroTitle.textContent = movie.title;
  heroDescription.textContent = movie.description;
}

// Render movies by category
function renderMovies(filter = null) {
  movieListContainer.innerHTML = "";

  // Group movies by category
  let grouped = {};
  movies.forEach((movie) => {
    // If filtering by search term, skip those that don't match title
    if (filter && !movie.title.toLowerCase().includes(filter.toLowerCase())) {
      return;
    }
    if (!grouped[movie.category]) {
      grouped[movie.category] = [];
    }
    grouped[movie.category].push(movie);
  });

  // For each category, create section
  for (const category in grouped) {
    const section = document.createElement("section");
    section.className = "category-section";
    const title = document.createElement("h2");
    title.textContent = category;
    section.appendChild(title);

    const row = document.createElement("div");
    row.className = "movies-row";

    grouped[category].forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", movie.title);
      card.dataset.movieId = movie.id;

      const img = document.createElement("img");
      img.className = "movie-poster";
      img.src = movie.poster;
      img.alt = movie.title;

      const info = document.createElement("div");
      info.className = "movie-info";
      info.textContent = `${movie.title} (${movie.year})`;

      card.appendChild(img);
      card.appendChild(info);

      // Click or keypress to open hero details for that movie
      card.addEventListener("click", () => {
        featuredMovie = movie;
        renderHero(movie);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          featuredMovie = movie;
          renderHero(movie);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });

      row.appendChild(card);
    });

    section.appendChild(row);
    movieListContainer.appendChild(section);
  }
}

// Show login modal
function openLoginModal() {
  loginModal.classList.remove("hidden");
  loginModal.querySelector("#email").focus();
}

// Close login modal
function closeLoginModal() {
  loginModal.classList.add("hidden");
  loginForm.reset();
  loginMsg.textContent = "";
}

// Show trailer modal
function openTrailerModal(trailerUrl) {
  trailerContainer.innerHTML = `<iframe src="${trailerUrl}?autoplay=1" title="Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  trailerModal.classList.remove("hidden");
}

// Close trailer modal
function closeTrailerModal() {
  trailerModal.classList.add("hidden");
  trailerContainer.innerHTML = "";
}

// Change language UI text
function changeLanguage(lang) {
  // Save language to localStorage
  localStorage.setItem("netflixCloneLang", lang);

  // Update nav links, buttons, labels, etc
  document.querySelectorAll("[data-text-key]").forEach((el) => {
    const key = el.getAttribute("data-text-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Also placeholder for search input
  const placeholders = {
    en: "Search movies and shows...",
    hi: "मूवीज़ और शो खोजें...",
    es: "Buscar películas y shows...",
    fr: "Rechercher films et séries...",
  };

  searchInput.placeholder = placeholders[lang] || placeholders.en;
}

// Validate login form and fake login
function handleLoginSubmit(event) {
  event.preventDefault();
  const email = loginForm.email.value.trim();
  const password = loginForm.password.value.trim();

  if (!email || !password) {
    loginMsg.textContent = "Please enter email and password.";
    return;
  }

  // Simple fake validation: accept any email with "@" and password length > 3
  if (email.includes("@") && password.length > 3) {
    loginMsg.style.color = "#4caf50";
    loginMsg.textContent = "Login successful! Closing...";
    setTimeout(() => {
      closeLoginModal();
      loginMsg.style.color = "#f44336";
      loginMsg.textContent = "";
      loginBtn.textContent = translations[currentLang].login;
    }, 1500);
  } else {
    loginMsg.style.color = "#f44336";
    loginMsg.textContent = "Invalid email or password.";
  }
}

// Handle search open
function openSearch() {
  searchBar.classList.remove("hidden");
  searchInput.focus();
}

// Handle search close
function closeSearch() {
  searchBar.classList.add("hidden");
  searchInput.value = "";
  renderMovies();
}

// Handle live search input
function handleSearchInput() {
  const searchTerm = searchInput.value.trim();
  renderMovies(searchTerm);
}

// Initialize
let currentLang = localStorage.getItem("netflixCloneLang") || "en";
languageDropdown.value = currentLang;
changeLanguage(currentLang);

renderHero(featuredMovie);
renderMovies();

// Event listeners
loginBtn.addEventListener("click", openLoginModal);
loginModalClose.addEventListener("click", closeLoginModal);
loginForm.addEventListener("submit", handleLoginSubmit);

searchBtn.addEventListener("click", openSearch);
searchCloseBtn.addEventListener("click", closeSearch);
searchInput.addEventListener("input", handleSearchInput);

languageDropdown.addEventListener("change", (e) => {
  currentLang = e.target.value;
  changeLanguage(currentLang);
});

playBtn.addEventListener("click", () => {
  if (featuredMovie.trailer) {
    openTrailerModal(featuredMovie.trailer);
  } else {
    alert("Trailer not available");
  }
});
infoBtn.addEventListener("click", () => {
  alert(`${featuredMovie.title} (${featuredMovie.year})\n\n${featuredMovie.description}`);
});

trailerModalClose.addEventListener("click", closeTrailerModal);

// Close modals on outside click
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    closeLoginModal();
  }
  if (e.target === trailerModal) {
    closeTrailerModal();
  }
});

  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.icon');

      // Collapse all answers
      document.querySelectorAll('.faq-answer').forEach(ans => {
        if (ans !== answer) ans.style.display = 'none';
      });

      document.querySelectorAll('.icon').forEach(ic => {
        if (ic !== icon) ic.textContent = '+';
      });

      // Toggle current answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        answer.style.display = 'block';
        icon.textContent = '×';
      }
    });
  });


  document.getElementById('getStartedForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput');
    if (emailInput.value.trim() === "") {
      emailInput.focus();
    } else {
      // Proceed logic can go here, like sending data
      console.log("Email entered:", emailInput.value);
    }
  });


    

