import { useDispatch, useSelector } from 'react-redux';
import { userSliceProps } from './redux/types';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Index from './pages';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state: userSliceProps) => state);
  console.log(user);

  const [userDatas, setUserDatasState] = useState<string>('');

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* <Route path="/sign-in" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/error404" element={<NotFoundPage />} /> */}
      <Route path="*" element={<Navigate to={'/error404'} />} />
    </Routes>
  );
}

export default App;
