interface Props {
  onSubmit: (searchWord: string) => void;
}

export default function SearchForm({ onSubmit }: Props) {
  const handleSubmit = (formData: FormData) => {
    const data = formData.get("search") as string;
    onSubmit(data);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="search" />
      <button>Search</button>
    </form>
  );
}
