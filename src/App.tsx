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
import { MoveUp, MoveDown } from "lucide-react";
import {
  Container,
  Header,
  Title,
  Percentage,
  Text,
  Calendar,
  DashboardButton,
  Indices,
  Dot,
} from "./_styles/styles";
import GlobalStyle from "./_styles/GlobalStyle";

function App() {
  const data = Object.keys(CATEGORY_TYPE).map((key) => ({
    name: CATEGORY_TYPE[key as keyof typeof CATEGORY_TYPE],
    Alto: Math.floor(Math.random() * 5000),
    Médio: Math.floor(Math.random() * 5000),
    Baixo: Math.floor(Math.random() * 5000),
  }));

  const teste = (Math.random() * 200 - 100).toFixed(1);

  const isPositive = Number(teste) > 0;
  const textColor = isPositive ? "#149D52" : "red";
  const Icon = isPositive ? MoveUp : MoveDown;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Linha do tempo: Avanço dos reportes</Title>
          <DashboardButton>Ver mais</DashboardButton>
        </Header>
        <Percentage textColor={textColor}>
          <Icon color={textColor} size={13} strokeWidth={3} />
          <span>{teste}%</span>
          <Text>desde a última pesquisa</Text>
        </Percentage>
        <Calendar>De 1-12 Dez, 2024</Calendar>
        <ResponsiveContainer width={655} height={574} className="container">
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
            <YAxis type="category" dataKey="name" width={100} />
            <Tooltip />
            <Bar dataKey="Alto" fill="#36A3AE" />
            <Bar dataKey="Médio" fill="#44C5E1" />
            <Bar dataKey="Baixo" fill="#E6E8EC" />
          </BarChart>
        </ResponsiveContainer>
        <Indices>
          <p>
            <Dot color="#36A3AE" />
            Alto
          </p>
          <p>
            <Dot color="#44C5E1" />
            Médio
          </p>
          <p>
            <Dot color="#E6E8EC" />
            Baixo
          </p>
        </Indices>
      </Container>
    </>
  );
}

export default App;
