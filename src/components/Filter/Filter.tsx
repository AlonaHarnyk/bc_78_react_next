interface Props {
  onSubmit: (status?: string) => void;
}

export default function Filter({ onSubmit }: Props) {
  const handleSubmit = async (formData: FormData) => {
    const status = formData.get("status") as string;

    if (status) {
      if (status === "all") {
        onSubmit();
      } else {
        onSubmit(status);
      }
    }
  };

  return (
    <form action={handleSubmit}>
      <select name="status">
        <option value="all">All</option>
        <option value="true">Online</option>
        <option value="false">Offline</option>
      </select>
      <button>Search</button>
    </form>
  );
}
