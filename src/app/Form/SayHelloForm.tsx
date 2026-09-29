export default function SayHelloForm() {
    function handleOnClick(e) {
        e.preventDefault();
        const name = (document.getElementById("input_name") as HTMLInputElement)
          .value;
        const out = document.getElementById("text_hello");
        if (out) {
            out.innerText = `Hello ${name}`
        }
    }
    return (
        <div>
            <form>
                <input type="text" id="input_name" placeholder="Please input your name!" />
                <button onClick={handleOnClick}>Say Hello</button>
            </form>
            <h1 id="text_hello"> Hello World</h1>
        </div>
    )
}