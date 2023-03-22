import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  let [slideNum, setSlideNum] = useState(0);

  function prevClicked(){
    setSlideNum(slideNum-1);
  }
  function nextClicked(){
    setSlideNum(slideNum+1);
  }
  function restartClicked(){
    setSlideNum(0);
  }
  return (
    <>
      <div id="slide">
        <h1 data-testid="title">{slides[slideNum].title}</h1>
        <p data-testid="text">{slides[slideNum].text}</p>
      </div>

      <button disabled = {slideNum == 0} data-testid="button-prev" onClick={prevClicked}>Prev</button>
      <button disabled = {slideNum == 4} data-testid="button-next" onClick={nextClicked}>Next</button>
      <button disabled = {slideNum == 0} data-testid="button-restart" onClick={restartClicked}>Restart</button>  

      {/* {slideNum == 0 ?
        <nav id="navigation">
          <button data-testid="button-prev" onClick={prevClicked} disabled>Prev</button>
          <button data-testid="button-next" onClick={nextClicked}>Next</button>
          <button data-testid="button-restart" onClick={restartClicked} disabled>Restart</button>
        </nav>
        : slideNum == 4 ?        
        <nav id="navigation">
          <button data-testid="button-prev" onClick={prevClicked}>Prev</button>
          <button data-testid="button-next" onClick={nextClicked} disabled>Next</button>
          <button data-testid="button-restart" onClick={restartClicked}>Restart</button>
        </nav>
        :
        <nav id="navigation">
          <button data-testid="button-prev" onClick={prevClicked}>Prev</button>
          <button data-testid="button-next" onClick={nextClicked}>Next</button>
          <button data-testid="button-restart" onClick={restartClicked}>Restart</button>
        </nav>
      }       */}
    </>
  )
}


export default App;
