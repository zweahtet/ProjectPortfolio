import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(1, minmax(0, 1fr));
padding: 3rem;
place-items: center;
gap: 1.5rem;
@media ${(props) => props.theme.breakpoints.md} {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  padding: 5px
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  font-style: 2rem;
  line-height: 24px;
  padding: 0 0.6rem;
`;


export const UtilityList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
`;

export const ExternalLinks = styled.a`
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  transition: 0.7s;
  &:hover{
    background: #6666ff;
    color: white
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0.9rem 0
`;

export const Tag = styled.li`
  font-size: 1.2rem;
  background: black;
  color: white;
  padding: .2rem .7rem;
  border-radius: 9px;
`;