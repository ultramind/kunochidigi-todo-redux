import React from 'react'

const AddInput = () => {
  return (
    <div className='form'>
      <form>
        <input type='text' placeholder='Enter todo item...' />
        <button>
          <span>Add</span>
        </button>
      </form>
    </div>
  )
}

export default AddInput
