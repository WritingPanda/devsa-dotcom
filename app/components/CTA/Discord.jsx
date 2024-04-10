import { Link } from '@remix-run/react';
import { Container } from '../Container';
import { FadeIn } from '../FadeIn';

export function DiscordSection() {
   return (
      <>
         <Container className="mt-24 sm:mt-32">
            <FadeIn>
               <div className="relative rounded-3xl bg-transparent">
                  <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                     <img
                        className="h-full w-full object-contain"
                        alt="devSA github logo"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1708100085/discord_yjywpf.png"
                     />
                  </div>
                  <div className="relative mx-auto max-w-7xl py-10 sm:py-32 lg:px-8 lg:py-40">
                     <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2 className="text-base font-semibold leading-7 text-spursPink">
                           Join the DEVSA Discord!
                        </h2>
                        <p className="mt-2 text-balance text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                           Connect with San Antonio's Developer Community
                        </p>
                        <p className="mt-6 text-wrap text-base leading-7 text-neutral-800">
                           From casual chats in the{' '}
                           <strong>social lounge</strong> to focused study
                           sessions with the <strong>coder study group</strong>,
                           you'll find a vibrant community of developers ready
                           to connect, collaborate, and grow together
                        </p>
                        <div className="mt-8">
                           <Link
                              to="https://discord.gg/f3gnmjScW3"
                              className="inline-flex rounded-md bg-neutral-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-950/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                           >
                              Join the conversation
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </Container>
      </>
   );
}
