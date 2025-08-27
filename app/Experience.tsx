export default function Experience() {
  return (
    <section id="experience"
      className="relative min-h-screen flex flex-col justify-center px-8 max-w-screen-xl mx-auto">
      <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">EXPERIENCE</h2>
      <div className="flex flex-col gap-24">
        <ExperienceEntry
          title="Teaching Assistant"
          subtitle="University of Alberta Department of Computing Science"
          listItems={[
            "Instructed students on C programming, data structures, and memory management in a Unix/Linux environment.",
            "Provided hands-on debugging assistance, helping students apply best practices in software development and troubleshooting.",
          ]}
        />
        <ExperienceEntry
          title="Summer Student Intern"
          subtitle="Utilties Consumer Advocate - Government of Alberta's Ministry of Affordability and Utilities"
          listItems={[
            "Conducted a comprehensive website audit with Google Analytics. Identified usability issues and proposed improvements.",
            "Contributed to research on rural utility networks, supporting data-driven decision-making and stakeholder engagement.",
            "Authored a report summarizing Alberta trade events, contributing to interdepartmental coordination and policy insight.",
          ]}
        />

      </div>
    </section >
  )
}

function ExperienceEntry({ title, subtitle, listItems }: { title: string, subtitle: string, listItems: string[] }) {
  return (
    <div className="">
      <h3 className="font-bold text-3xl">{title}</h3>
      <h4 className="font-semibold">{subtitle}</h4>
      <ul className="list-disc pl-6">
        {listItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}