import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";
import styles from "./AddProductModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { addPresetProduct } from "../../redux/PresetProduct/action";
import { Alert } from "reactstrap";

const AddProductModal = (props) => {
  const dispatch = useDispatch();
  const { buttonLabel, className, modal, setModal } = props;
  const [errors, setError] = useState("");
  const [title, setTitle] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [webScrapperOrder, setWebScrapperOrder] = useState("");
  const [stars, setStars] = useState("");
  const [ratings, setRatings] = useState("");
  const [price, setPrice] = useState("");
  const [highlights, setHighlights] = useState("");
  const [prime, setPrime] = useState("");
  const [primeDetails, setPrimeDetails] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");

  const toggle = () => setModal(!modal);
  const { add_product, loading } = useSelector(
    (state) => state.PresetProductReducer
  );
  const uploadToServer = () => {
    if (
      !stars ||
      !title ||
      !image ||
      !productUrl ||
      !prime ||
      !price ||
      !ratings
    ) {
      setError("All fields required!");
      return;
    }
    setError("");
    let data = {
      prime_detail: primeDetails,
      prime: prime,
      web_scraper_start_url: productUrl,
      highlights: highlights,
      image_src: image,
      web_scraper_order: webScrapperOrder,
      ratings: ratings,
      stars: stars,
      title: title,
      detail: details,
      price: price,
    };
    dispatch(addPresetProduct(data));
  };

  if (loading) {
    return <Loader />;
  }
  console.log(add_product, "aad");
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Add New Product</ModalHeader>
        <ModalBody className={styles.modal_body}>
          {errors ? <Alert color="danger">{errors}</Alert> : null}

          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Title
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Image Url
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Enter Image Url"
                onChange={(e) => setImage(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Product Url
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Product Url"
                onChange={(e) => setProductUrl(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Stars
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Enter Stars"
                onChange={(e) => setStars(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Ratings
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Enter Rating"
                onChange={(e) => setRatings(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Price
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Prime
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Enter Prime"
                onChange={(e) => setPrime(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className={styles.modal_label}>
              Details
            </Col>
            <Col md={8} lg={8} className={styles.modal_input}>
              <input
                type="text"
                placeholder="Enter Details"
                onChange={(e) => setDetails(e.target.value)}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button className={styles.save_btn} onClick={uploadToServer}>
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

export default AddProductModal;
