import { contractSigns } from "./constants";

export default function ContractSigns() {
	return (
		<>
			<label htmlFor="contract-sign">Willingness to Sign Contract</label>
			<select id="contract-sign" required>
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