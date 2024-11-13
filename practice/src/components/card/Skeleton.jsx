import * as S from "./skeleton.style";

const SkeletonCard = () => {
  return (
    <S.CardContainer>
      <S.ImgContainer>
        <S.StyledHoverImg />
      </S.ImgContainer>
      <S.CardInfo>
        <S.CardName />
        <S.CardDate />
      </S.CardInfo>
    </S.CardContainer>
  );
};

export default SkeletonCard;
