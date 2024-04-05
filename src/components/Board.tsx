
import Square from "./Square"
import { calculateWinner } from "../lib/calculateWinner";

interface BoardProps {
    xIsNext:boolean,
    squares: Array<null | 'X' | 'O'>,
    onPlay:(nextSquares: Array<null | 'X' | 'O'>)=>void
}


const Board = ({xIsNext, squares, onPlay}:BoardProps) =>{


    const winner:null | 'X' | 'O' = calculateWinner(squares);
    let status:string;
    if(winner){
        status = "Winner: "+ winner;
    }else{
        status = "Next player: "+ (xIsNext ? 'X' : 'O')
    }
    

    const handleClick = (index:number) =>{
        if(squares[index] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[index] = 'X';
        }else{
            nextSquares[index] = 'O'
        }
        onPlay(nextSquares);
    }
    return(
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square onSquareClick={handleClick.bind(null, 0)} value={squares[0]}/>
            <Square onSquareClick={handleClick.bind(null, 1)} value={squares[1]}/>
            <Square onSquareClick={handleClick.bind(null, 2)} value={squares[2]}/>
        </div>
        <div className="board-row">
        <Square onSquareClick={handleClick.bind(null, 3)} value={squares[3]}/>
        <Square onSquareClick={handleClick.bind(null, 4)} value={squares[4]}/>
        <Square onSquareClick={handleClick.bind(null, 5)} value={squares[5]}/>
        </div>
        <div className="board-row">
        <Square onSquareClick={handleClick.bind(null, 6)} value={squares[6]}/>
        <Square onSquareClick={handleClick.bind(null, 7)} value={squares[7]}/>
        <Square onSquareClick={handleClick.bind(null, 8)} value={squares[8]}/>
        </div>
        </>
    )
};

export default Board;