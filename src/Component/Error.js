import '../css/Error.css'

function Error(){
    return(
        <main>
            <h2>Something went wrong</h2>
            <section>
                <strong>Server Error:</strong>Unable to complete your request.
                <a href="/"><button>Try Again</button></a>
            </section>
        </main>
    );
}

export default Error;