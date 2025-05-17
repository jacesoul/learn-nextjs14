import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);

  return {
    title: `${movie.title}`,
  };
}

export default async function MovieDetailPage({ params }: IParams) {
  const { id } = await params; // ✅ 비동기적으로 접근

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info {id}</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
