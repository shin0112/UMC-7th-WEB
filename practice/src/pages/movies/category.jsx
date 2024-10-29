import styled from "styled-components";

const CategoryPage = () => {
  const categories = [
    {
      img: "https://img.lovepik.com/photo/40177/5099.jpg_wh860.jpg",
      link: "/movies/now-playing",
      text: "현재 상영중인",
    },
    {
      img: "https://img.freepik.com/premium-vector/cinema-movie-film-illustration-design-vector_607286-861.jpg",
      link: "/movies/popular",
      text: "인기있는",
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/05/23/13/11/headphones-4223911_1280.jpg",
      link: "/movies/top-rated",
      text: "높은 평가를 받은",
    },
    {
      img: "https://e1.pxfuel.com/desktop-wallpaper/317/679/desktop-wallpaper-1920x1080-film-production-data-id-film-camera.jpg",
      link: "/movies/up-coming",
      text: "개봉 예정",
    },
  ];

  return (
    <CategoryList>
      {categories.map((category, index) => (
        <CategoryBox key={index}>
          <ImgBox>
            <a href={category.link}>
              <img
                src={category.img}
                alt=""
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
            </a>
            <Textbox>{category.text}</Textbox>
          </ImgBox>
        </CategoryBox>
      ))}
    </CategoryList>
  );
};

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const CategoryBox = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  background-color: black;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.5;
  }
`;

const Textbox = styled.div`
  position: absolute;
  top: 82%;
  left: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: medium;
`;

export default CategoryPage;
