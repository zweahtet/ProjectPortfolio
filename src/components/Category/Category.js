import { Layout } from "../../layout/Layout";
// import CodeDisplay from "../CodeDisplay/CodeDisplay";
import { CopyBlock, dracula } from "react-code-blocks";

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
                        <CopyBlock text={props.code} language="python" showLineNumbers={true} theme={dracula}/>
                    </h3>
                </div>
            </div>
        </Layout>
    )
}