export function Container({children}: {children: React.ReactNode}) {
    return (
        <div className="container">
            <h1>Nested Container Title!</h1>
            {children}
        </div>
    );
}