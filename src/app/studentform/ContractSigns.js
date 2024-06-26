import { contractSigns } from "./constants";

export default function ContractSigns() {
	return (
		<>
			<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="contract-sign">Willingness to Sign Contract<span className="text-red-600"> *</span></label>
			<select className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300" 
				id="contract-sign" required>
				<option value="" disabled selected>Select your agreement preference</option>
				{contractSigns.map(workAuth => (
					<option key={workAuth} value={workAuth.toLowerCase().replace(/\s+/g, '-')}>
						{workAuth}
					</option>
				))}
			</select>
		</>
	)
}