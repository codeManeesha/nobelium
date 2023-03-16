import React, { useState } from 'react';

const TextAreaWithLimit=()=> {
  const [text, setText] = useState('');

  function handleInputChange(event) {
    const { value } = event.target;
    if (value.length <= 100) {
      setText(value);
    }
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={handleInputChange}
        maxLength={100}
      />
      <p>{100 - text.length} characters remaining</p>
    </div>
  );
}
export default TextAreaWithLimit