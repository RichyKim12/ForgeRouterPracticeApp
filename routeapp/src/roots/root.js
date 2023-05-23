import {Link} from 'react-router-dom';

const root = () =>{
    return (
        // <section className='section'>
        <>
            <h2> Home Page </h2>
            <div>
                <Link to = "/tttapp"> 
                    Tic-Tac-Toe App 
                </Link> 
            </div>
            <div>
                <Link to = "/weatherapp"> 
                    Weather App 
                </Link> 
            </div>
            <div>
                <Link to = "/triviaapp"> 
                    Trivia App 
                </Link> 
            </div>
            <div>
                <Link to = "/menuapp"> 
                    Menu App 
                </Link> 
            </div>

        </>
        // </section>
        
    );
}
export default root;
