import './Button.css'

function Button () {
    function handleClick() {
        console.log("Button Clicked");
        
    }
    return (
        <p className="button" onClick={handleClick}>Upload</p>
    )
}

export default Button