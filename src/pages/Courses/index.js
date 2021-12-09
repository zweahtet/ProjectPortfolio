import React from 'react';
import clientPromise from '../../../util/mongodb';
import SideNav from '../../components/SideNav/SideNav';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function Courses({ courses }) {
    const groupBy = (key, array) => {
        return array.reduce((result, currentElement) => {
            const property = currentElement[key];
            result[property] = result[property] || [];
            result[property].push(currentElement);
            return result;
        }, {});
    }

    const coursesGroupByName = groupBy("course", courses)
    const courseNames = Object.keys(coursesGroupByName)
    const courseNamesWithId = courseNames.map((name, id) => (
        {id: id, title: name}
    ))
    // const problemsGroupByTitle = groupBy("title", courses)
    // const problemTitles = Object.keys(problemsGroupByTitle)

    const [state, setState] = React.useState({
        contentHeader: 'cs61a',
        contentBody: coursesGroupByName['cs61a'],
        sideNavList: courseNamesWithId,
    })

    const handleOnClickNav = (event) => {
        // alert(event.target.getAttribute('id'))
        setState({
            contentHeader: event.target.getAttribute('value'),
            contentBody: coursesGroupByName[event.target.getAttribute('value')],
            sideNavList: state.sideNavList
        })
    }
    
    return (
        <div className="flex flex-col relative min-h-screen md:flex">
            <Header/>
                <div className="flex h-full flex-grow">
                    <SideNav 
                        navList={state.sideNavList} 
                        onClick={handleOnClickNav}
                    />
                    <Content 
                        contentHeader={state.contentHeader} 
                        contentBody={state.contentBody}
                    />
                </div>
            <Footer/>                                    
        </div>  
    )
}


export async function getStaticProps() {
    const client = await clientPromise;

    const db = client.db("ProjectPortforlio");

    const data = await db.collection("courses").find({}).toArray();
    
    const courses = JSON.parse(JSON.stringify(data));

    return {
        props: { courses},
    }
}

// export async function getServerSideProps(context) {
//     const client = await clientPromise
//     const db = client.db("ProjectPortforlio");

//     const data = await db
//         .collection("courses")
//         .find({})
//         .toArray();
    
//     const courses = JSON.parse(JSON.stringify(data));

//     return {
//         props: { courses },
//     }
// }