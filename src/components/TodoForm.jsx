import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!value || !category) return;
        // console.log(value, category)
        addTodo(value, category);
        setValue("")
        setCategory("")
        // clear 

    }
  return (
    <div>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite o titulo' value={value} onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button className='todo-btn' type="submit">Adicionar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm