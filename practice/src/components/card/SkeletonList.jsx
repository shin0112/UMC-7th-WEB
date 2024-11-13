import SkeletonCard from "./Skeleton";
import * as S from "@/pages/search/search.style.js";

const SkeletonCardList = ({ number }) => {
  return (
    <S.MovieContainer>
      {new Array(number).fill(0).map((_, idx) => (
        <SkeletonCard />
      ))}
    </S.MovieContainer>
  );
};

export default SkeletonCardList;
