import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap'

/**
 * Renders New Item Form
 * 
 * App --> {NavBar, router(AddItem)}
 * 
 * State
 *  - Form data
 *  - Error messages
 * 
 * Props
 *  - title - value of what type of item is being added
 *  - addItem (function to handle posting a new item)
 */
function SearchForm({searchTitle}){

	const initialState = {
		title: ''
	}

	const [formData, setFormData] = useState(initialState);
	const [errorMessage, setErrorMessage] = useState('');

	function handleChange(evt){
		const {name, value } = evt.target;
		setFormData(formData => {
			return {
				...formData,
				[name]: value
			}
		})
	}

	async function handleSubmit(evt){
		evt.preventDefault();
		try {
			await searchTitle(formData)
		} catch(err){
			setErrorMessage('No results for that title')
		}
	}

	return (
		<Card>
			<CardBody>
				<CardTitle>
					<h3>Search for a Movie title!</h3>
				</CardTitle>
				<form onSubmit = {handleSubmit}>

					<label htmlFor='title'>Title:</label>
					<input
						name='title'
						value={formData.title}
						onChange={handleChange}
					/>

					<button> Search </button>
				</form>
				{errorMessage && <div>{errorMessage}</div>}
			</CardBody>
		</Card>
	)
}

export default SearchForm;