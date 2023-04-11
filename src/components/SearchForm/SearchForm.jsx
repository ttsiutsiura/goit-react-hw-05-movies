import { useState } from 'react';

export function SearchForm() {
  const [query, setQuery] = useState('');

  return (
    <form>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
}
