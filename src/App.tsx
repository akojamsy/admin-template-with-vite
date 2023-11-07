
import { Toaster } from 'sonner';
import AppRoute from './routes';

const App = () => {

  return (
    <>
      <AppRoute/>
      <Toaster
        position="top-right"
        richColors={true}
      />
    </>
  )
}

export default App
