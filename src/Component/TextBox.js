const TextBox=(props)=>{
    return(<>

        <div className="TextBox">

            <div className="Text_Main" >
               {props.Text.main}{props.Text.name}
            </div>

            <div className="Text_Sub">
               {props.Text.sub}
            </div>

        </div>
    </>)
}

export default TextBox