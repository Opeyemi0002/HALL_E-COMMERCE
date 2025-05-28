import { HttpException, HttpStatus } from '@nestjs/common';

// convert
export const getIntValidation = (
  data: string | undefined,
  value: string,
): number => {
  const parsedValue = parseInt(data || value, 10); // Default to value if undefined
  return isNaN(parsedValue) ? parseInt(value, 10) : parsedValue; // Return value if NaN
};

export const successResponse = (
  statusCode: number = HttpStatus.OK,
  message: string,
  data: any = null,
) => {
  //return standard API success response
  return {
    status: 'success',
    statusCode,
    message,
    data,
  };
};

export const errorResponse = (
  message: string,
  statusCode: number = HttpStatus.BAD_REQUEST,
  errorType: string = 'BAD_REQUEST',
) => {
  //return standard API error response
  throw new HttpException(
    {
      statusCode,
      message,
      error: errorType,
    },
    statusCode,
  );
};
