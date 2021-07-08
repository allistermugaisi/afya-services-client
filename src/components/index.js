import { lazy } from 'react';

// Perform Code-splitting
export const Landing = lazy(() => import('./Landing/Landing'));
export const Login = lazy(() => import('./Login/Login'));

export { default as Payment } from './Payment/Payment';
