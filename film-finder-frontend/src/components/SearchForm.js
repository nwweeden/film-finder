import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap'

/**
 * Renders New Item Form
 * 
 * FindMovies --> SearchForm
 * 
 * State
 *  - Form data
 * 
 * Props
 *  - searchTitle (fn to make call to backend)
 */
function SearchForm({searchTitle}){

	const initialState = {
		title: ''
	}

	const [formData, setFormData] = useState(initialState);

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
			console.debug('Failed to submit form')
		}
	}

	return (
		<Card>
			<CardBody>
				<CardTitle>
					<h3>Search for a Movie!</h3>
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
			</CardBody>
		</Card>
	)
}

export default SearchForm;