export default function Filter() {
  const handleSubmit = (formData: FormData) => {
    const status = formData.get("status");
    console.log(status);
  };

  return (
    <form action={handleSubmit}>
      <select name="status">
        <option disabled value="">
          Select status
        </option>
        <option value="all">All</option>
        <option value="true">Online</option>
        <option value="false">Offline</option>
      </select>
      <button>Search</button>
    </form>
  );
}
