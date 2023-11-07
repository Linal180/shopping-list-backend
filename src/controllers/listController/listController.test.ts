import ListController from '.'; // Import your controller
import { Request, Response } from 'express';

const mockListService = {
  createList: jest.fn(),
  shareList: jest.fn(),
  getSharedLists: jest.fn(),
};

const user = { id: 123 }; // Mock user data

describe('ListController', () => {
  const listController = new ListController();

  it('should create a new list', async () => {
    const req = { body: {} } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    mockListService.createList.mockResolvedValue({ /* your list data here */ });

    await listController.createList(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      data: expect.any(Object),
      message: 'List created!',
    });
  });

  it('should handle createList error', async () => {
    const req = { body: {} } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    mockListService.createList.mockRejectedValue(new Error('Some error'));

    await listController.createList(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      data: null,
      message: 'Internal server error',
    });
  });

  it('should share a list', async () => {
    const req = { body: {} } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    mockListService.shareList.mockResolvedValue({ /* your shared list data here */ });

    await listController.shareList(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      data: expect.any(Object),
      message: 'List shared!',
    });
  });

  it('should handle shareList error', async () => {
    const req = { body: {} } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    mockListService.shareList.mockRejectedValue(new Error('Some error'));

    await listController.shareList(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      data: null,
      message: 'Internal server error',
    });
  });

  it('should get shared lists', async () => {
    const req = { user } as any; // Mock the user
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    mockListService.getSharedLists.mockResolvedValue([/* your shared lists data here */]);

    await listController.getSharedLists(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: expect.any(Array),
      message: 'Fetched shared lists!',
    });
  });

  it('should handle getSharedLists error', async () => {
    const req = { user } as any; // Mock the user
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    mockListService.getSharedLists.mockRejectedValue(new Error('Some error'));

    await listController.getSharedLists(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      data: null,
      message: 'Internal server error',
    });
  });
});
