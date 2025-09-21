// src/utils/Validator.ts

/**
 * Utility class for validating calculation request data.
 */
class Validator {
	/**
	 *
	 * @param operation The operation to validate.
	 * @throws Will throw an error if the operation is missing or not a string.
	 */
	private static validateOperation(operation: any): void {
		if (!operation || typeof operation != "string") {
			throw new Error("field operation of 'string' type must exist");
		}
	}

	/**
	 * Validates the operand.
	 * @param operand The operand to validate.
	 * @param fieldName The name of the field being validated.
	 * @throws Will throw an error if the operand is missing or not a number.
	 */
	private static validateOperand(operand: unknown, fieldName: string): void {
		if (typeof operand !== "number" || Number.isNaN(operand)) {
			throw new Error(
				`field '${fieldName}' of type 'number' must exist`
			);
		}
	}

	/** Validates the entire calculation data object.
	 * @param data The data object to validate.
	 * @throws Will throw an error if any required field is missing or invalid.
	 */
	public static validate(data: any): void {
		try {
			this.validateOperation(data.operation);
			this.validateOperand(data.op1, "op1");
			this.validateOperand(data.op2, "op2");
		} catch (error) {
			throw error;
		}
	}
}

export default Validator;
