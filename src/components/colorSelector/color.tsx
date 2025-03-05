import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorSelector() {
  const [cor, setCor] = useState('#fff');

  const handleChangeCor = (cor:any) => {
    setCor(cor.hex);
  };

  return (
    <div>
      <SketchPicker
        color={cor}
        onChange={handleChangeCor}
      />
      <p>Cor selecionada: {cor}</p>
    </div>
  );
}