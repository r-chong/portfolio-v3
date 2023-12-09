'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<motion.section
			// ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>About me</SectionHeading>
			<p>
				<span>
					I&apos; a driven high school student who started web
					development 1 year ago. What you should know about me is
					that I&apos;m an average programmer. What I bring to the
					tables is my drive to learn and my work ethic, but also my
					communication skills, something that I&apos;ve spoken to
					many recruiters about as a pain point when finding
					candidates.
				</span>
				<span className='italic'>My favorite part of programming</span>{' '}
				is the problem-solving aspect. I{' '}
				<span className='underline'>love</span> the feeling of finally
				figuring out a solution to a problem. My core stack is{' '}
				<span className='font-medium'>
					React, Next.js, Node.js, and MongoDB
				</span>
				. I am also familiar with TypeScript and Prisma. I am always
				looking to learn new technologies. I am currently looking for a{' '}
				<span className='font-medium'>full-time position</span> as a
				software developer.
			</p>

			<p>
				<span className='italic'>When I&apos;m not coding</span>, I
				enjoy playing video games, watching movies, and playing with my
				dog. I also enjoy{' '}
				<span className='font-medium'>learning new things</span>. I am
				currently learning about{' '}
				<span className='font-medium'>history and philosophy</span>.
				I&apos;m also learning how to play the guitar.
			</p>
		</motion.section>
	);
}
