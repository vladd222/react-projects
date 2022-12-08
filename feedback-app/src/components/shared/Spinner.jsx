import spinner from'../assets/spinner.gif'

function Spinner () {
    return (
        <img src={spinner} alt="Loading..." style={{color: '#f4f4f4', width: '75px', margin: 'auto', display: 'block'}}/>
    )
}

export default Spinner