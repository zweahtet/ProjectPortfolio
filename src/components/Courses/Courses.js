import { SectionTitle } from "../../styles/GlobalComponents";
import { Section } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';
import { CourseData } from "../../constants/constants";
import Link from "next/link";

const Courses = () => (
    <Section nopadding id="courses">
        <SectionTitle>Notable Courseworks</SectionTitle>
        <Boxes>
            {CourseData.map((item, index) => (
                <Box key={index}>
                    <BoxText>{item.name}</BoxText>
                </Box>
            ))}
        </Boxes>
        <Link href="/courses">Click here to see problems ...</Link>
    </Section>
)

export default Courses;