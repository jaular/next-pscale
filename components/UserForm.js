export default function UserForm({
  formData,
  setFormData,
  handleSave,
  isRefreshing,
}) {
  return (
    <>
      <form autoComplete="off" onSubmit={isRefreshing ? null : handleSave}>
        <input
          className="px-4 py-1 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-black-300"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="px-4 py-1 ml-2 text-white bg-orange-600 rounded-lg hover:bg-orange-500"
        >
          {isRefreshing ? "Loading" : "Add user"}
        </button>
      </form>
    </>
  );
}
