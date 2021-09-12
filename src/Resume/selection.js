import {
  toDo,
  groceryInventory,
  wheresWaldo,
  parkingSpot,
  blog,
  thenextweb,
} from './projects';

const selections = {
  frontend: [toDo, wheresWaldo, thenextweb],
  fullstackReactNode: [blog, toDo, wheresWaldo],
  fullstackReactNodeREST: [blog, groceryInventory, toDo],
  fullstackReactNodeDjango: [groceryInventory, wheresWaldo, parkingSpot],
  backend: [groceryInventory, parkingSpot, blog],
};

export default selections.fullstackReactNodeREST;
