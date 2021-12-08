import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { CourseData } from "../../constants/constants";
import Link from "next/link";
import { CourseTag, CourseTags, CourseText} from "./CoursesStyles";

const Courses = () => (
    <Section id="courses">
        <SectionTitle>Notable Courseworks</SectionTitle>
        <CourseTags>
            {CourseData.map((item, index) => (
                <Link href="\Courses">
                    <CourseTag key={index}>
                        <CourseText>{item.name}</CourseText>
                    </CourseTag>
                </Link>
            ))}
        </CourseTags>

    </Section>
)

export default Courses;