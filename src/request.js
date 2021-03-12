const API_KEY = `2710722b3c69704f8be5e746b54b76d2`;

const request = {
  trendingAllWeek: `trending/all/week?api_key=${API_KEY}`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchPrime: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,

  //movies
  trendingMovies: `/trending/movie/day?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,

  //series
  trendingTv: `/trending/tv/day?api_key=${API_KEY}`,
  topRatedTv: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  popularTv: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  onairTv: `tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,

  //movie details
  fetchMovieData: `movie/?api_key=${API_KEY}&language=en-US`,
};

export default request;
