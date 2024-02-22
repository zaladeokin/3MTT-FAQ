import '../css/Card.css'

function Card({info, firstItem}) {
    const handleClick= (id)=>{

        let allDet= document.querySelectorAll("details");

        allDet.forEach((det)=>{
            if(id !== det.id) det.open= false;
        });
    }

    return(
        <details open={firstItem} id={info.id} onClick={()=> handleClick(info.id)}>
            <summary><div>{info.question}</div></summary>
            <p>{info.answer}</p>
          </details>
    );
}

export default Card;