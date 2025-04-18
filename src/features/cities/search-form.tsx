interface SearchFormProps {
  setCityName: (cityName: string) => void;
  defaultValue: string;
}

function SearchForm({ setCityName, defaultValue }: SearchFormProps) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cityName = formData.get('cityName') as string;
    setCityName(cityName);
  };

  return (
    <form onSubmit={onSubmit} className="input-group" data-testid="search-form">
      <input
        type="text"
        className="input-field"
        placeholder="[ENTER CITY]"
        defaultValue={defaultValue}
        name="cityName"
      />
      <button className="fetch-button">&gt; SEARCH</button>
    </form>
  );
}

export default SearchForm;
