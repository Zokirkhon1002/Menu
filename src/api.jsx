import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const res = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return await res.json();
};

const getAllByCatagories = async () => {
  const res = await fetch(`${API_URL}categories.php`);
  return await res.json();
};

const getByFilter = async (catagoryName) => {
  const res = await fetch(`${API_URL}filter.php?c=${catagoryName}`);
  return await res.json();
};
export { getMealById, getAllByCatagories, getByFilter };
