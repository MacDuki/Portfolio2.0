import "./ContactFormStyles.css";

function ContactForm() {
	return (
		<div class='form-container'>
			<form
				class='form'
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div class='form-group'>
					<label for='email'>Email</label>
					<input type='text' id='email' name='email' required />
				</div>
				<div class='form-group'>
					<label for='textarea'>How Can I Help You?</label>
					<textarea
						name='textarea'
						id='textarea'
						rows='10'
						cols='50'
						required
						maxlength='200'
						placeholder='Maximum 200 characters'
					/>
				</div>
				<button class='form-submit-btn' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}

export { ContactForm };
