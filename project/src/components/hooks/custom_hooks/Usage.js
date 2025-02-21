import useFetch from './CustomHook';

function Usage() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <br/>
            <hr/>
            <h2>Using the Custom Hook in a Component</h2>
            <h3>Code:</h3>
            <pre>
                <code>
                    {`import useFetch from './useFetch';

function Usage() { 
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Loading...</p>; 

    return ( 
        <div> 
            {data.map((item) => (
                <h4 className="output" key={item.id}>{item.name}</h4>
            ))}
        </div>
    );
};

export default Usage;
`}
                </code>
            </pre>

            <h3>Output:</h3>
            {data.map((item) => (
                <h4 className="output" key={item.id}>{item.name}</h4>
            ))}
        </div>
    );
};

export default Usage;