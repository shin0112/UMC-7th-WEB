import styled from "styled-components";

const link = "https://image.tmdb.org/t/p/w500";

const CreditInfo = (params) => {
  const { credit } = params;

  return (
    <CreditContainer>
      <ImgContainer>
        <CreditImg src={link + credit.profile_path}></CreditImg>
      </ImgContainer>
      <CreditName>{credit.name}</CreditName>
      <Character>{credit.character}</Character>
    </CreditContainer>
  );
};

const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 100%;
  border: 2px solid white;
  margin-bottom: 5px;
`;

const CreditImg = styled.img`
  margin-top: -10px;
  width: 100px;
`;

const CreditName = styled.div`
  color: white;
  width: 100px;
  text-align: center;
`;

const Character = styled.div`
  color: gray;
  width: 100px;
  text-align: center;
`;

export default CreditInfo;
