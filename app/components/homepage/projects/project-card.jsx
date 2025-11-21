// // @flow strict

// import * as React from 'react';

// function ProjectCard({ project }) {

//   return (
//     <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
//       <div className="flex flex-row">
//         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//         <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//       </div>
//       <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
//         <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
//         </div>
//         <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
//           {project.name}
//         </p>
//       </div>
//       <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//         <code className="font-mono text-xs md:text-sm lg:text-base">
//           <div className="blink">
//             <span className="mr-2 text-pink-500">const</span>
//             <span className="mr-2 text-white">project</span>
//             <span className="mr-2 text-pink-500">=</span>
//             <span className="text-gray-400">{'{'}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//             <span className="text-gray-400">{`'`}</span>
//             <span className="text-amber-300">{project.name}</span>
//             <span className="text-gray-400">{`',`}</span>
//           </div>

//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className=" text-white">tools:</span>
//             <span className="text-gray-400">{` ['`}</span>
//             {
//               project.tools.map((tag, i) => (
//                 <React.Fragment key={i}>
//                   <span className="text-amber-300">{tag}</span>
//                   {
//                     project.tools?.length - 1 !== i &&
//                     <span className="text-gray-400">{`', '`}</span>
//                   }
//                 </React.Fragment>
//               ))
//             }
//             <span className="text-gray-400">{"],"}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
//             <span className="text-orange-400">{project.role}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className="text-white">Description:</span>
//             <span className="text-cyan-400">{' ' + project.description}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div><span className="text-gray-400">{`};`}</span></div>
//         </code>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
// @flow strict
import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-[#0b1120] rounded-2xl shadow-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl transition duration-300 w-full">
      
      {/* Image section */}
      {project.image && (
        <div className="h-52 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top rounded-t-xl"
          />
        </div>
      )}

      {/* Content section */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title + role */}
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {project.name}
        </h3>
        {project.role && (
          <p className="text-xs md:text-sm uppercase tracking-wide text-emerald-400 mt-1">
            {project.role}
          </p>
        )}

        {/* Description */}
        <p className="text-sm md:text-base text-slate-300 mt-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tools?.map((tool, i) => (
            <span
              key={i}
              className="bg-slate-800 text-slate-100 text-xs md:text-sm px-3 py-1 rounded-full border border-slate-700"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm md:text-base hover:bg-indigo-700 transition"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm md:text-base hover:bg-purple-700 transition"
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
