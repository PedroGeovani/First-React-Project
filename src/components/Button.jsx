function Button(props) {
  return(
    <button {...props} className={`bg-slate-400 ${props.width} text-left text-white p-2 rounded-md ${props.isCompleted && "line-through"}`}>
      {props.children} 
    </button>          
  )
}
export default Button