import { routeObjects } from '@config/routing';
import { AppShell } from '@mantine/core';
import { BrowserRouter, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <AppShell navbar={{ width: 300, breakpoint: 'sm' }} padding="md">
        <AppShell.Navbar>Navbar</AppShell.Navbar>

        <AppShell.Main>
          <Routes>{routeObjects}</Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  );
}
