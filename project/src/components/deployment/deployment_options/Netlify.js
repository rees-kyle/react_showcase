const Netlify = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Netlify</h2>
            <h3>Strengths:</h3>
            <p>
                Free hosting for static sites, easy to connect with GitHub repositories.
            </p>
            <p>
                Built-in CI/CD, so deployments happen automatically with every push.
            </p>
            <p>
                Environment variables, custom domains, HTTPS, and simple configuration for redirects.
            </p>

            <h3>Setup:</h3>
            <p>
                Push your project to GitHub, link it to Netlify, select the branch,
                and set the build command ('npm run build') and publish directory ('build').
            </p>
        </div>
    );
};

export default Netlify;