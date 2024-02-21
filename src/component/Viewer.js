function Viewer(props){
    const {number} = props;

    return(
        <div>
            <div>현재 카운트: </div>
            <h1>{number}</h1>
        </div>
    );
};

export default Viewer;