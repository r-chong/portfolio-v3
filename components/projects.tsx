import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

export default function Projects() {
	return (
		<section>
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					// key would matter if shuffling or editing the list

					// React.Fragment lets us not make another unnecessary div
					// ...project is a spread operator (passes down everything about the object)
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}

// since projectData is constant...
type ProjectProps = (typeof projectsData)[number];

// if it's changing (not const we could do it like this:)
// type ProjectProps = {
// 	title: string;
// 	description: string;
// 	tags: string[];
// 	imageUrl: string;

// passing down key technically allowed but not recommended
function Project({ title, description, tags, imageUrl }: ProjectProps) {
	return (
		// project card is a section
		<section className='hover:bg-gray-200 group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:mb-8 mb-3 last:mb-0'>
			<div className='px-5 py-4 pb-7 sm:pl-10 group-even:ml-[21rem] even:pl-8 sm:pr-2 sm-pt-10 sm:max-w-[50%] flex flex-col h-full'>
				<h3 className='text-2xl font-semibold'>{title}</h3>
				<p className='mt-2 leading-relaxed text-gray-700'>
					{description}
				</p>

				{/* sticky footer problem: solve by putting flex, flex-col, mt-auto on parent element. margin expands as much as it can */}
				<ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
					{tags.map((tag, index) => (
						<li
							key={index}
							className='bg-black/0.7 px-3 py-1 text-[0.7rem] uppercase tracking-wider bg-gray-700 text-white rounded-full'
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
			{/* local images don't need the height and width!! */}
			{/* next js performs optimizations so may want to specify quality */}
			<Image
				src={imageUrl}
				alt={'project I worked on'}
				quality={95}
				className='absolute top-8 
                -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                group-hover:scale-[1.04]
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2  

                group-even:right-[initial] 
                group-even:-left-40  
                transition
                '
			/>
		</section>
	);
}
