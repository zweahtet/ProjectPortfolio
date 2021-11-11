import { Layout } from "../../layout/Layout";

export default function Category( props ) {
    return (
        <Layout>
            <div className="content-category">
                <h2 className="panel-heading">{props.category}</h2>
                <div className="panel-body">
                    <h3 className="panel-question">
                        {props.question}
                    </h3>
                    <h3 className="panel-code">
                        {props.code}
                    </h3>
                </div>
            </div>
        </Layout>
    )
}