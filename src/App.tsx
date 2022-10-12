import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_ITEM, ROUTES } from './pages';

const App = () => {
  return (
    <Routes>
      {ROUTES.map((el: ROUTE_ITEM) => {
        return (
          <Route
            key={el.id}
            path={el.path}
            element={
              <Suspense fallback={null}>
                <el.component />
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
