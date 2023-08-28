import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const JoinSuccessModal = ({ showModal, onClose }) => {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>회원 가입 완료</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        회원 가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동하여 로그인해주세요.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JoinSuccessModal;
