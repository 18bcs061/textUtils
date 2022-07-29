import React,{useState} from 'react'
export default function Text(props) {
  const handleonclick=()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }
   
  const handlelonclick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleonchange=(event)=>{
     setText(event.target.value)

  }

  const [text, setText] = useState('');
  return (
    <>
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3" style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'dark'}}>
  <textarea className="form-control" placeholder="Leave a comment here" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="floatingTextarea" rows="8" value={text} onChange={handleonchange}></textarea>
</div>
  <button type='submit' className="btn-primary" onClick={handleonclick}>Change In UpperCase</button>
  <button type='submit' className="btn-primary mx-3" onClick={handlelonclick}>Change In UpperCase</button>
  <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
  <p style={{color:props.mode==='dark'?'white':'black'}}>{text===''?text.length:text.split(' ').length} word and {text.length} character</p>
  <h3 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h3>
  <p style={{color:props.mode==='dark'?'white':'black'}}>{text===''?'enter some text to preview':text}</p>
    </>
  );
}
