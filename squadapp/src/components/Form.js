function Forms() {
    return (
        <form className="shadow-lg mb-5">
            <div className="mt-6 ">
                <label for="myURL" className="mt-2" ><h3> Website address:</h3></label>
                <input
                    id="myURL"
                    name="myURL"
                    type="url"
                    required
                    pattern=".*\.myco\..*"
                    title="The URL must be in a Myco domain" />
                <span class="validity"></span>
            </div>
            <div>
                <button className="mt-3  mb-2">Submit</button>
            </div>

        </form>
    )
}
export default Forms
