import { Outlet } from "react-router"
import { useRouter } from "./routes/hooks"
import { useEffect } from "react";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/pages/dashboard");
  }, []);

  return (
    <Outlet />
  )
}

export default App