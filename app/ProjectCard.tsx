// components/ProjectCard.tsx
import { IconType } from 'react-icons';
import { FaGithub} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';


type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  extraLinks?: { url: string; label: string }[];
  techIcons?: IconType[];
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  extraLinks = [],
  techIcons = []
}: ProjectCardProps) {
  return (
    <li>
      <div className="flex min-h-screen gap-6 items-start">
        {/* Text Section */}
        <div className="flex flex-col">
            <div className="text-2xl font-semibold mt-6">{title}</div>
            <p className="mt-4 text-gray-700 max-w-[50vw]">{description}</p>

            <div className="flex gap-6 items-start">
                {/* GitHub link */}
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-white bg-black text-sm mt-2 inline-flex items-center gap-2 px-4 py-2 border rounded-md"
                >
                    <FaGithub className="w-4 h-4" /> GitHub
                </a>

                {/* Optional Extra Links */}
                {extraLinks.length > 0 && (
                    <div className="mt-2 space-y-1 text-lg">
                    {extraLinks.map((link, index) => (
                        <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm inline-flex items-center gap-2 px-4 py-2 border rounded-md text-blue-600 hover:underline hover:bg-blue-50 transition"
                        >
                        {link.label}
                        <FiExternalLink className="inline-block" />
                        </a>
                    ))}
                </div>
            )}
            </div>
            {/* Skills section */}
            <div className="mt-6 text-4xl flex gap-3">
                {techIcons.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden">
        <img
          src={imageUrl}
          alt="Project preview"
        />
        </div>
      </div>
    </li>
  );
}




{/* <li>
          <div className="flex">
            <div>
              <div className="text-2xl mt-12">
                Student Learning Companion Tool
              </div>
              <p className="mt-4"> 
              This project is a chatbot web application to be used by students of the Faculty of Medicine and Dentistry at the University of Alberta. It allows 
              </p>
            </div>
            <img
              src="https://picsum.photos/512"
              alt="Project preview"
              className="w-128 h-128 object-cover"
            />
            </div>
          
            <a href="https://github.com/UAlberta-CMPUT401/w24project-fomd_chat" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl">
            <FaGithub />
            </a>
          </li> */}