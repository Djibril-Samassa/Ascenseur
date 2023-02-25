/* eslint-disable */
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(true)
  const [direction, setDirection] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    currentStage !== direction ? (setTimeout(() => {
      move()
    }, [2000]), setIsOpen(false)) : setTimeout(() => { setIsOpen(true) }, [2000])
  }, [currentStage, direction])

  const move = () => {
    isMoving ? null : (setIsMoving(true),
      direction < currentStage ?
        /* descendre */
        setCurrentStage(currentStage - 1)
        : direction > currentStage ?
          /* monter */
          setCurrentStage(currentStage + 1)
          : null

    ),
      setIsMoving(false)
  }

  return (
    <div className="App">
      <h3>Bienvenue sur le projet Ascenseur Par Djibril SAMASSA</h3>
      <div className='ascenseur'>
        <h3 className='afficheur'>{currentStage}</h3>
        <span className='line'></span>
        {isOpen ?
          <div className='porte ouvert'>
            <div className='buttons'>
              <span onClick={() => { setTimeout(() => { setDirection(0) }, [2000]) }}>0</span>
              <span onClick={() => { setTimeout(() => { setDirection(1) }, [2000]) }}>1</span>
              <span onClick={() => { setTimeout(() => { setDirection(2) }, [2000]) }}>2</span>
              <span onClick={() => { setTimeout(() => { setDirection(3) }, [2000]) }}>3</span>
              <span onClick={() => { setTimeout(() => { setDirection(4) }, [2000]) }}>4</span>
              <span onClick={() => { setTimeout(() => { setDirection(5) }, [2000]) }}>5</span>
              <span onClick={() => { setTimeout(() => { setDirection(6) }, [2000]) }}>6</span>
              <span onClick={() => { setTimeout(() => { setDirection(7) }, [2000]) }}>7</span>
              <span onClick={() => { setTimeout(() => { setDirection(8) }, [2000]) }}>8</span>
              <span onClick={() => { setTimeout(() => { setDirection(9) }, [2000]) }}>9</span>
            </div>
          </div> :
          <div className='porte ferme'>
            <span></span>
          </div>
        }
      </div>
      <div className='liens'>
        <h3>Mes liens</h3>
        <nav>
          <li><a href='https://github.com/Djibril-Samassa?tab=repositories' target="_blank">Github</a></li>
          <li><a href='https://www.linkedin.com/in/djibril-samassa/' target="_blank">Linkedin</a></li>
          <li><a href='https://djibrilsamassa.netlify.app/' target="_blank">Mon portfolio</a></li>
        </nav>
      </div>
    </div>
  );
}

export default App;
