import { useBearStore } from "../stores/useBearStore";

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>There are {bears} bears about...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

function zustand() {
  return (
    <>
      <BearCounter />
      <br />
      <Controls />
    </>
  );
}

export default zustand;
