import Movie from "../../components/movie";
import { API_URL } from "../../lib/config";
import styles from "../../styles/home.module.css";

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
}

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        );
      })}
    </div>
  );
}
