import React, { useState } from 'react';
import Link from 'next/link';
import { DiCssdeck } from 'react-icons/di';
import clientPromise from '../../util/mongodb';
import SideNav from '../components/SideNav/SideNav';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

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

    const [state, setState] = React.useState({
        courseHeader: 'cs61a',
        categories: coursesGroupByName['cs61a']
    })

    const handleOnClick = (event) => {
        setState({
            courseHeader: event.target.getAttribute('value'),
            categories: coursesGroupByName[event.target.getAttribute('value')]
        })
    }
    
    return (
        <div className="flex flex-col relative min-h-screen md:flex">
            <Header/>
            <div className="flex h-full flex-grow">
                <SideNav courses={courseNames} onClick={handleOnClick}/>
                <Content contentHeader={state.courseHeader} contentCategories={state.categories} />
            </div>
            <Footer/>                                    
        </div>  
    )
}

export async function getStaticProps() {
    const client = await clientPromise
    const db = client.db("ProjectPortforlio");

    const data = await db.collection("courses").find({}).toArray();
    
    const courses = JSON.parse(JSON.stringify(data));

    return {
        props: { courses },
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