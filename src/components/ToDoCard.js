const ToDoCard = ({card}) => {


    return(
    <article>
    <h4>{card.title}</h4>
    <p>{card.detail}</p>
    <button>Complete</button>
  </article>)
}
export default ToDoCard