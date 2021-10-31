import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../layout/Layout';
import Posts from "../components/Posts/Posts";
import { Section } from '../styles/GlobalComponents';

export default function Discussions({ discussions }) {
    return (
        <div>
            <Layout>
                <div>This is disucssion page</div>
                <div>
                    {discussions.length === 0 ? (
                        <h2>No added discussions</h2>
                    ) : (
                        <ul>
                            {discussions.map((discussion, i) => (
                                <Posts discussion={discussion} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
            </Layout>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;
  
    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/discussions`);
    // extract the data
    let data = await response.json();
  
    return {
        props: {
            discussions: data['message'],
        },
    };
  }