export default function Todo({ text, inCompleted, isDeleted = false }: {text: string, inCompleted: boolean, isDeleted?: boolean}) {
  if (isDeleted) {
    return null
  } else {
    return ( inCompleted ? <li><del>{text}</del></li> : <li>{text}</li>);
  }
}
