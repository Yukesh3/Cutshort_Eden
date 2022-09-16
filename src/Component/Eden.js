import { useState } from "react"
import Form from "./Form.js";
import TitleWithNumbers from "./HeadingWithNumbers.js";
import TextBox from "./TextBox.js";

const Eden=()=>{
    const [value,setValue] = useState('');
    
    const Name=(e)=>{
        setValue(e.target.value)
    }

    const [view1, setView1] =useState(true);
    const [view2, setView2] =useState(false);
    const [view3, setView3] =useState(false);
    const [view4, setView4] =useState(false);

    const set2=()=>{
        setView1(false);
        setView2(true);
        console.log(value)
    }

    const set3=()=>{
        setView3(true);
        setView2(false);
    }

    const set4=()=>{
        setView3(false);
        setView4(true);
    }

    return(<>

    {/* -------------------------------------------------------Eden Slide 1------------------------------------------------------- */}

    { view1? 
    
    <div className="Box">

       <TitleWithNumbers/>

       <TextBox Text={{main:'Welcome! First things first... ',sub:'You can always change them later.'}}/>

       <Form Value={{label_1:'Full Name',label_2:'Display Name',placeHolder_1:'Steve Jobs',placeHolder_2:'Steve'}} Click={set2} change={Name}/>
     
    </div>   : ""

    }

    {/* ------------------------------------------------------Eden Slide 2------------------------------------------------------ */}


    { view2? 
    
    <div className="Box">

       <TitleWithNumbers Style={{backgroundColor:'#664de4'}} Input={view2}/>

       <TextBox Text={{main:'Lets set up a home for all your work',sub:'You can always create another workspace later.'}}/>

       <Form Value={{label_1:'Workspace Name (optional)',label_2:'Workspace URL',placeHolder_1:'Eden',placeHolder_2:'www.eden.com/'}}
        Click={set3} Style={{wid:'10vw'}} Input={view2}/>

    </div>   : ""

    }

    {/* ------------------------------------------------------Eden Slide 3------------------------------------------------------ */}

    { view3?
    
    <div className="Box">

    <TitleWithNumbers Style={{backgroundColor:'#664de4'}} Input_1={view3}/>

    <TextBox Text={{main:'How are you planning to use Eden?',sub:'We will streamline your setup experience accordingly.'}}/>

    <Form Value={{label_1:'Workspace Name (optional)',label_2:'Workspace URL',placeHolder_1:'Eden',placeHolder_2:'www.eden.com/'}}
     Click={set4} Style={{wid:'10vw'}} Input_1={view3}/>

    </div>   : ""

    }

    {/* ------------------------------------------------------Eden Slide 4------------------------------------------------------ */}


    { view4? 

    <div className="Box">

    <TitleWithNumbers Style={{backgroundColor:'#664de4'}} Input_2={view4}/>

    <div><img src='https://i.postimg.cc/gJLhtfqV/check-2.png' alt='Tick' className="Tick"/></div>

    <TextBox Text={{main:'Congratulations ',name:`${value}!`, sub:'You have completed onboarding, you can start using the Eden!'}} change={Name}/>

    <button style={{width:'50%'}} className='Launch'>Launch Eden</button>

    </div>   : ""

    }



    </>)
}

export default Eden