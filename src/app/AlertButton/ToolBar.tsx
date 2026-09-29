export default function ToolBar({firstChild, secondChild, onclick}: {firstChild?: string, secondChild?:string, onclick  }) {
    
    return (
      <div onClick={onclick}>
        <button onClick={onclick}>
          {firstChild ? firstChild : "First Button"}
        </button>
        <button onClick={onclick}>
          {secondChild ? secondChild : "Second Button"}
        </button>
      </div>
    );
}