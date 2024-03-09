import { Store } from "../core/wook";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
  }
  const result = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
  );
  const { Search, totalResults } = await result.json();
  store.state.movies = [...store.state.movies, ...Search];
  store.state.pageMax = Math.ceil(Number(totalResults) / 10);
};
