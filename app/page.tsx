import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Projects from '@/components/projects';

export default function Home() {
	return (
		<main className='z-10 flex flex-col items-center'>
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
		</main>
	);
}
