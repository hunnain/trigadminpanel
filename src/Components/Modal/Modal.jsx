import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import styles from "./Modal.module.scss";

const ProductDetails = (props) => {
  const { buttonLabel, className, modal, setModal, productData } = props;

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Title
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input type="text" placeholder="Enter Title" />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Product Url
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input type="text" placeholder="Product Url" />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Price
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input type="text" placeholder="Enter Price" />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Prime Detail
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input type="text" placeholder="Enter Prime Details" />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Details
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input type="text" placeholder="Enter Details" />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Upload Image
            </Col>
            <Col md={8} lg={8} className={styles.choose_file}>
              <label htmlFor="Choosefile">Choose File</label>
              <input
                id="Choosefile"
                type="file"
                placeholder="choose image"
              />{" "}
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button className={styles.save_btn} onClick={toggle}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductDetails;
