const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// disable default favicon to avoid taco icon
app.get('/favicon.ico', (req, res) => res.status(204).end());
// serve freeCodeCamp logo
app.get('/freecodecamp.ico', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'freecodecamp.ico'));
});

// serve LTS pages under /lts (home.html, hours.html, contact.html)
app.use('/lts', express.static(path.join(__dirname, 'html/project')));
// serve other static assets (projects folder, etc.)
app.use(express.static(__dirname));

// root route: render three stylish buttons linking to pages
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Inline empty SVG favicon to override cached taco icon -->
      <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E" type="image/svg+xml">
      <title>My Web Dev Projects</title>
      <!-- Tailwind CSS -->
      <script src="https://cdn.tailwindcss.com"></script>
     </head>
    <body class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Introduction / Overview -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-extrabold text-white mb-4">
            <img src="/freecodecamp.ico" alt="freeCodeCamp logo" class="inline-block h-6 w-6 mr-2 align-middle">freeCodeCamp Inspired Web Dev Projects
          </h1>
          <p class="text-lg text-white opacity-90">These sample projects were created as part of my freeCodeCamp curriculum, showcasing skills in HTML, CSS, and JavaScript.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
            <h3 class="text-2xl font-bold text-blue-800">Anime Survey</h3>
            <p class="mt-2 text-white opacity-90">Participate in a fun survey to share your favorite anime series.</p>
            <a href="/projects/anime_survey/main.html" class="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700">Visit</a>
          </div>
          <div class="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
            <h3 class="text-2xl font-bold text-blue-800">Tribute Page</h3>
            <p class="mt-2 text-white opacity-90">Explore a styled tribute page honoring a beloved hero.</p>
            <a href="/projects/tribute_page/main.html" class="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700">Visit</a>
          </div>
          <div class="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
            <h3 class="text-2xl font-bold text-blue-800">Little Taco Shop</h3>
            <p class="mt-2 text-white opacity-90">Discover store hours, menu, and contact details.</p>
            <a href="/lts/home.html" class="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700">Visit</a>
          </div>
        </div>
      </div>
    </body>
   </html>
  `);
});

// start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
