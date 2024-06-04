import React from 'react';
import { useGetUsersQuery } from '../services/userApi';
import { Grid } from '@mui/material';
import CardGridComponent from '../components/Card/CardGridComponent';

const Dashboard: React.FC = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const totalUsers = users ? users.length : 0;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  const activeUsers :number = users ? users.filter(user => user.active === true).length : 0;
  const countmale :number = users ? users.filter(user => user.gender == 'male').length : 0;
  const countfemale :number = users ? users.filter(user => user.gender == 'female').length : 0;
 
  
  return (
    <div>
      <Grid container style={{marginTop:'10px'}} spacing={3}>
        <CardGridComponent name={'Users'} countvar={totalUsers} backgroundcolor={'lightgreen'}/>
        <CardGridComponent name={'Active User'} countvar={activeUsers} backgroundcolor={'lightyellow'}/>
        <CardGridComponent name={'Total Male'} countvar={countmale} backgroundcolor={'lightcyan'}/>
        <CardGridComponent name={'Total Female'} countvar={countfemale} backgroundcolor={'lightpink'}/>
      </Grid>
    </div>
  );
};

export default Dashboard;
