import { ComponentType, lazy, LazyExoticComponent } from 'react';

export interface ROUTE_ITEM {
  id: number;
  path: string;
  component: LazyExoticComponent<ComponentType<any>>;
}

export const ROUTES: ROUTE_ITEM[] = [
  {
    id: 1,
    path: '/',
    component: lazy(() => import('./home'))
  },
  {
    id: 2,
    path: '/sign-in',
    component: lazy(() => import('./sign-in'))
  },
  {
    id: 3,
    path: '/sign-up',
    component: lazy(() => import('./sign-up'))
  }
];
