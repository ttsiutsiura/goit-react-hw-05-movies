import { useSearchParams } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { Input } from './SearchForm.styled';
import { Wrapper } from './SearchForm.styled';

export function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={movieName}
        onChange={e => updateQueryString(e.target.value)}
        name="query"
      />
      <BiSearch />
    </Wrapper>
  );
}
