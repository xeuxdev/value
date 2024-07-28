import { Button } from "@/components/ui/button";
import { Header } from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <Button className="text-white/50">Click me</Button>
      <main></main>
    </>
  );
}
