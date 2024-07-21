import { subtitle, title } from '@/components/primitives';

export default function ContactPage() {
	return (
		<div>
			<h1 className={title()}>Get in Touch</h1>
			<h2 className={subtitle()}>We’re Here to Help You Grow</h2>

			<p className='text-left'>
				Whether you’re ready to start your next big marketing campaign or just
				want to learn more about what we do, we’d love to hear from you. Reach
				out to us using the contact details below, or fill out the form and
				we’ll get back to you shortly.
			</p>
		</div>
	);
}
