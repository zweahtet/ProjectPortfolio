import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialMedia } from '../../constants/constants';
import { SocialContainer } from '../Footer/FooterStyles';

// style component for header
import { NavLink, SocialIcons,Span } from './HeaderStyles';

export default function Header (props) {
  return (
	<div>
		<header>
			<div>
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div>
							<a class="flex items-center text-white-800 hover:text-indigo-500" href="/">
								<svg class="h-10 w-10 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
								</svg>
								<span className="mx-3 fond-medium">Zwea Htet</span>
							</a>
						</div>
						<div className="flex itesm-center -mx-2">
							<SocialContainer>
								<SocialIcons href={SocialMedia.Github.visit}>
									<AiFillGithub size="3rem"/>
								</SocialIcons>
								<SocialIcons href={SocialMedia.LinkedIn.visit}>
									<AiFillLinkedin size="3rem"/>
								</SocialIcons>
							</SocialContainer>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
  )
}