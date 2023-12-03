import './globals.css';
import Header from '@/components/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Reese Chong | Portfolio',
	description: 'Reese Chong is a software engineer based in Toronto.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className}
      bg-stone-50 relative h-[5000px] text-gray-950 pt-28 sm:pt-36`}
			>
				<div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
				{/* dark:bg-[#946263] */}
				<div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>
				{/* dark:bg-[#676394] */}
				<Header />
				{children}
			</body>
		</html>
	);
}
