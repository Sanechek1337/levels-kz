import { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '@mui/material/Modal';
import { companyType } from '../../types/companyTypes';
import styles from './PopularCompaniesModal.module.css';

type PopularCompaniesModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  companies: companyType[];
};

export default function PopularCompaniesModal({
  open,
  setOpen,
  companies,
}: PopularCompaniesModalProps) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalBox}>
        <h3 className={styles.table_heading}>Popular companies</h3>

        <table className={styles.table}>
          <tbody>
            {companies.map((company) => (
              <tr key={company._id}>
                <td>
                  <div className={styles.companyLogoName}>{company.name}</div>
                  <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                    explore
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Modal>
  );
}
