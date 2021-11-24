export default function UserForm({
  formData,
  setFormData,
  handleSave,
  isRefreshing,
}) {
  return (
    <>
      <form autoComplete="off" onSubmit={isRefreshing ? null : handleSave}>
        <div className="flex max-w-xs">
          {/* <button
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-green-600 border border-transparent rounded-md text-contrast-lower sm:text-base hover:bg-green-500 focus:outline-none focus:ring-1 focus:ring-contrast-lower"
                >
                  Back
                </button> */}

          <input
            className="w-full px-4 py-1 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-black-300"
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
            className="px-4 py-1 ml-3 text-white bg-orange-600 rounded-lg hover:bg-orange-500"
          >
            {isRefreshing ? "Loading" : "Add"}
          </button>

          {/* <a
                  href={photo.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 ml-3 text-sm font-medium border border-transparent rounded-md text-contrast-lower focus:outline-none focus:ring-1 focus:ring-green-500 bg-contrast-higher sm:text-base hover:bg-contrast-high"
                >
                  Unsplash
                </a> */}
        </div>
      </form>
    </>
  );
}
