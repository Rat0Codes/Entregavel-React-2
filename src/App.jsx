
import { useState } from "react";

import Button from "./components/Button";
import Badge from "./components/Badge";
import Input from "./components/Input";
import Card from "./components/Card";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl space-y-8">

        <header>
          <h1 className="text-3xl font-bold text-gray-900">
            Biblioteca UI
          </h1>

          <p className="mt-2 text-gray-600">
            Componentes reutilizáveis com React e Tailwind CSS.
          </p>
        </header>

        {/* BUTTON */}
        <Card title="Button" description="Botões com diferentes variantes.">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Card>

        {/* BADGE */}
        <Card title="Badge" description="Indicadores de status.">
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Sucesso</Badge>
            <Badge variant="error">Erro</Badge>
            <Badge variant="warning">Atenção</Badge>
            <Badge variant="info">Informação</Badge>
          </div>
        </Card>

        {/* INPUT */}
        <Card title="Input" description="Campos de entrada de dados.">
          <div className="space-y-3">
            <Input
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className="text-sm text-gray-600">
              Nome digitado: {name || "Nenhum nome informado"}
            </p>
          </div>
        </Card>

        {/* ALERT */}
        <Card title="Alert" description="Mensagens de alerta.">
          <div className="space-y-3">
            <Alert variant="success">
              Operação realizada com sucesso!
            </Alert>

            <Alert variant="error">
              Ocorreu um erro durante a operação.
            </Alert>

            <Alert variant="warning">
              Atenção: verifique os dados informados.
            </Alert>
          </div>
        </Card>

        {/* CARD */}
        <Card title="Card" description="Componente de agrupamento de conteúdo.">
          <p className="text-gray-600">
            Este é um exemplo de conteúdo inserido dentro de outro Card.
          </p>
        </Card>

      </div>
    </main>
  );
}

export default App;
