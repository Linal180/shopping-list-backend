import { Router } from "express";
import * as sharedListController from "../../controllers/sharedListController";

import express from 'express';
import { shareShoppingList, viewSharedShoppingLists } from './shoppingListController'; // Import your controllers

const shoppingListRouter = express.Router();

// Define the route to share a shopping list
shoppingListRouter.post('/share-list', shareShoppingList);

// Define the route to view shared shopping lists for a user
shoppingListRouter.get('/shared-lists/:userId', viewSharedShoppingLists);

export default shoppingListRouter;
