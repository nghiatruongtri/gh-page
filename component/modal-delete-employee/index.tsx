export default function ModalDeleteEmployee() {
  return (
    <dialog
      id="modal-delete-employee"
      className="modal fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex"
    >
      <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
            <h3 className="text-xl font-semibold dark:text-white">
              Delete Employee
            </h3>
            <form method="dialog">
              <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </form>
          </div>

          <div className="p-6 space-y-6"></div>

          <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
            <button className="btn btn-sm btn-warning">Delete</button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
