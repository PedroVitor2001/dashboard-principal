import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CATEGORY_TYPE } from "./_constants";
import "./index.css";

function App() {
  const data = Object.keys(CATEGORY_TYPE).map((key) => ({
    name: CATEGORY_TYPE[key as keyof typeof CATEGORY_TYPE],
    Alto: Math.floor(Math.random() * 5000),
    Médio: Math.floor(Math.random() * 5000),
    Baixo: Math.floor(Math.random() * 5000),
  }));

  const teste = "2.1%";

  return (
    <div className="container">
      <div className="header">
        <h3>Linha do tempo: Avanço dos reportes</h3>
        <button className="dashboard-button">Ver mais</button>
      </div>
      <div>{teste} desde a útilma pesquisa</div>
      <ResponsiveContainer width={"50%"} height={500} className="container">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={false} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ className: "category-label" }}
          />
          <Tooltip />
          <Bar dataKey="Alto" fill="#02a6ae" />
          <Bar dataKey="Médio" fill="#12c2d9" />
          <Bar dataKey="Baixo" fill="#e6e7eb" />
        </BarChart>
      </ResponsiveContainer>
      <div className="indices">
        <p>
          <span className="dot-alto"></span>
          Alto
        </p>
        <p>
          <span className="dot-medio"></span>
          Médio
        </p>
        <p>
          <span className="dot-baixo"></span>
          Baixo
        </p>
      </div>
    </div>
  );
}

export default App;
