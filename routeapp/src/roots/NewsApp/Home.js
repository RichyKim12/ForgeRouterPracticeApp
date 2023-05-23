import React, {useState, useEffect} from 'react';
import './index.css';
import NYT from './NYT.js';

function Home() {
  // API KEY
 
  const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY
  console.log('NYTAPIKEY:', NYT_API_KEY)
  const [NYTData, setNYTData] = useState([])

  // Fetch Article data  
  useEffect(() => {
    fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" + NYT_API_KEY)
    .then((response) => response.json())
    .then((data) => setNYTData(data.results))
    .catch((error) => console.log("Error: ", error))
  },[NYT_API_KEY])
  


  return (
    
      <div id = "home">
        <div className = "spacefill"></div>
        
        
        <div id = "NYT">
          <h2 className='NYT'>Top News Stories</h2>
          <div className = "spacefill"></div>
          {NYTData.length === 0 ? (<p> No Articles </p>) :
            (
              <div className = "NYT">
                {NYTData.slice(0,5).map((item, index) =>
                    // External url redirect
                    // SRC: https://stackoverflow.com/questions/66905176/how-to-redirect-to-external-url-onclick-in-react
                    <button className= "NYTButton" onClick={() => { window.location.href = item.url; }} key={index}>
                      <NYT
                        key = {index}
                        title = {item.title}
                        author = {item.byline}
                        publishDate = {item.published_date}
                        category = {item.nytdsection}
                        url = {item.url}
                      />
                    </button>
                )}  
              </div>  
            )
            }
        </div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>

        
        
        
    </div>

    
  );
}

export default Home;
