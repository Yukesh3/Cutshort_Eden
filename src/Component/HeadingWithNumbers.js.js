const TitleWithNumbers = (props) => {
    return (<>

        <div className="Heading" >
            <img src='https://i.postimg.cc/rm5HXYq4/Screenshot-2022-09-16-041336.png' alt='Img' width='40px' height='40px' />
            Eden
        </div>


        <div className="PageNo">


            <div className="Number one" >1</div>

            <div className="hrDiv">
                <hr className="oneHalf " />
            </div>

            <div className=" hrDiv">
                <hr className="SecondHr"
                    style={{ backgroundColor: props.Input || props.Input_1 || props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }} />
            </div>


            <div className="Number" style={{ backgroundColor: props.Input || props.Input_1 || props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }}>2</div>

            <div className="hrDiv">
                <hr style={{ backgroundColor: props.Input || props.Input_1 || props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }} />
            </div>

            <div className=" hrDiv">
                <hr className="SecondHr" style={{ backgroundColor: props.Input_1 || props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }} />
            </div>


            <div className="Number" style={{ backgroundColor: props.Input_1 || props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }}>3</div>

            <div className="hrDiv">
                <hr style={{ backgroundColor: props.Input_1 || props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }} />
            </div>
            <div className=" hrDiv">
                <hr className="SecondHr" style={{ backgroundColor: props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }} />
            </div>


            <div className="Number" style={{ backgroundColor: props.Input_2 ? `${props.Style.backgroundColor}` : 'white' }}>4</div>
            

        </div>

    </>)
}

export default TitleWithNumbers