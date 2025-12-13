import { RouterProvider} from "react-router-dom";
import Router from "./routs/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App() {
  const client = new QueryClient()

  return (
    <>
    <QueryClientProvider client={client}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  </>
  );
}
