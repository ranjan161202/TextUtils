import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] =useState({
    //     color: "black",
    //     backgroundColor : "white"
    // })
   
    let myStyle = {
        color:props.mode ==='dark'?'white':'#042743',
        backgroundColor:props.mode ==='dark' ?'rgb(36, 74, 104)':'white',
        border:props.mode ==='dark'?"0": "1px solid rgba(0,0,0,.125)"
    }

    return (
        <>
        <div className='container'>
            <h1 className='my-3' style={{color:props.h1_color}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <strong> Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,character count 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo" style={myStyle}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}> 
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils is a free character counter tool that provides instant charcter count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree" style={myStyle}> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                   This word counter software works in any browsers such as Chrome, Firefox , Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* <div className='my-3'>
            <button onClick={toggleStyle} className='btn btn-primary'>{btnText}</button>
        </div> */}
        </>
    )
}
