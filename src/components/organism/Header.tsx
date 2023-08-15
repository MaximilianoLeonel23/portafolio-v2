import Logo from '../molecules/Logo';
import Navbar from '../molecules/Navbar';
import githubLight from '../../assets/icons/github-light.svg';
import linkedinLight from '../../assets/icons/linkedin-light.svg';
import githubDark from '../../assets/icons/github-dark.svg';
import linkedinDark from '../../assets/icons/linkedin-dark.svg';
import { useState } from 'react';
import { useLanguage } from '../../context/language.context';

interface Props {
	theme: string;
	setTheme: (theme: string) => void;
}
const Header: React.FC<Props> = ({ theme, setTheme }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { language } = useLanguage();
	const handleShowMenu = (): void => {
		setShowMenu(!showMenu);
	};

	const changeBtn = (): void => {
		const line1: HTMLElement | null = document.getElementById('line1');
		const line2: HTMLElement | null = document.getElementById('line2');
		const line3: HTMLElement | null = document.getElementById('line3');
		const menu: HTMLElement | null = document.getElementById('menu');

		menu?.classList.toggle('-translate-x-full');
		line1?.classList.toggle('translate-y-2.5');
		line1?.classList.toggle('rotate-45');
		line2?.classList.toggle('opacity-0');
		line3?.classList.toggle('-translate-y-2.5');
		line3?.classList.toggle('-rotate-45');
	};

	return (
		<header className={`fixed left-0 right-0 py-4 z-30 blur-background border-b header-${theme}`}>
			<div className='container flex justify-between items-center'>
				<Logo theme={theme} />
				<Navbar
					theme={theme}
					setTheme={setTheme}
					handleShowMenu={handleShowMenu}
					changeBtn={changeBtn}
				/>
			</div>
			{showMenu && (
				<div className='h-screen'>
					<ul className='container flex flex-col md:hidden py-16 gap-8 text-center'>
						<li>
							<a
								href='#home'
								onClick={() => {
									handleShowMenu();
									changeBtn();
								}}
								className={`text-5xl ${
									theme === 'light' ? 'text-gray-800' : 'text-gray-100'
								} font-bold tracking-wide`}
							>
								{language === 'es' ? <span>Inicio</span> : <span>Home</span>}
							</a>
						</li>
						<li>
							<a
								href='#projects'
								onClick={() => {
									handleShowMenu();
									changeBtn();
								}}
								className={`text-5xl ${
									theme === 'light' ? 'text-gray-800' : 'text-gray-100'
								} font-bold tracking-wide`}
							>
								{language === 'es' ? <span>Proyectos</span> : <span>Projects</span>}
							</a>
						</li>
						<li>
							<a
								href='#about'
								onClick={() => {
									handleShowMenu();
									changeBtn();
								}}
								className={`text-5xl ${
									theme === 'light' ? 'text-gray-800' : 'text-gray-100'
								} font-bold tracking-wide`}
							>
								{language === 'es' ? <span>Sobre mi</span> : <span>About me</span>}
							</a>
						</li>
					</ul>
					<div className='h-px w-full bg-primary-light-500 my-2'></div>
					<div className='container flex flex-col items-center gap-y-4 py-8'>
						<h4 className={`about-title-${theme} font-semibold`}>
							{language === 'es' ? 'Redes sociales' : 'Socials'}
						</h4>
						<ul className='flex items-center gap-x-4'>
							<li>
								<a
									href='https://github.com/MaximilianoLeonel23'
									target='_blank'
									onClick={() => {
										handleShowMenu();
										changeBtn();
									}}
								>
									<div className='h-8 w-8'>
										<img
											src={theme === 'light' ? githubLight : githubDark}
											className={
												theme === 'light'
													? 'hover:brightness-75 transition duration-300'
													: 'hover:brightness-125 transition duration-300'
											}
										/>
									</div>
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/maximiliano-leonel-p%C3%A9rez-8846b826a/'
									target='_blank'
									onClick={() => {
										handleShowMenu();
										changeBtn();
									}}
								>
									<div className='h-8 w-8'>
										<img
											src={theme === 'light' ? linkedinLight : linkedinDark}
											className={
												theme === 'light'
													? 'hover:brightness-75 transition duration-300'
													: 'hover:brightness-125 transition duration-300'
											}
										/>
									</div>
								</a>
							</li>
						</ul>
						<p className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-50'}`}>
							maxoleo.dev@gmail.com
						</p>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
