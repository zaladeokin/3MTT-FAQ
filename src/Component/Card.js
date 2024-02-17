import '../css/Card.css'

function Card({info, firstItem}) {
    return(
        <details open={firstItem}>
            <summary>{info.question}</summary>
            <p>{info.answer}</p>
          </details>
    );
}

export default Card;