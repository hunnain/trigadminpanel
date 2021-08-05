import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import {
  Row,
  Col,
  Table,
  Button
} from "reactstrap";
import { getProducts, addBulkProduct } from "../../redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import UploadCsvModal from "../../Components/UploadCsvModal/UploadCsvModal";
import formData from "form-data";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [csv, setCsv] = useState(null);
  const [csvModal, setCsvModal] = useState(false);

  // global state
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { all_products, loading } = useSelector(
    (state) => state.ProductReducer
  );
  const uploadToServer = () => {
    let data = new formData();
    data.append("file", csv[0]);
    dispatch(addBulkProduct(data));
    setCsv(null);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {csvModal && <UploadCsvModal csvModal={csvModal} setCsvModal={setCsvModal} uploadToServer={uploadToServer} csv={csv} setCsv={setCsv} />}
      <Row className={styles.table_container} g-0 noGutters>
        <Col md={9} lg={9} className={styles.main_container}>
          <Row className={styles.row_bar}>
            <Col md={6} lg={6} className={styles.dashboard_heading}>
              <h3>Dashboard</h3>
            </Col>
            <Col md={6} lg={6} className={styles.upload_csv}>
              <Button className={styles.upload_button} onClick={e => setCsvModal(true)}>
                Upload CSV
              </Button>
            </Col>
          </Row>

          <Table className={styles.table_bg} responsive>
            <thead>
              <tr className={styles.table_heading}>
                <th>image</th>
                <th>title</th>
                <th>stars</th>
                <th>ratings</th>
                <th>highlights</th>
                <th>price</th>
                <th>prime</th>
                <th>prime-detail</th>
                <th>detail</th>
              </tr>
            </thead>
            <tbody>
              {all_products?.data ? (
                all_products?.data.map((product) => (
                  <tr>
                    <td>
                      <img
                        className={styles.product_img}
                        src={product.image_src}
                      />
                    </td>
                    <td>
                      <a href={product.web_scraper_start_url} target="_blank">
                        {product.title}
                      </a>
                    </td>
                    <td>{product.stars}</td>
                    <td>{product.ratings}</td>
                    <td>{product.highlights}</td>
                    <td>{product.price}</td>
                    <td>{product.prime}</td>
                    <td>{product.prime_detail}</td>
                    <td>{product.detail}</td>
                    {/* <td>
                    <Button
                      className={styles.edit_btn}
                      // onClick={(e) => setModal(true)}
                    >
                      <img src={delete_icon} alt="" />
                    </Button>
                  </td> */}
                  </tr>
                ))
              ) : (
                <h1>No Product Found</h1>
              )}

            </tbody>
          </Table>

        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
