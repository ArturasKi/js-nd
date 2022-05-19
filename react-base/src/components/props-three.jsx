function Propsthree({pirmas, antras, spalva}) {
    return (
        <> 
            <h1 style={
                {
                    color: spalva
                }
            }>{pirmas}</h1>
            <h2 style={
                {
                    color: spalva
                }
            }>{antras}</h2>
        </>
    );
}

export default Propsthree;