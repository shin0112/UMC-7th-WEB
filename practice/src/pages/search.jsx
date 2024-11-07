import { useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../apis/axios-instance";
import MovieCard from "../components/movies/MovieCard";

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
    <Container>
      <SearchBarContainer>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="영화 제목을 입력해주세요."
        />
        <SearchButton
          onClick={() => {
            handleSearch();
          }}
        >
          검색
        </SearchButton>
      </SearchBarContainer>
      {movies.data?.results[0] ? (
        <MovieContainer>
          {movies.data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieContainer>
      ) : (
        isSearch && (
          <Text>{`해당하는 검색어 ${search}에 \n해당하는 데이터가 없습니다.`}</Text>
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  height: 45px;
  width: 95%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 90%;
  padding-left: 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 15px;
  outline: none;
  box-shadow: none;
  border: none;
`;

const SearchButton = styled.button`
  height: 100%;
  max-width: 100px;
  width: 8%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #ff5555;
  border: none;

  &:active {
    background-color: #cf1616;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Text = styled.div`
  color: white;
  font-size: 30px;
`;

export default SearchPage;
