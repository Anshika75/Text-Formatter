import React, { useState } from 'react'
import './TextBox.css'
import Button from './Button';

export default function TextBox() {
    const containerStyle = {
        marginBottom: "15px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "0px 50px",
        flexWrap: "wrap",
    }

    const previewStyle = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "25px 0px",
    }

    const previewBox = {
        width: "340px",
        padding: "10px",
        border: "2px solid #4a4a8a",
        borderRadius: "5px",
        textAlign: "center",
        margin: "10px",
        userSelect: "none",
        height: "200px",
        overflowY: "scroll",
        backgroundColor: "rgba(1, 1, 65, 0.354)",
        color: "#9c9cd6",
    }

    const [text, setText] = useState('');

    const onchange = (e) => {
        setText(e.target.value)
    }

    const uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const copy = () => {
        var text = document.getElementById("txtBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    const clear = () => {
        let newText = '';
        setText(newText)
    }
    const whitespace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
            <div className='container' style={containerStyle}>
                <Button text="UpperCase" function={uppercase} />
                <Button text="LowerCase" function={lowercase} />
                <Button text="Copy" function={copy} />
                <Button text="Clear" function={clear} />
                <Button text="Remove Whitespaces" function={whitespace} />
            </div>
            <textarea cols="40" rows="10" value={text} onChange={onchange} id="txtBox"></textarea>
            <div className="previewbox" style={previewStyle}>
                <h1 style={{ color: "#010141" }}>Preview Box</h1>
                <p style={previewBox}>{text.length > 0 ? text : "Please enter your text"}</p>
            </div>
            <div className="summary" style={containerStyle}>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words</p>
                <p>{text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            </div>
        </>
    )
}