import ThemeToggle from "../shared/ui/ThemeToggle/ThemeToggle";
import AppRouter from "./providers/router/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <ThemeToggle />
    </>
  );
}

export default App;
