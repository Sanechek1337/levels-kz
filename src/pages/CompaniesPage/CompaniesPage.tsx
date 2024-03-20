import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RootState } from '../../store/store.ts';
import styles from './CompaniesPage.module.css';
import { Button } from '@mui/material';

export default function CompaniesPage() {
  const companiesList = useSelector(
    (state: RootState) => state.companiesListReducer.companiesList
  );

  return (
    <>
      <h2 className={styles.title}>Companies List</h2>

      <TableContainer
        className={styles.tableContainer}
        component={Paper}
        sx={{ width: 'fit-content' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Average salary</TableCell>
              <TableCell>Add to compare</TableCell>
              <TableCell>Go to company page</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companiesList.map((company) => (
              <TableRow key={company.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <img
                    src={company.image}
                    alt={company.name}
                    style={{ borderRadius: '50%', width: 50, height: 50 }}
                  />
                  {company.name}
                </TableCell>
                <TableCell>{company.avarageSalary}</TableCell>
                <TableCell>
                  <Button>Add</Button>
                </TableCell>
                <TableCell>
                  <Button>Go</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}