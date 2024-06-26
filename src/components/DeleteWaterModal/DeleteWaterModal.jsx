import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { deleteWater } from "../../redux/water/operations";
import sprite from "../../img/svg/sprite.svg";
import css from "./DeleteWaterModal.module.css";

export const DeleteWaterModal = ({ onClose, selectedWater }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteWater(selectedWater))
            .unwrap()
            .then(() => {
                toast.success('Water successfully delete!', {
                    style: {
                        border: '1px solid #0d47a1',
                        padding: '16px',
                        color: '#9BE1A0',
                    },
                    iconTheme: {
                        primary: '#9BE1A0',
                        secondary: '#fff',
                    },
                });
                onClose();
            })
            .catch(() => {
                toast.error('Oops, something go wrong!', {
                    style: {
                        border: '1px solid #F1041B',
                        padding: '16px',
                        color: '#323F47',
                    },
                    iconTheme: {
                        primary: '#F1041B',
                        secondary: '#fff',
                    },
                });
            })
    };

    return (
        <div className={css.modalContainer}>
            <div className={css.buttonContainer}>
                <button className={css.closeButton} type="button" onClick={onClose}>
                    <svg className={css.icon} width="14" height="14">
                        <use xlinkHref={`${sprite}#icon-exsit`}></use>
                    </svg>
                </button>
            </div>
            <div className={css.contentContainer}>
                <h2 className={css.title}>Delete entry</h2>
                <p className={css.question}>Are you sure you want to delete the entry?</p>
                <div className={css.buttons}>
                    <button className={css.yesButton} type="button" onClick={handleDelete}>Delete</button>
                    <button className={css.noButton} type="button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};