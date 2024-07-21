import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import { Image } from '@nextui-org/image';
import { CardFooter, Card, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';

export default function Home() {
	return (
		<>
			<section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
				<div className='inline-block max-w-lg text-center justify-center pb-10'>
					<h1 className={title()}>Empower Your&nbsp;</h1>
					<h1 className={title({ color: 'violet' })}>Vision,&nbsp;</h1>
					<br />
					<h1 className={title()}> Elevate Your</h1>
					<br />
					<h1 className={title()}>Success</h1>
					<h1 className={subtitle()}>
						Transforming Startups into Market Leaders
					</h1>
				</div>
				{/* <div className='flex gap-3'>
				<Link
					isExternal
					className={buttonStyles({
						color: 'primary',
						radius: 'full',
						variant: 'shadow',
					})}
					href={siteConfig.links.docs}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: 'bordered', radius: 'full' })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div> */}
				{/* <div className='mt-8'>
					<Snippet hideCopyButton hideSymbol variant='bordered'>
						<span>
							Subscribe to our newsletter for free marketing tips{' '}
							<Code color='primary'>incognito</Code>
						</span>
					</Snippet>
				</div> */}
				<div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
					<div className='mr-20 order-2 md:order-1'>
						<p className='text-tiny uppercase font-bold mt-10'>
							Creative Excellence
						</p>
						<h4 className='font-medium text-xl'>
							Our creative team brings your brand to life with compelling
							narratives and engaging visuals that resonate with your target
							audience.
						</h4>
					</div>
					<div className='order-1 md:order-2'>
						<Image
							src='images/tokyo.png'
							alt='Tokyo crowd'
							height={300}
							isBlurred
							width='100%'
							className='w-full object-cover h-[140px]'
						/>
					</div>

					<div className='mr-20'>
						<Image
							src='images/phoneBooth.png'
							alt='Phonebooth crowd'
							height={300}
							isBlurred
							width='100%'
							className='w-full object-cover h-[140px]'
						/>
					</div>
					<div>
						<p className='text-tiny  uppercase font-bold mt-10'>
							At Incognito Group
						</p>
						<h4 className='font-medium text-xl'>
							We specialize in propelling Series A and Series B businesses to
							unprecedented heights. Our innovative marketing strategies are
							designed to drive sales, expand your reach, and solidify your
							market presence.
						</h4>
					</div>
					<div className='mr-20 order-3 md:order-3'>
						<Image
							src='images/muayT.png'
							alt='Phonebooth crowd'
							height={300}
							isBlurred
							width='100%'
							className='w-full  h-[140px]'
						/>
					</div>
					<div className='mr-20 order-3 md:order-3'>
						<p className='text-tiny  uppercase font-bold mt-10'>
							Tailored Strategies for Maximum Impact
						</p>
						<h4 className='font-medium text-xl'>
							We understand that every startup is unique. Our team crafts
							bespoke marketing plans that align with your specific goals and
							industry nuances.
						</h4>
					</div>
				</div>
			</section>
		</>
	);
}
