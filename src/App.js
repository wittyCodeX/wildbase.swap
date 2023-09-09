import 'App.css';
import { RouterProvider } from 'react-router-dom'
import PageRouter from 'router'

import Layouts from 'layouts'

function App() {
  return (
    <Layouts>
      <RouterProvider router={PageRouter} />
    </Layouts>
  );
}

export default App;
