import embeddingExpressions from './../../../assets/embedding_expressions.png';
import './embedding-expressions.css';

const EmbeddingExpressions = () => {
    const name = "Kyle";
    return (
        <div>
            <h2>Embedding Expressions</h2>
            <p>You can embed any valid JavaScript expression inside curly braces in JSX. For example, variables or function calls can be included within JSX.</p>

            <h3>Code:</h3>
            <div className="img-container">
                <img src={embeddingExpressions} alt="Embedding Expresisons" />
            </div>

            <h3>Output:</h3>
            <h1>Hello, {name}!</h1>
        </div>
    );
};

export default EmbeddingExpressions;
