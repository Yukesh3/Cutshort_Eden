const Form = (props) =>{

    return (<>
        <form className="Form" style={{gridTemplateColumns: props.Input_1? '50% 50%':'100%' }}>

        {props.Input_1?

            <div className="View3">
                <div ><img src='https://i.postimg.cc/057V4xFV/user-912bb810ab1a5b432ffe.png' alt='SingleProfile'/></div>
                <div >For myself</div>
                <div style={{color:'#8b97b1'}}>Write better. Think more clearly. Stay organized.</div>
            </div>
        
        :  
            <div>
                <div className="Label">{props.Value.label_1}</div>
                <div className="Input"><input type='text' placeholder={props.Value.placeHolder_1} onChange={props.change} required/></div>
            </div>
        }


        {props.Input_1?

            <div className="View3">
                <div ><img src='https://i.postimg.cc/JzYxXhHz/user-Group-d753559654bf3177931b.png' alt='TeamProfile'/></div>
                <div >With my team</div>
                <div style={{color:'#8b97b1'}}>Wikis, docs, tasks & projects, all in one place.</div>
            </div>
        
        :  
            <div>
                <div className="Label">{props.Value.label_2}</div>
                <div className="Input">
                    <input type='text' placeholder={props.Value.placeHolder_2} style={{ width: props.Input ? `${props.Style.wid}` : '100%' }} />
                    {props.Input ?
                        <input type='text' placeholder='Example' /> : ""
                    }
                </div>
            </div>
        }  

            <div>
                <div className='Button' style={{  width:props.Input_1? '200%':'100%'}}><button onClick={props.Click}>Create Workspace</button></div>
            </div>

        </form>
    </>)
}

export default Form