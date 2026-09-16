export default function Todo({ text, inCompleted, isDeleted = false }: {text: string, inCompleted: boolean, isDeleted?: boolean}) {
  if (isDeleted) {
    return null
  } else if (inCompleted) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  } else {
    return (<li>{text}</li>);
  }
}
