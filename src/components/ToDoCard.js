const ToDoCard = ({card, removeCard}) => {

  const completeButtonHandler = (event) => {
    event.preventDefault()
    removeCard(card.title)
  }

    return(
    <article>
    <h4>{card.title}</h4>
    <p>{card.detail}</p>
    <button onClick={completeButtonHandler}>Complete</button>
  </article>)
}
export default ToDoCard