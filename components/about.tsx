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
					I&apos;m Reese, a driven high school student passionate
					about software development. I started web development 1 year
					ago and have since built 4 solo projects and worked in 8
					group projects. {'  '}
				</span>
				<br />
				<br />
				<span className='italic'>
					My favorite part of programming
				</span>{' '}
				is the problem-solving aspect. I{' '}
				<span className='underline'>love</span> the feeling of finally
				figuring out a solution to a problem. My core stack is{' '}
				<span className='font-medium'>
					React, Next.js, Node.js, and MongoDB.{' '}
				</span>
				Most importantly, I am always willing to dive into something new
				and unfamiliar and get up to speed.
				<br />
				<br />
				One thing that you should know about me is that I am a strong
				believer in VR apps (not games) I think that they&apos;re going
				to go mainstream like how smartphones and the app store were
				years ago; I&apos;m really getting into this development space
				right now.
				{''}
			</p>

			<p>
				<br></br>
				<span className='italic'>In my free time</span>, you&apos;ll
				find me hanging out at hackathons, watching anime, and visiting
				the bubble tea shop by my house. I also enjoy{' '}
				<span className='font-medium'>self improvement</span>. I am
				currently working on my public speaking and storytelling skills.
				I&apos;m always seeking new opportuntities to learn and grow
				both as a developer and a person.
			</p>
		</motion.section>
	);
}
