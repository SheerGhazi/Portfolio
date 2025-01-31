import React from 'react'
import BtnSecondary from '../Button/BtnSecondary'
const timelineData = [
  {
    period: "2020 - Present",
    entries: [
      {
        title: "Framer Designer & Developer",
        company: "Brunodee Agency",
      },
      {
        title: "Front-End WordPress Developer",
        company: "Envato Market",
      },
    ],
  },
  {
    period: "2013 - 2019",
    entries: [
      {
        title: "Webflow Developer & Co-Founder",
        company: "Designflow Studio",
      },
      {
        title: "Web Designer",
        company: "Freelance",
      },
      {
        title: "Leader Team of Marketing",
        company: "AHA Marketing Agency",
      },
    ],
  },
  {
    period: "2010 - 2013",
    entries: [
      {
        title: "Bachelor Degree of Information Technology",
        company: "US RMIT University",
      },
    ],
  },
];

const Resume = () => {
  return (
    <div className='pt-16'> 
      <BtnSecondary title='Resume' />
      <h1 className='pt-10 text-4xl tracking-widest leading-snug'>Education & <span className='text-tertiary'>Experience</span></h1>
      <main className="min-h-screen text-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          {timelineData.map((section) => (
            <div
              key={section.period}
              className="mb-16 relative group"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700" />
              
              {/* Period indicator */}
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-[5px]  w-[10px] h-[10px] rounded-full bg-gray-500 transition-all duration-300 group-hover:bg-tertiary group-hover:scale-150" />
                
                {/* Year */}
                <p className="text-gray-400 text-sm mb-6 pl-8">
                  {section.period}
                </p>
              </div>

              {/* Entries */}
              <div className="space-y-8 pl-8">
                {section.entries.map((entry, index) => (
                  <div
                    key={index}
                    className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:translate-x-2"
                  >
                    <h3 className="text-xl font-medium mb-1 text-white">
                      {entry.title}
                    </h3>
                    <p className="text-gray-400">
                      {entry.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </div>
  )
}

export default Resume
