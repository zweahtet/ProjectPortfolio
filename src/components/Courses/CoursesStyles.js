import styled from "styled-components"

export const CourseTags = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1.2rem;
    padding: 1.2rem;
`

export const CourseTag = styled.div`
    border: 1px solid black;
    border-radius: 12px;
    padding: 1.2rem;
    position: relative;
    transition: .3s;
    &:hover{
        color: #6666ff;
        border: 1px solid #6666ff;
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const CourseText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;

    @media ${props => props.theme.breakpoints.md}{
        font-size: 16px;
        line-height: 20px;
    };

    @media ${props => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 14px;
    }
`