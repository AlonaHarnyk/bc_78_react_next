import type { DebouncedState } from "use-debounce";

interface Props {
  searchQuery: string;
  onChange: DebouncedState<(query: string) => void>;
}

export default function SearchContactForm({ searchQuery, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <label>
      Search contact:
      <input type="text" defaultValue={searchQuery} onChange={handleChange} />
    </label>
  );
}
