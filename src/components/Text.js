import React, { useState, useEffect } from 'react'

export default function Text(props) {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        const words = text.split(/\s+/);
        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);
    }, [text]);

    const handleUPClick = () => {
        // console.log('UpperCase Button Was Pressed');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Word Has been Converted to Upper-Case", "success")
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        // console.log('LowerCase Button was Pressed');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Word Has been Converted to Lower-Case", "success")
    }

    const handleReset = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Area Cleared", "success")
    }

    const handleWordUpClick = () => {
        let newText = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("Letters Capitalized", "success")
    }

    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <div className='container'>
                <h2> {props.heading} </h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea style={{ backgroundColor: `${props.mode}`, color: `${props.textMode}` }} className="form-control" value={text} id={`${props.classMode}`} rows="8" onChange={handleChange} placeholder="Enter Text Here" name="myBox"></textarea>
                </div>
                <div className='my-4 '>
                    <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleUPClick} disabled={text.length===0}>Convert To Uppercase</button>
                    <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleLowClick} disabled={text.length===0}>Convert to Lowercase</button>
                    <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleWordUpClick} disabled={text.length===0}>Convert Word UpperCase</button>
                    <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={removeSpaces} disabled={text.length===0}>Remove Extra Spaces</button>
                    <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={copyText} disabled={text.length===0}>Copy Text</button>
                    <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleReset} disabled={text.length===0}>Clear</button>
                </div>
                <h3>Text Summary</h3>
                <p>{wordCount} Words and {text.length} Charachters </p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing To Preview'}</p>
            </div>
        </>
    )
}
