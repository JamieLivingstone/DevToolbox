import { IconFileDigit, TablerIconsProps } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { Route } from 'react-router-dom';

export type Route = {
  children?: Route[];
  icon?: (props: TablerIconsProps) => ReactNode;
  name: string;
  path: string;
  screen?: ReactNode;
};

export const routes: Route[] = [
  {
    name: 'navigation.encoding.name',
    icon: (props) => <IconFileDigit {...props} />,
    path: '/encoding',
    children: [
      {
        name: 'navigation.encoding.children.jwt.label',
        path: '/jwt',
        screen: <div>JWT</div>,
      },
    ],
  },
];

export function generateRoutes(routes: Route[], parentPath = '') {
  return routes.map((route) => {
    return (
      <Route key={route.path} path={parentPath + route.path} element={route.screen}>
        {route.children && generateRoutes(route.children, parentPath + route.path)}
      </Route>
    );
  });
}

export const routeObjects = generateRoutes(routes);
