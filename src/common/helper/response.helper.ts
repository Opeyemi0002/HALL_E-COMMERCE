import { HttpException, HttpStatus } from '@nestjs/common';

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
