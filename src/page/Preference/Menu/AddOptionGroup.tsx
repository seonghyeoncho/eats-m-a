import React, { useState } from 'react';
import Modal from 'react-modal';
import { OptionGroupEditor } from '../../../component';

interface props {}

const AddOptioGroup: React.FC<props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <div onClick={() => setIsModalOpen(!isModalOpen)}>옵션그룹 추가</div>
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div>추가</div>
        <div>
          <OptionGroupEditor onChange={() => {}} />
        </div>
        <div></div>
      </Modal>
    </>
  );
};

export default AddOptioGroup;
