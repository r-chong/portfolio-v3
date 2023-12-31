'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';
import Link from 'next/link';

export default function Intro() {
	return (
		<section className='flex flex-col px-2 items-center mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src='/Reese_C.jpg'
							alt='Image of Reese Chong'
							width={192}
							height={192}
							quality={95}
							priority={true}
							className='w-36 h-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-105'
						></Image>
					</motion.div>
					<motion.span
						className='absolute bottom-0 right-0 text-4xl'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							delay: 0.1,
							stiffness: 125,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			{/* overriding the line height rule*/}
			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className='font-bold'>Hello, I&apos;m Reese.</span>{' '}
				I&apos;m a{' '}
				<span className='font-bold'>full-stack developer</span> with{' '}
				<span className='font-bold'>1 year</span> of experience. I enjoy
				building <span className='italic'>sites & apps</span>. My focus
				is <span className='underline'>React (Next.js)</span>.
			</motion.h1>
			<motion.div
				className='flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 1 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href='mailto:reesechong72@gmail.com'
					className='flex gap-2 px-4 py-2 text-lg font-medium text-white transition-all bg-black rounded-full shadow-md outline-none hover:bg-gray-900 focus:scale-110 hover:scale-110 active:scale-105 cursor:pointer'
				>
					<span className='flex items-center gap-2 group'>
						Copy email address{' '}
						<MdOutlineMail className='transition opacity-70 group group-hover:translate-x-1' />
					</span>
				</Link>

				<a
					className='flex items-center gap-2 py-3 transition bg-white rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 active:scale-105 border-black/10'
					href='/Reese_Chong_Resume.pdf'
					download
				>
					Download CV{' '}
					<HiDownload className='transition opacity-60 group group-hover:translate-y-1' />{' '}
					{''}
				</a>

				<a
					className='flex items-center p-4 text-gray-700 bg-white rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] border-black/10 transition'
					href='https://linkedin.com/in/reesechong/'
					target='_blank'
				>
					<BsLinkedin />
				</a>

				<a
					className='flex items-center p-4 text-[1.3rem] text-gray-700 bg-white rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 border-black/10 transition'
					href='https://github.com/r-chong/'
					target='_blank'
				>
					<BsGithub />
				</a>
			</motion.div>
		</section>
	);
}
