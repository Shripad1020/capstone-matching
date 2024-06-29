import WorkAuths from "./WorkAuths";
import ContractSigns from "./ContractSigns";
import Nationalities from "./Nationalities";
import Ethnicities from "./Ethnicities";

export default function StudentForm() {
	return (
		<div className="flex flex-col items-center min-h-full">
			<h1 className="mt-8 text-center text-4xl font-medium">CSCE Capstone Project Preference Form</h1>
			<p className="mt-3 mb-8 text-lg font-normal">Howdy! Let us know which industry projects you are interested in.</p>

			<h4 className="text-2xl font-semibold ">Student Information</h4>
			<p>All information on this form is required.</p>
			<form className="p-12 w-full max-w-3xl">
				<label className="text-label-blue block text-sm font-medium" htmlFor="email">TAMU Email Address<span className="text-red-600"> *</span></label>
				<input
					type="email"
					id="email"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
					required
				/>
				
				<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="first-name">First Name<span className="text-red-600"> *</span></label>
				<input
					type="text"
					id="first-name"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
					required
				/>

				<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="last-name">Last Name<span className="text-red-600"> *</span></label>
				<input
					type="text"
					id="last-name"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
					required
				/>

				<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="uin">UIN<span className="text-red-600"> *</span></label>
				<input
					type="number"
					id="uin"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
					required
				/>
				
				<label className="text-label-blue mt-3 block text-sm font-medium">Gender<span className="text-red-600"> *</span></label>
				<div className="flex gap-2">
					<input type="radio" id="male" name="gender"required />
					<label htmlFor="male">Male</label>
					<input type="radio" id="female" name="gender"required />
					<label htmlFor="female">Female</label>
					<input type="radio" id="other" name="gender"required />
					<label htmlFor="other">Other</label>
					<input type="radio" id="prefer-not-to-say" name="gender" required />
					<label htmlFor="prefer-not-to-say">Prefer not to say</label>
				</div>

				<WorkAuths/>

				<ContractSigns/>

				<Nationalities/>

				<Ethnicities/>

				<br/>
				<hr/>

				<input type="checkbox" id="terms" className="mr-2 mt-4"/>
				<label className="text-code-maroon mt-4 text-sm font-medium" htmlFor="terms">
					By checking this box, you are agreeing to having your information stored and used by CSCE capstone professors to help match you with a capstone project.
				</label>
      
				<button type="submit" className="block my-5 bg-code-maroon text-white py-1.5 px-4 rounded mx-auto">
					Submit
				</button>

				<hr/>
			</form>
		</div>
	);
}
