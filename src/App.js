import React from "react";

import Layout from "./components/Layout";
import RangeEditor from "./components/RangeEditor";

import "./styles/global.css";

function App() {
  return (
    <div className='App'>
      <Layout>
        <RangeEditor />
      </Layout>
    </div>
  );
}

export default App;
