import React from "react";
import Detail from "../../components/Detail/Detail";
import clientPromise from "../../../util/mongodb";
import { ObjectId } from "mongodb";
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function CategoryDetail( props ) {
    // const groupBy = (key, array) => {
    //     return array.reduce((result, currentElement) => {
    //         const property = currentElement[key];
    //         result[property] = result[property] || [];
    //         result[property].push(currentElement);
    //         return result;
    //     }, {});
    // }

    // const coursesGroupByName = groupBy("course", courses)
    // const courseNames = Object.keys(coursesGroupByName)
    // const problemsGroupByTitle = groupBy("title", props.courses)
    // const problemTitles = Object.keys(problemsGroupByTitle)
    // console.log(props.courses)
    // const problemTitles = props.courses.map(course => (
    //     {id: course._id.toString(), title: course.title}
    // ))

    // console.log("problemTitles", problemTitles)

    // const [state, setState] = React.useState({
    //     contentHeader: props.selected.title,
    //     contentBody: {
    //         question: props.selected.question || "",
    //         code: props.selected.code || "",
    //         categoryList: coursesGroupByName['cs61a'] || []
    //     },
    //     sideNavList: problemTitles,
    //     selectedDetail: false,
    // })


    // const handleOnClickNav = (event) => {
    //     alert(event.target.getAttribute('id'))
    //     setState({
    //         contentHeader: event.target.getAttribute('value'),
    //         contentBody: {
    //         },
    //         sideNavList: state.sideNavList
    //     })
    // }

    // const handleOnClickContent = (event) => {
    //     alert("This is clicked on content"),
    //     setState({
    //         selectedDetail: true,
    //     })
    // }

    return (
        <div className="flex flex-col relative min-h-screen md:flex">
            <Header/>
                <div className="flex h-full flex-grow">
                    {/* <SideNav 
                        navList={state.sideNavList} 
                        onClick={handleOnClickNav}
                    /> */}
                    {/* <Content 
                        contentHeader={state.contentHeader} 
                        contentBody={state.contentBody} 
                        onClick={handleOnClickContent}
                        selectedDetail={state.selectedDetail}
                    /> */}
                    <Detail 
                        contentHeader={props.selected.title}
                        question={props.selected.question}
                        code={props.selected.code}
                    />
                </div>
            <Footer/>                                    
        </div>
    )
}

export async function getStaticPaths() {
    const client = await clientPromise
    const db = client.db("ProjectPortforlio");
    const courses = await db.collection("courses").find({}, {_id: 1}).toArray();
    // console.log(courses)
    const paths = courses.map(course => ({ 
        params: { category_id: course._id.toString()}
    }))

    return {
        fallback: false,
        paths: paths
    }
}

export async function getStaticProps(context) {

    const category_id = context.params.category_id;

    const client = await clientPromise

    const db = client.db("ProjectPortforlio");

    const selectedCategory = await db.collection("courses").findOne({_id: new ObjectId(category_id)});
    const courses = await db.collection("courses").find({}).toArray();

    return {
        props: {
            selected: JSON.parse(JSON.stringify(selectedCategory)),
            courses: JSON.parse(JSON.stringify(courses))
        }
    }
}