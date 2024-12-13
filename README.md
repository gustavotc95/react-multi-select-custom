# react-multi-select-custom

Um componente de seleção múltipla para React.

## Instalação

### npm

```sh
npm install react-multi-select-custom
```

### GitHub Packages

```sh
npm install @gustavotc95/react-multi-select-custom --registry=https://npm.pkg.github.com
```

## Uso

```jsx
import React, { useState } from "react";
import MultiSelect from "react-multi-select-custom";

const options = [
  { id: "1", name: "Option 1" },
  { id: "2", name: "Option 2" },
  { id: "3", name: "Option 3" },
];

const App = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <MultiSelect
      options={options}
      selectedValues={selectedValues}
      onChange={setSelectedValues}
      label="Select Options"
      id="multi-select"
    />
  );
};

export default App;
```

## Propriedades

| Propriedade      | Tipo                           | Descrição                                   |
| ---------------- | ------------------------------ | ------------------------------------------- |
| `options`        | `Option[]`                     | Lista de opções disponíveis para seleção.   |
| `selectedValues` | `string[]`                     | Lista de valores selecionados.              |
| `onChange`       | `(selected: string[]) => void` | Função chamada quando a seleção é alterada. |
| `label`          | `string`                       | Rótulo do campo de seleção múltipla.        |
| `id`             | `string`                       | ID do campo de seleção múltipla.            |

## Estilos

Certifique-se de importar o arquivo CSS para aplicar os estilos ao componente:

```jsx
import "react-multi-select-custom/dist/style.css";
```
