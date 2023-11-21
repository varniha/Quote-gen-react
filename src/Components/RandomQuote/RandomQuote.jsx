import React, { useState } from "react";
import "./RandomQuote.css";
import twitter_icon from "../Assets/twitter.png";
import reload_icon from "../Assets/reload.jpg";

const RandomQuote = () => {

    //whenever the component loads in the browser, it will execute the loadQuotes()
    //This func will fetch data from api and store in quotes variable
    

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch ("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfang Von Goethe",
      });

    // to randomly select quotes from those stored in the quotes variable and will be sent to the setQuote state.
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }
  loadQuotes();

  return (
    <div className="Container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img src={reload_icon} onClick={() => {random()}} alt="" width={40} height={40}/>
            <img src={twitter_icon} onClick={() => {twitter()}} alt="" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
