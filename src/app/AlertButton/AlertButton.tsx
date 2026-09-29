export default function AlertButton({ text, message }: { text?: string; message?: string }) {
  function handleClick(e) {
    console.log('console log e from handleClick',e)
    alert( message ? message : "Button clicked");
  }

  return <button onClick={handleClick}>{text ? text : 'Click'}</button>;
}