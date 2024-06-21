import items from './items.json';

export const fetchItems = () => {
  return Promise.resolve(items);
};
