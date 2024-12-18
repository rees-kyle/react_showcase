import example from './../../../assets/example.jpg';
import './self-closing-tags.css';

const SelfClosingTags = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Self Closing Tags</h2>
            <p>
                In HTML, a self-closing tag is typically written using a single tag with a slash before the closing angle bracket.
                This indicates that the element does not have any child elements or content inside it.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`<img src={example} alt="An example image" />`}
                </code>
            </pre>

            <h3>Output:</h3>
            <div className="img-container">
                <img src={example} alt="An example" />
            </div>
        </div>
    );
};

export default SelfClosingTags;