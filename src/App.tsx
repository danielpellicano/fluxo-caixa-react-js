import { Dashboard } from "./components/Dashboard";
import { GlobaStyle } from "./styles/global";
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobaStyle />
    </>
  );
}