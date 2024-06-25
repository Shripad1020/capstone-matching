import { contractSigns } from "./constants";

export default function ContractSigns() {
	return (
		<>
			<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="contract-sign">Willingness to Sign Contract</label>
			<select className="block w-full my-1 px-1" id="contract-sign" required>
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