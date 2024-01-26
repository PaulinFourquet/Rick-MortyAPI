import { QueryClient, QueryClientProvider } from 'react-query';
import RouterComponent from './router/router';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div className="app flex flex-col min-h-screen w-full mx-auto">
      <QueryClientProvider client={queryClient}>
        <RouterComponent />
      </QueryClientProvider>
    </div>
  );
};

export default App;