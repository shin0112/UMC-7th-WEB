import { useState } from "react";
import { axiosInstance } from "../../apis/axios-instance";
import MovieCard from "../../components/movies/MovieCard";
import * as S from "./search.style";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [movies, setMovies] = useState({});

  const handleSearch = async () => {
    const response = await axiosInstance.get(
      `/search/movie?query=${search}&language=ko-KR`
    );
    console.log(response);
    setMovies(response);
    setIsSearch(true);
  };

  return (
    <S.Container>
      <S.SearchBarContainer>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="영화 제목을 입력해주세요."
        />
        <button
          onClick={() => {
            handleSearch();
          }}
        >
          검색
        </button>
      </S.SearchBarContainer>
      {movies.data?.results[0] ? (
        <S.MovieContainer>
          {movies.data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </S.MovieContainer>
      ) : (
        isSearch && (
          <S.Text>{`해당하는 검색어 ${search}에 \n해당하는 데이터가 없습니다.`}</S.Text>
        )
      )}
    </S.Container>
  );
};

export default SearchPage;
