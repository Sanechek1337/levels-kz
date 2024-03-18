import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '@mui/material/Modal';
import styles from './PopularCompanies.module.css';

export interface Product {
  id: string;
  image: string;
  name: string;
}

export interface LatestProductsProps {
  products?: Product[];
  sx?: SxProps;
}

export function PopularCompanies({
  products = [],
  sx,
}: LatestProductsProps): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  return (
    <Card sx={sx}>
      <CardHeader title="Popular Companies" />
      <Divider />
      <List>
        {products.slice(0, 5).map(
          (
            product,
            index // Slice the array to show only the first 5 items
          ) => (
            <ListItem divider={index < 4} key={product.id}>
              {' '}
              {/* Add a divider for all items except the last one */}
              <ListItemAvatar>
                {product.image ? (
                  <Box
                    component="img"
                    src={product.image}
                    sx={{ borderRadius: 1, height: '48px', width: '48px' }}
                  />
                ) : (
                  <Box
                    sx={{
                      borderRadius: 1,
                      backgroundColor: 'var(--mui-palette-neutral-200)',
                      height: '48px',
                      width: '48px',
                    }}
                  />
                )}
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                explore
              </Button>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          onClick={() => setOpen(true)}
          color="inherit"
          size="large"
          variant="text"
        >
          View all
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={styles.modalBox}>
            <table className={styles.table}>
              <thead className={styles.table_heading}>Popular Companies</thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className={styles.companyLogoName}>
                        <Box
                          component="img"
                          src={product.image}
                          sx={{
                            borderRadius: 1,
                            height: '48px',
                            width: '48px',
                          }}
                        />
                        {product.name}
                      </div>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                      >
                        explore
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}
