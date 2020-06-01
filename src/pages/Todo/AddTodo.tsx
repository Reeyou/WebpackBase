import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../state/actions/todo'

//@ts-ignore
let AddTodo = ({ dispatch }) => {
    let input = {
        value: ''
    }

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        //@ts-ignore
                        input = node
                    }}
                />
                <button className="button" type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

//@ts-ignore
let _AddTodo = connect()(AddTodo)

export default _AddTodo