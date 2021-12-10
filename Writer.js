const Writer = () => {
    console.log('from writer')

    return (
        <div className= 'typing-holder'>
            <form className= 'form-writer'>
                <label for="lname">Type here:</label>
                <input type="text" id="lname" name="lname"></input>
            </form>
        </div>
    )
}


export default Writer