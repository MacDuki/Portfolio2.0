import { useState } from "react";
import "./ContactFormStyles.css";

function ContactForm() {
	const [shake, setShake] = useState(false);
	let value;
	function shakeButtonFunction(e) {
		value = e.target.value;
		if (value.length > 0) {
			setShake(true);
		} else {
			setShake(false);
		}
	}

	return (
		<div class='form-container absolute top-60'>
			<form
				class='form'
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div class='form-group'>
					<label for='email'>Email</label>
					<input type='email' id='email' name='email' required />
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
						onChange={(e) => {
							shakeButtonFunction(e);
						}}
					/>
				</div>
				<button
					className={`form-submit-btn ${shake ? "vibrate-2" : ""}`}
					type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}

export { ContactForm };
