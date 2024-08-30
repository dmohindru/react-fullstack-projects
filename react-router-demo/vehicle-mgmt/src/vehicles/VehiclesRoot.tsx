import React from 'react';
import type { LoggedInUser, Vehicle } from '../data';
import { getCurrentUser, getUserVehicles, logoutUser } from '../data';
import { useLoaderData, redirect, Form, Outlet } from 'react-router-dom';
import { AppBar, Typography, Button, Box, Toolbar } from '@mui/material';
import { SidePanel } from './SidePanel';

type LoginData = {
  user: LoggedInUser;
  vehicles: Vehicle[] | null;
};

export const loader = async (): Promise<LoginData | Response> => {
  const user = await getCurrentUser();
  if (!user) {
    return redirect('/');
  } else {
    const vehicles = await getUserVehicles(user.username);
    return {
      user,
      vehicles,
    };
  }
};

export const action = async () => {
  await logoutUser();
  return redirect('/');
};

export const VehiclesRoot: React.FC = () => {
  const { user, vehicles } = useLoaderData() as LoginData;
  // Temp code
  // const mockVehicleList: Vehicle[] = [
  //   {
  //     id: 'some-id-1',
  //     make: 'Ford',
  //     model: 'Falcon',
  //     year: 2007,
  //     value: 6000,
  //     favorite: false,
  //   },
  //   {
  //     id: 'some-id-2',
  //     make: 'Ford',
  //     model: 'Focus',
  //     year: 2013,
  //     value: 10000,
  //     favorite: true,
  //   },
  //   {
  //     id: 'some-id-3',
  //     make: 'Hyundai',
  //     model: 'i30',
  //     year: 2015,
  //     value: 12000,
  //     favorite: false,
  //   },
  // ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      boxSizing="border-box"
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            {user.username}
          </Typography>
          <Form method="post">
            <Button color="inherit" type="submit">
              Logout
            </Button>
          </Form>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row" py={1} flexGrow={1}>
        <Box flex={2}>
          <SidePanel vehicles={vehicles ?? []} />
        </Box>
        <Box flex={5}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
