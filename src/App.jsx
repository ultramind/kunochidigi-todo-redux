import AddInput from './components/AddInput'
import Header from './components/Header'
import TodoLists from './components/TodoLists'

function App () {
  return (
    <>
      <div className='container'>
        <Header />
        <AddInput />
        <h5>All Listst</h5>
        <TodoLists />
      </div>
    </>
  )
}

export default App
