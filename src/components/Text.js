import React,{useState} from 'react'

export default function Text(props) {
    const handleUpclick=()=>{
        //console.log("upper wase click"+text);
        let newText=text.toUpperCase();
        setText(newText);
         props.showalert("convert to uppercase","success")

    }
    const handledown=()=>{
        let newText=text.toLowerCase();
        setText (newText);
        props.showalert("convert to lowercase","success")
       
    }
    const handleonchange=(event)=>{

setText(event.target.value);
    }
    const cleartext=()=>{ 
      let newtext=""
      setText(newtext);
      props.showalert(" clear text","success")
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showalert("convert to speak mode","success")
    }
    const[ text,setText]=useState("")
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      
<div className="mb-3">
  <label htmlFor="text" className="form-label"><h1>Example Text area</h1> </label>
  <textarea className="form-control" value={text}  onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}} id="text" rows="10"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2'  onClick={handledown} > convert to downcase</button>
<button  disabled={text.length===0}type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
<button  disabled={text.length===0}className='btn btn-danger mx-2 my-2' onClick={cleartext}>cleartext</button>

    </div>
    
    <div className="container my-3 my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

<h1>Your text summary</h1>
<p style={{fontWeight: "bold"}}>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length}word and{text.length}character</p>
<p style={{fontWeight: "bold"}}>{0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length}mins</p>
<h2>preview </h2>
<p style={{fontWeight: "bold"}}>{text.length>0?text:'enter some text to perview'}</p>
    </div>
    </>
  )
}
