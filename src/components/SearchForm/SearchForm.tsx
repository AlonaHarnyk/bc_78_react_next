import type { DebouncedState } from "use-debounce";

interface Props {
  searchQuery: string;
  onSearch: DebouncedState<(query: string) => void>;
}

export default function SearchForm({ searchQuery, onSearch }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <label>
      Search query:
      <input type="text" defaultValue={searchQuery} onChange={handleChange} />
    </label>
  );
}
