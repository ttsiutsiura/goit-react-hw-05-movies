import { useSearchParams } from 'react-router-dom';

export function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ query: form.query.value });
    form.reset();
  };

  return (
    <form>
      <input type="text" name="query" />
      <button type="submit" onSubmit={handleSubmit}>
        Search
      </button>
    </form>
  );
}
