import { Analytics } from '@vercel/analytics/react';

import TextField from './components/text-field';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <TextField />
      <Sidebar />
      <Analytics mode={'production'} />
    </>
  );
}

export default App;
