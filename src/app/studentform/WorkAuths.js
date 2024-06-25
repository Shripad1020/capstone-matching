import { workAuths } from "./constants";

export default function WorkAuths() {
	return (
		<>
			<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="work-authorization">Work Authorization</label>
			<select className="block w-full my-1 px-1" id="work-authorization" required>
				<option value="" disabled selected>Select your work authorization</option>
				{workAuths.map(workAuth => (
					<option key={workAuth} value={workAuth.toLowerCase().replace(/\s+/g, '-')}>
						{workAuth}
					</option>
				))}
			</select>
		</>
	)
}