# react-multi-select-custom

Um componente de seleção múltipla para React.

https://github.com/user-attachments/assets/bb8d83b3-e5e3-4931-8c43-5ca7171e06e9

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
