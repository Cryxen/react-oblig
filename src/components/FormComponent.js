import { useState } from "react"

const FormComponent = ({addCardHandler}) => {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')

const buttonHandler = (event) => {
  event.preventDefault()
  addCardHandler(title, content)
} 

const titleInputHandler = (event) => {
  setTitle(event.target.value)
}

const contentInputHandler = (event) => {
  setContent(event.target.value)
  console.log(content)
}

return(
    <form>
    <label htmlFor="titleInput">Title</label>
    <input type="text" id="titleInput" onChange={titleInputHandler} value={title}/>
    <label htmlFor="contentInput">Content </label>
    <textarea id="contentInput" onChange={contentInputHandler} value={content}> </textarea>
    <button onClick={buttonHandler}>add</button>
  </form>
)

}
export default FormComponent