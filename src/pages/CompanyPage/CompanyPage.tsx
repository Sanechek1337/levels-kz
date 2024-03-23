import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { AppDispatch, RootState } from '../../store/store';
import { getCompaniesList } from '../../store/slices/companiesListSlice.ts';
import { getSalariesList } from '../../store/slices/salariesSlice.ts';
import { filterByCompany } from '../../helpers/filterByCompany.ts';
import styles from './CompanyPage.module.css';

export const CompanyPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const company = useSelector((state: RootState) =>
    state.companiesListReducer.companiesList.find(
      (company) => company._id === id
    )
  );

  const salariesList = useSelector(
    (state: RootState) => state.salariesListReducer.salariesList
  );

  const companySalaries = filterByCompany(salariesList, company);

  const title = company ? (
    <Typography variant="h2">{company.name}</Typography>
  ) : (
    <Typography variant="h2">Company Not Found!</Typography>
  );

  useEffect(() => {
    dispatch(getCompaniesList());
    dispatch(getSalariesList());
  }, []);

  return (
    <Box sx={{ width: '65%', margin: '0 auto' }}>
      {title}

      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          marginTop: '20px',
          padding: '20px 0',
        }}
      >
        <p>
          Company name:{' '}
          <span className={styles.companyInfo}>{company?.name}</span>
        </p>
        <p>
          Company location:{' '}
          <span className={styles.companyInfo}>{company?.location?.name}</span>
        </p>
      </Paper>

      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Person location</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Base salary</TableCell>
              <TableCell>Bonus salary</TableCell>
              <TableCell>Total experience</TableCell>
              <TableCell>Experience in this company</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Created at</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {companySalaries.map((salaryData) => (
              <TableRow key={salaryData._id}>
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
