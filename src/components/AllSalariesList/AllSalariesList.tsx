import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
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

      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Person location</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Base salary</TableCell>
              <TableCell>Bonus salary</TableCell>
              <TableCell>Total experience</TableCell>
              <TableCell>Company exp.</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Created at</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {salariesList.map((salaryData) => (
              <TableRow key={salaryData._id}>
                <TableCell>{salaryData.company?.name || 'N/A'}</TableCell>
                <TableCell>{salaryData.location?.name || 'N/A'}</TableCell>
                <TableCell>
                  {salaryData.specialization?.name || 'N/A'}
                </TableCell>
                <TableCell>{salaryData.salary?.base || 'N/A'}</TableCell>
                <TableCell>{salaryData.salary?.bonus || 'N/A'}</TableCell>
                <TableCell>{salaryData?.yoe || 'N/A'}</TableCell>
                <TableCell>{salaryData?.yac || 'N/A'}</TableCell>
                <TableCell>{salaryData?.grade || 'N/A'}</TableCell>
                <TableCell>
                  {salaryData?.created?.toString().slice(0, 10) || 'N/A'}
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
