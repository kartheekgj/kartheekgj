const actions = [
  {
    title: 'BuilderAI',
    href: '#',
    description: ["Working in the growth team helping the team to improve the Site performance by optimizing code.", "Adding the best marketing parts of the website", "With the help of various tools like Hubspot, Intercom on the cloud services adding and customizing workers on Cloudflare.", "Implemented improvements to boost site performance."],
    icon: "https://media.licdn.com/dms/image/C4E0BAQE1xV3rg9NozA/company-logo_200_200/0/1675772792247?e=1687996800&v=beta&t=gWrZrwM42-46yULEoaRodF2yVxrvi5UKyWOOoZNdf-Q",
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    startDate:"SEPT 2022",
    endDate:"Till Date"
  },
  {
    title: 'PayPal',
    href: '#',
    description: ["Merchants and developers will be guided technically in their implementation of PayPal’s payment processing solutions (1st and 3rd party)", "Identify, troubleshoot, and run test scenarios for technical issues with PayPal code, software, hardware, devices, and endpoints, and communicate fixes or workarounds for an issue.", "Generate and review in-depth technical information (Sample code, white papers, FAQs, Snippets) for distribution to PayPal merchants", "Serve as a knowledgeable resource to provide technical business solutions to merchants and developers, and to address PayPal product questions with our Sales departments", "Understanding each platform in technical aspects and be ready to develop merchant integration strategies on platforms for optimal efficiency to business KPI when a new partnership with PayPal is introduced", "Provide merchants guidance to navigate through best practices and optimal integration solutions with PayPal products on each e-commerce platform"],
    icon: "https://media.licdn.com/dms/image/C560BAQEEvjF9SDmDfg/company-logo_200_200/0/1657843479528?e=1687996800&v=beta&t=i1oUHX9YJoD4QddVMu35RkzvU3db_CCXNL2MUlX5060",
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    startDate:"OCT 2021",
    endDate:"AUG 2022"
  },
  {
    title: 'Genesys',
    href: '#',
    description: ["Build and prototype software solutions around Customer Engagement and Support technologies (chatbots, live chat windows, Support Centers)", "Integrating chatbot with 3rd party API like Servicenow, SAMANAGE, Other custom REST API's", "Connecting with a mix of business and technical audiences leading business requirement discussions, technical white boarding exercises, and coding sessions", "Implementing live dashboards as per requirements using NodeJS and Custom API triggers", "Assist customers with online engagement implementations including architecture, configuration, branding/design, testing, training and optimization", "Working with AWS cloud service to render the bot data and show the live data to the use"],
    icon: "https://media.licdn.com/dms/image/C560BAQEva32oS7nPlg/company-logo_200_200/0/1657029585556?e=1687996800&v=beta&t=tnRrDH35UsAco_E3HX5YB9ltzf7zVwsIDsj2BAwyY-g",
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    startDate:"AUG 2019",
    endDate:"OCT 2021"
  },
  {
    title: 'SAP Labs India',
    href: '#',
    description: ["Extending the application in the frontend using SAPUI5 modules based on the requirement", "Writing ABAP Unit Test Cases and OPA5 test cases to ensure code is proper", "Developed product and technology roadmap and strategy from concept to launch.", "Understanding the business use case on which the areas like procurement and Idea works", "Mentored Junior development professionals to improve coding standards.", "Initiated a developer community (OPEN FX) to encourage the open-source culture and encouraging the people to deliver a speech on various open-source topics by shortlisting amongst various received topics."],
    icon: "https://media.licdn.com/dms/image/C560BAQF3XbLusotM_Q/company-logo_200_200/0/1656696387744?e=1687996800&v=beta&t=47Qx8tyOf2e-0_gI4n_qaOh44zhpfORSewnogV4fcJE",
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    startDate:"MAY 2016",
    endDate:"AUG 2019"
  },
  {
    title: 'Cognizant Technology Solutions',
    href: '#',
    description: ["Development of Application for a client Deutsche Borse Group which is an intranet website used for the employees internally and need to be customizable for I18N", "Using the latest Fiori standards and OPENUI5", "I18N since the same template site is used in many other countries and should be easily configure the custom language labels", "Creating custom directives, creating services and other component skeletons to make the code reusable while developing", "Development of the website and code as per the standards of BMW o Customizing the code to use the i18N to reuse the templates instead of creating new ones for the other regions.", "Built layouts according to customer parameters using HTML5 and CSS3."],
    icon: "https://media.licdn.com/dms/image/C560BAQHRO9T5YA3ouQ/company-logo_200_200/0/1657037248681?e=1687996800&v=beta&t=vC3BjUNHMlTD5Nud87A63NLOJfE2aHo2Bsmvxsw5Fmk",
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    startDate:"AUG 2014",
    endDate:"MAY 2016"
  },
  {
    title: 'BookMyShow',
    href: '#',
    description: ["Making sure that data is correct and displayed properly and the website is loaded as soon as possible", "Managing and deploying the website in Live Environment", "Identified, debugged and fixed system bottlenecks and problems.", "Worked on ICC T20 World Cup 2014 (http://bd.bookmyshow.com)", "Assessed project scope to identify necessary requirements."],
    icon: "https://media.licdn.com/dms/image/C510BAQH1cPgGIcQVAg/company-logo_200_200/0/1547452151244?e=1687996800&v=beta&t=CoFlrNXq9M4bKCA572hPMoYz40pPJ_ZUrrxKZm2I_jo",
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    startDate:"JUNE 2012",
    endDate:"MARCH 2014"
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const CompaniesList = (props) => {
  const lineClamp = {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const handleCardClick = (data) =>{
    props.handData(data);
  }

  return (
    <div>
      <p className="text-2xl antialiased">Experience</p>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-cyan-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-4 p-2">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            onClick={()=>handleCardClick(action)}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconForeground,
                  action.iconBackground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
              >
                <img src={action.icon} className="h-8 w-8" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" />
                  {action.title}
                </a>
              </h3>
              <div className="mt-2 text-sm text-gray-500 text-justify ">
                <ol style={lineClamp}>
                  {action.description.map((elem,idx) => { return <li key={idx}>{idx+1}. {elem}</li> })}
                </ol>
              </div>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

