// src/pages/TrackerPage/TrackerPage.jsx
import { useState } from 'react';
import ReactModal from 'react-modal';

import { WaterMainInfo } from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import { WaterDetailedInfo } from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import { AddWaterBtn } from '../../components/AddWaterBtn/AddWaterBtn';
import { Modal } from 'components/Modal/Modal';
import { WaterModal } from 'components/WaterModal/WaterModal';
import { DeleteWaterModal } from 'components/DeleteWaterModal/DeleteWaterModal';
import { LogOutModal } from 'components/LogOutModal/LogOutModal';
import { AddWaterForm } from 'components/WaterForm/AddWaterForm';
import { EditWaterForm } from 'components/WaterForm/EditWaterForm';

import style from '../Base.module.css';
import UserSettingsModal from 'components/UserSettingsModal/UserSettingsModal.jsx';

ReactModal.setAppElement('#root');

function TrackerPage() {
  const [modal, setModal] = useState({ isOpen: false, content: null });
  
  function openModal(content) {
    setModal({ isOpen: true, content });
  }

  function afterOpenModal() {
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModal({ isOpen: false, content: null });
    document.body.style.overflow = "scroll";
  }

  return (
    <div className={style.container}>
      <WaterMainInfo />
      <WaterDetailedInfo openModal={openModal}/>
      <AddWaterBtn openModal={openModal} />
      {modal.isOpen && <Modal isMainModalOpen={modal.isOpen} onClose={closeModal} onAfterOpen={afterOpenModal}>
        {((modal.content === "add") || (modal.content === "edit")) && (
          <WaterModal modal={modal} onClose={closeModal}>
            {modal.content === "add" && <AddWaterForm />}
            {modal.content === "edit" && <EditWaterForm />}
          </WaterModal>
        )}
        {modal.content === "delete" && <DeleteWaterModal onClose={closeModal} />}
        {modal.content === "logout" && <LogOutModal onClose={closeModal} />}
        {modal.content === "settings" && <UserSettingsModal onClose={closeModal} />}
      </Modal>}
    </div>
  );
};

export default TrackerPage;
