const Vercel = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Vercel</h2>
            <h3>Strengths:</h3>
            <p>
                Great for both static and serverless applications.
            </p>
            <p>
                Optimized for Next.js but works smoothly with React.
            </p>
            <p>
                Automatic builds and deploys with GitHub integration, supports custom domains and environment variables.
            </p>

            <h3>Setup:</h3>
            <p>
                Link your GitHub repository in Vercel, select the build output directory as 'build', and Vercel will handle the rest.
            </p>
        </div>
    );
};

export default Vercel;