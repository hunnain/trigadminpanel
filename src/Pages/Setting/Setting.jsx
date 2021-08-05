import React, { useState, useEffect } from "react";
import styles from "./Setting.module.scss";

import AddProductModal from "../../Components/AddProductModal/AddProductModal";
import delete_icon from "../../Assets/delete_icon.svg";
import { Row, Col, Button, Table } from "reactstrap";
import {
  SetPresetProductActive,
  getPresetProducts,
  deletePresetProduct
} from "../../redux/PresetProduct/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
const Setting = () => {
  const dispatch = useDispatch();

  const [addProductModal, setAddProductModal] = useState(false);
  // global state
  useEffect(() => {
    dispatch(getPresetProducts());
  }, []);
  const { all_products, loading } = useSelector(
    (state) => state.PresetProductReducer
  );
  const deleteProduct = (id) => {
    dispatch(deletePresetProduct(id));
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Row className={styles.table_container} g-0 noGutters>
      <Col md={9} lg={9} className={styles.main_container}>
        <Row className={styles.row_bar}>
          <Col md={6} lg={6} className={styles.setting_heading}>
            <h3>Settings</h3>
          </Col>
          <Col md={6} lg={6} className={styles.add_product}>
            <label onClick={(e) => setAddProductModal(true)}>
              Add New Product
            </label>
          </Col>
        </Row>

        <Table className={styles.table_bg} responsive>
          <thead>
            <tr className={styles.table_heading}>
              <th>image</th>
              <th>title</th>
              <th>stars</th>
              <th>ratings</th>
              <th>price</th>
              <th>prime</th>
              <th>detail</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {all_products?.data ? (
              all_products?.data.map((product) => (
                <tr>
                  <td>
                    <img
                      className={styles.product_img}
                      src={product?.image_src}
                    />
                  </td>
                  <td>
                    <a href={product?.web_scraper_start_url} target="_blank">
                      {product?.title}
                    </a>
                  </td>

                  <td>{product?.stars}</td>
                  <td>{product?.ratings}</td>
                  <td>{product?.price}</td>
                  <td>{product?.prime}</td>
                  <td>{product?.detail}</td>
                  <td className={styles.action_container}>
                    <Button
                      className={styles.edit_btn}
                      disabled={product?.isConnected ? true : false}
                      onClick={(e) => dispatch(SetPresetProductActive(product?.id))}
                    >
                      Activate
                    </Button>
                    <Button
                      className={styles.delete_btn}
                      onClick={(e) => deleteProduct(product?.id)}
                    >
                      <img src={delete_icon} alt="delete-icon" />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              null
            )}
            <AddProductModal
              modal={addProductModal}
              setModal={setAddProductModal}
            />
          </tbody>
        </Table>
      </Col>
    </Row>

  );
};

export default Setting;
