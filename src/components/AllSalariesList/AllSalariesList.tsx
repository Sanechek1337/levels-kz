import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { salaryType } from '../../types/salaryTypes.ts';
import styles from './AllSalariesList.module.css';

type AllSalariesListProps = {
  salariesList: salaryType[];
};

const AllSalariesList = ({ salariesList }: AllSalariesListProps) => {
  return (
    <Box>
      <Typography variant="h3">All salaries List</Typography>

      <TableContainer
        className={styles.tableContainer}
        component={Paper}
        sx={{ width: 'fit-content' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Add to compare</TableCell>
              <TableCell>Go to company page</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salariesList.map((salaryData) => (
              <TableRow key={company._id}>
                <TableCell component="th" scope="row">
                  {company.name}
                </TableCell>
                <TableCell>
                  <Button onClick={() => AddToCompare(company._id)}>Add</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => goToCompanyPage(company._id)}>
                    Go to
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllSalariesList;
