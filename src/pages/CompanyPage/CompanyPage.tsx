import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CompanyName from './CompanyName';
import CollapsibleTable from './Table';
import { Overview } from './Overview';
import { RootState } from '../../store/store';
import { companyType } from '../../types/companyTypes';

export const CompanyPage = () => {
  const [module, setModule] = useState('overview');
  const [company, setCompany] = useState<companyType | null>(null);
  const { id } = useParams();
  const companiesList = useSelector(
    (state: RootState) => state.companiesListReducer.companiesList
  );

  useEffect(() => {
    const selectedCompany = companiesList?.find(
      (company) => company._id === id
    );
    if (selectedCompany) {
      setCompany(selectedCompany);
    }
  }, [id, companiesList]);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {company ? (
        <>
          <Typography variant="h2">{company.name}</Typography>
        </>
      ) : (
        <Typography variant="h2">Company Not Found!</Typography>
      )}
      <CompanyName id={id} setModule={setModule} />
      {module === 'overview' ? <Overview /> : <CollapsibleTable />}
    </Box>
  );
};
