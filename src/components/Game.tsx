import { useState } from "react";
import Board from "./Board";

const Game = () =>{
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const[history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares:Array<null | 'X' | 'O'>) =>{
           const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
           setHistory(nextHistory);
           setCurrentMove(nextHistory.length -1);
           setXIsNext((prevState)=>!prevState);
    }

    const jumpTo = (nextMove:number)=>{
           setCurrentMove(nextMove)
           setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((_, move)=>{
        let description:string;
        if(move > 0){
            description = "Go to move#"+ move;
        }else{
            description = "Go to game start";
        }

        return (
            <li key={move}>
                <button onClick={jumpTo.bind(null, move)}>
                    {description}
                </button>
            </li>
        )
    })

  return(
    <div className="game">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    </div>
  )
};

export default Game;