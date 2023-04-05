export const ApplicationInfo = (props) => {
  return (
    <div
      className={`${
        props.showModal ? "" : "hidden"
      } text-left overflow-hidden bg-cyan-100 shadow sm:rounded-lg absolute z-10 mx-auto w-4/5`}
    >
     <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">Jayendra Kartheek G</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Experienced as
            </dt>
            <dd className="mt-1 text-sm text-gray-900 max-w-xs break-words">
              Front-End Full stack Engineer/Professional Services Engineer/ Implmentation Engineer
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">kartheekgj@gmail.com</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              A highly skilled and experienced Front-End Engineer with over 11+
              years of experience, I specialize in creating innovative websites
              and applications for high-profile clients with challenging demands
              and visions. I have a deep expertise in JavaScript and various
              frameworks, Node.js, MongoDB, MySQL scripting, and other
              cutting-edge web technologies. Throughout my career, I have
              demonstrated a proven ability to deliver exceptional results by
              leveraging my technical skills, creativity, and problem-solving
              abilities. With a strong dedication to quality and collaboration,
              I am committed to staying up-to-date with emerging technologies to
              ensure that my clients receive the best possible solutions.
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul
                role="list"
                className="divide-y divide-gray-200 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 w-0 flex-1 truncate">
                      Jayendra Kartheek Resume
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="./jayendrakartheek_Sr_Frontend_resume.pdf"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
        <div className="mt-5 sm:mt-6 text-center" onClick={props.handleClick}>
          <button
            type="button"
            className="inline-flex w-fit p-2 justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
