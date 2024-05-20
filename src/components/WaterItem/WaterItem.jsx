// src/components/WaterItem.jsx
import { useDispatch } from 'react-redux';
import { deleteWater, patchWater } from '../../redux/water/operations';

export const WaterItem = ({ item, openModal }) => {
  const dispatch = useDispatch();

  //========
  const handleDelete = () => {
    dispatch(deleteWater(item.id));
  };

  const handleEdit = newAmount => {
    const updatedItem = { ...item, amount: newAmount };
    dispatch(patchWater(updatedItem));
  };

  const openDeleteModal = () => {
    openModal('delete', handleDelete);
  };

  const openEditModal = () => {
    openModal('edit', handleEdit);
  };
  //=================

  return (
    <div>
      <div>Date: {item.date}</div>
      <div>Amount: {item.amount}</div>
      <button onClick={openDeleteModal}>Delete</button>
      <button onClick={openEditModal}>Edit</button>
    </div>
  );
};
