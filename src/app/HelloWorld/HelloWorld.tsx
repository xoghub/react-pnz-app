
export default function HelloWorld() {
    return (
        <div>
            <Header text="Welcome to My App" />
            <p>Selamat datang di React! Test</p>
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

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
    );
}