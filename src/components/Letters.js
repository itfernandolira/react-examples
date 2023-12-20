import './letters.css';

const Letters = () => {

    const letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }

    const showLetters = letters.map( (letter, index) => {
        return (
            <div key={index} className="letter">
                {letter}
            </div>
        );
    })

    return (
        <div className="letters">
            {showLetters}
        </div>
    )
}

export default Letters;