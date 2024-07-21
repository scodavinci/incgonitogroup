import { subtitle, title } from '@/components/primitives';
import { Divider } from '@nextui-org/divider';

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About Incognito Group</h1>
			<h2 className={subtitle()}>Your Partners in Growth and Innovation</h2>
			<p className='text-left pt-6'>
				Incognito Group is a cutting-edge marketing and advertising agency
				dedicated to helping Series A and Series B startups thrive. Founded by
				industry experts, our mission is to deliver transformative marketing
				solutions that drive growth, enhance brand visibility, and increase
				sales.
			</p>
			<Divider className='my-4' />
			<h2 className={(subtitle(), 'font-extrabold pb-4')}>Our Story</h2>
			<p className='text-left'>
				At Incognito Group, our team brings a wealth of experience in scaling
				companies to billion-dollar valuations and achieving successful
				acquisitions. With a proven track record of guiding startups from Series
				A funding through subsequent rounds and leading them to market
				dominance, we possess the strategic expertise needed to turn ambitious
				visions into reality. Our collective commitment to excellence has
				consistently delivered exceptional results for our clients, making us a
				trusted partner for growth-oriented startups.
			</p>
			<Divider className='my-4' />
			<h2 className={(subtitle(), 'font-extrabold pb-4')}>Our Values</h2>
			<p className='text-left pb-1'>
				<span className='font-bold'>Innovation:</span> We embrace creativity and
				forward-thinking strategies.
			</p>
			<p className='text-left pb-1'>
				<span className='font-bold'>Integrity:</span> We build trust through
				transparency and ethical practices.
			</p>
			<p className='text-left pb-1'>
				<span className='font-bold'>Impact:</span> We strive to make a
				meaningful difference in your business growth.
			</p>
			<Divider className='my-4' />
			<h2 className={(subtitle(), 'font-extrabold pb-4')}>Our Team</h2>
			<p className='text-left'>
				Our team consists of marketing mavens, data scientists, creative
				geniuses, and industry experts, all working together to deliver
				exceptional results.
			</p>
			<Divider className='my-4' />
			<h2 className={(subtitle(), 'font-extrabold pb-4')}>Why Choose Us</h2>
			<p className='text-left pb-1'>
				<span className='font-bold'>Proven Track Record:</span> Our strategies
				have driven significant growth for numerous startups.
			</p>
			<p className='text-left pb-1'>
				<span className='font-bold'>Personalized Service:</span> We tailor our
				approach to meet your specific needs and goals.
			</p>
			<p className='text-left pb-1'>
				<span className='font-bold'>Comprehensive Solutions:</span> From
				branding to digital marketing, we cover all aspects of your marketing
				journey.
			</p>
		</div>
	);
}
