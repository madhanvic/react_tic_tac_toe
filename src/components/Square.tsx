

interface SquareProps{
    value: null | 'X' | 'O',
    onSquareClick: ()=>void
}

const Square = ({value, onSquareClick}:SquareProps) =>{
    


    return <button type="button" className="square" onClick={onSquareClick}>{value}</button>
}

export default Square;