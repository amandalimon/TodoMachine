import React, { useState } from 'react'
import './UserForm.css'

function UserForm({ setOpenModal, addUser }) {
	const [userValue, setUserValue] = useState('')

	const onChangeInputValue = (event) => {
		setUserValue(event.target.value)
	}

	const onSubmitUser = (event) => {
		event.preventDefault()
		console.log(`Hola ${userValue}`)
		if (userValue.length > 0) {
			addUser(userValue)
			setOpenModal(false)
		}
	}

	return (
		<form className='UserForm' onSubmit={onSubmitUser}>
			<h1>
				¡Hola! <br /> Bienvenido a TODO Machine :)
			</h1>
			<label>¿Cuál es tu nombre?
				<input
					type='text'
					id="nombre"
					placeholder='Tu nombre'
					maxLength='13'
					value={userValue}
					onChange={onChangeInputValue}
				/>
			</label>
			<button className='UserForm__button' type='submit'>
				¡Empecemos!
			</button>
		</form>
	)
}

export { UserForm }