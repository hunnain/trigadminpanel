import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import DeleteIcon from "../../Assets/delete_icon.svg";
import styles from "./UploadCsvModal.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCsv, SetCsvData,DeleteCsv } from "../../redux/Products/action"
import Loader from "../Loader/Loader"
const UploadCsvModal = ({ csv, setCsv, uploadToServer, setCsvModal, csvModal }) => {
  const dispatch = useDispatch();
  const [selectedCsv, setSelectedCsv] = useState([])
  const [nonSelectedCsv, setNonSelectedCsv] = useState([])
  const [SelectedId, setSelectedId] = useState()
  const [disableButton, setDisableButton] = useState(true)
  const { loading_csv, csvs } = useSelector(state => state.ProductReducer)
  useEffect(() => {
    dispatch(getCsv());
  }, [])
  useEffect(() => {
    if (csvs) {
      setSelectedCsv(csvs.filter(csv => csv.isSelected === true))
      setNonSelectedCsv(csvs.filter(csv => csv.isSelected === false))
    }
  }, [csvs])
  const toggle = () => setCsvModal(!csvModal);

  useEffect(() => {
    setDisableButton(true);
    if (SelectedId?.length) return setDisableButton(false)
  }, [SelectedId])
  const handleChange = (id) => {
    setSelectedId(id);
  }
  const handleServerUpdate = () => {
    if (SelectedId) {
      dispatch(SetCsvData(SelectedId, toggle))

    }
  }
  if (loading_csv) return <Loader />
  return (
    <div>
      <Modal size="lg" isOpen={csvModal} toggle={toggle} className={styles.modalContent}>
        <ModalHeader >Upload CSV</ModalHeader>
        <ModalBody className={styles.modal_body}>
          <Row >
            <Col className={styles.csvfile}>
              <h5>Active file : </h5>
              {
                selectedCsv && selectedCsv.length ? selectedCsv.map(csv => (
                  <h6>{csv?.filename}</h6>

                )) : null
              }
            </Col>
          </Row>
          <Row className={styles.csv_row}>
            {
              nonSelectedCsv && nonSelectedCsv.length ? nonSelectedCsv.map(csv => (
                <Col className={styles.csvfile}>
                  <input onChange={e => handleChange(e.target.id)} type="radio" name="csv" id={csv?.id} />
                  <p>{csv?.filename}</p>
                  <Button onClick={e=>dispatch(DeleteCsv(csv?.id))}><img src={DeleteIcon} className="img img-fluid"/></Button>
                </Col>

              )) : null
            }

          </Row>

        </ModalBody>
        <ModalFooter className={styles.modal_footer}>

          <Col className={styles.upload_csv}>

            {csv ? (
              <Button className={styles.upload_button} onClick={uploadToServer}>
                Upload
              </Button>
            ) : (
              <>
                <label htmlFor="Choosefile">Upload New CSV</label>
                <input
                  id="Choosefile"
                  type="file"
                  placeholder="Upload CSV"
                  onChange={(e) => setCsv(e.target.files)}
                />
              </>
            )}
          </Col>
          <Button className={styles.UploadServer_btn} onClick={handleServerUpdate} disabled={disableButton}>
            Upload To Server
          </Button>

        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UploadCsvModal;
