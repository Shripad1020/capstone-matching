import WorkAuths from "./WorkAuths";
import ContractSigns from "./ContractSigns";
import Nationalities from "./Nationalities";
import Ethnicities from "./Ethnicities";

export default function StudentForm() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="mb-4 text-center">CSCE Capstone Project Preference Form</h1>
			<p>Howdy! Let us know which industry projects you are interested in.</p>

			<h4>Student Information</h4>
			<p>All information on this form is required.</p>
			<form className="p-12 w-full max-w-3xl">
				<label className="text-label-blue block text-sm font-medium text-gray-900" htmlFor="email">TAMU Email Address</label>
				<input
					type="email"
					id="email"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
				/>
				
				<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="first-name">First Name</label>
				<input
					type="text"
					id="first-name"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
				/>

				<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="last-name">Last Name</label>
				<input
					type="text"
					id="last-name"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
				/>

				<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="uin">UIN</label>
				<input
					type="number"
					id="uin"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
				/>
				
				<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="gender">Gender</label>
				<div className="flex gap-2">
					<input type="radio" id="male" name="gender" value="male" required />
					<label htmlFor="male">Male</label>
					<input type="radio" id="female" name="gender" value="female" required />
					<label htmlFor="female">Female</label>
					<input type="radio" id="other" name="gender" value="other" required />
					<label htmlFor="other">Other</label>
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
