import { useState } from "react";
import * as S from "./search.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchMovieCardContainer } from "../../components/movies/MovieCardContainer";

const SearchPage = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });
  const mq = searchParams.get("mq");

  const handleSearchMovie = async () => {
    if (mq === searchValue) return;

    navigate(`/search?mq=${searchValue}`);
  };

  return (
    <S.Container>
      <S.SearchBarContainer>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearchMovie();
          }}
          placeholder="영화 제목을 입력해주세요."
        />
        <button
          onClick={() => {
            handleSearchMovie();
          }}
        >
          검색
        </button>
      </S.SearchBarContainer>
      <SearchMovieCardContainer />
    </S.Container>
  );
};

export default SearchPage;
