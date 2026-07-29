
export default function HelloWorld() {
    const paragraphText = { text:"This is a paragraph from the HelloWorld component."};
    return (
        <div>
            <Header text="Welcome to My App" />
            <Paragraph {...paragraphText} />
            <Footer />
        </div>
    );
}

function Header({text = "This Is A Header!"}) {
    return (
        <header>
            <h1>{text.toUpperCase()}</h1>
        </header>
    );
}

function Paragraph({text = "This is a paragraph."}) {
    return (
        <p>{text}</p>
    )
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
    );
}