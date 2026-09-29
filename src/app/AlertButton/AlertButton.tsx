export default function AlertButton({ text, message }: { text?: string; message?: string }) {
  function handleClick() {
    alert( message ? message : "Button clicked");
  }

  return <button onClick={handleClick}>{text ? text : 'Click'}</button>;
}