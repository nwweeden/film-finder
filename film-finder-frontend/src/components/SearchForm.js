import React, { useState } from 'react';
import './SearchForm.css';

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
			<div className='search-form'>
				<h3>Search for a Movie!</h3>
				<form onSubmit = {handleSubmit}>
					<div className='form-group'>
						<label htmlFor='title'>Title:</label>
						<input
							className='form-control'
							name='title'
							value={formData.title}
							onChange={handleChange}
						/>
						<button className='btn btn-primary'> Search </button>
					</div>

				</form>
			</div>
	)
}

export default SearchForm;