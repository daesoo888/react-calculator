function Controller(props){
    const {compute} = props;

    return(
        <div>
            <button onClick={() => { compute(-1) }}>-1</button>
            <button onClick={() => { compute(-10) }}>-10</button>
            <button onClick={() => { compute(-100) }}>-100</button>
            <button onClick={() => { compute(100) }}>+100</button>
            <button onClick={() => { compute(10) }}>+10</button>
            <button onClick={() => { compute(1) }}>+1</button>
        </div>
    );
}

export default Controller;