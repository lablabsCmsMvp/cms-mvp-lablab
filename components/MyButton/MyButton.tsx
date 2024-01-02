type MyProps = { content: string; link: string }

// Any component in your codebase
function MyButton(props: MyProps) {
  return <a href={props.link}>{props.content}</a>
}

export default MyButton;
