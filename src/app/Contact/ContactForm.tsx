import { useState } from "react";

export default function ContactForm() {
    const [contact, setContact] = useState({
        name: '',
        message: ''
    });

    function handleNameChange(e) {
        setContact({...contact, name: e?.target?.value})
    }

    function handleMessageChange(e) {
        setContact({...contact, message: e?.target?.value})
    }

    return (
        <div>
            <div className="InputForm">
            <h1>Contact Form</h1>
                <form>
                    <input type="text" placeholder="Please Input Name" value={contact.name} onChange={handleNameChange} />
                    <br />
                    <input type="text" placeholder="Please Input Message" value={contact.message} onChange={handleMessageChange} />
                </form>
            </div>
            <div className="ResultForm">
                <h1>Contact Detail</h1>
                <p>Name: {contact.name}</p>
                <p>Message: {contact.message}</p>
            </div>
        </div>
    )
}