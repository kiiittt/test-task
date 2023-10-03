import SharedLayout from './SharedLayout';
import Schema from './Schema';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path=' ' element={<Schema/>} />
      </Routes>
    </Router>
  );
};
