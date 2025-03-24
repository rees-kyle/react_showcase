const GitHubPages = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>GitHub Pages</h2>
            <h3>Strengths:</h3>
            <p>
                Free hosting for static sites directly from GitHub.
            </p>
            <p>
                Great for smaller projects or documentation sites.
            </p>
            <p>
                Supports custom domains.
            </p>

            <h3>Setup:</h3>
            <p>
                Run 'npm run build' to generate the 'build' folder.
            </p>
            <p>
                Use a deployment tool like 'gh-pages' to publish the build folder to GitHub Pages,
                or manually push to a 'gh-pages' branch.
            </p>
        </div>
    );
};

export default GitHubPages;