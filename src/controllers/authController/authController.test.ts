import UserController from '.';
import { Request, Response } from 'express';

const mockRequest = {} as Request;
const mockResponse = {} as Response;

describe('UserController', () => {
  const userController = new UserController();

  it('should create a new user', async () => {
    const req = { body: { email: 'test@example.com' } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await userController.signup(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      data: expect.any(Object),
      message: 'User created!',
    });
  });

  it('should handle user already exists', async () => {
    const req = { body: { email: 'existing@example.com' } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await userController.signup(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      data: null,
      message: 'User already exists',
    });
  });

  it('should handle server error', async () => {
    const req = { body: { email: 'error@example.com' } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    jest.spyOn(userController['userService'], 'findUserByEmail').mockRejectedValue(new Error('Some error'));

    await userController.signup(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      data: null,
      message: 'Internal server error',
    });
  });
});
