import '../css/Card.css'

function Card({info, firstItem}) {
    const handleClick= (e)=>{
        let allDet= document.querySelectorAll("details");

        allDet.forEach((det)=>{
            det.removeAttribute('open');
        });

        let att= document.createAttribute("open");
        att.value= true;
        e.target.setAttributeNode(att)
    }

    return(
        <details open={firstItem} onClick={handleClick}>
            <summary>{info.question}</summary>
            <p>{info.answer}</p>
          </details>
    );
}

export default Card;