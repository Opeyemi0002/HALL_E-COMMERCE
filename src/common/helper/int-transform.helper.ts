// convert
export const getIntValidation = (
  data: string | undefined,
  value: string,
): number => {
  const parsedValue = parseInt(data || value, 10); // Default to value if undefined
  return isNaN(parsedValue) ? parseInt(value, 10) : parsedValue; // Return value if NaN
};
