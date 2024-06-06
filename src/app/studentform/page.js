import WorkAuths from "./WorkAuths";
import ContractSigns from "./ContractSigns";
import Nationalities from "./Nationalities";
import Ethnicities from "./Ethnicities";

export default function StudentForm() {
	return (
		<div>
			<h1>CSCE Capstone Project Preference Form</h1>
			<br/>
			<p>Howdy! Let us know which industry projects you are interested in.</p>
			{/* TODO:
				make config file where admin can control date and time for submission of the form and display here */}
			<h4>Student Information</h4>
			<p> All information on this form is required.</p>
			<form>
				<label htmlFor="email">TAMU Email Address</label>
				<input type="email" id="email" required></input>
				
				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name" required></input>
				
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name" required></input>
				
				<label htmlFor="uin">UIN</label>
				<input type="number" id="uin" required></input>
				
				<label htmlFor="gender">Gender</label>
				<div>
					<input type="radio" id="male" name="gender" value="male" required />
					<label htmlFor="male">Male</label>
				</div>
				<div>
					<input type="radio" id="female" name="gender" value="female" required />
					<label htmlFor="female">Female</label>
				</div>
				<div>
					<input type="radio" id="other" name="gender" value="other" required />
					<label htmlFor="other">Other</label>
				</div>
				<div>
					<input type="radio" id="prefer-not-to-say" name="gender" value="prefer-not-to-say" required />
					<label htmlFor="prefer-not-to-say">Prefer not to say</label>
				</div>

				<WorkAuths/>
				<ContractSigns/>
				<Nationalities/>
				<Ethnicities/>

			</form>
		</div>
	);
}