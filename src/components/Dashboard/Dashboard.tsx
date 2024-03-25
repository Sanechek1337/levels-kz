import { Grid } from '@mui/material';
import { Salaries } from './Salaries.tsx';
import { Traffic } from './Traffic.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import AllSalariesList from '../AllSalariesList/AllSalariesList.tsx';

export function Dashboard() {
  const { salariesList } = useSelector(
    (state: RootState) => state.salariesListReducer
  );

  const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <Grid item lg={6} md={12} xs={12}>
          <Salaries sx={cardStyles} />
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Traffic
            chartSeries={[40, 40, 20]}
            labels={['Frontend', 'Backend', 'UI/UX']}
            sx={cardStyles}
          />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <AllSalariesList salariesList={salariesList} />
        </Grid>
      </Grid>
    </>
  );
}
