import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export function SiteFooter() {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{' '}
                    <a
                        href={siteConfig.links.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Surafel
                    </a>
                    . SDK are available on{' '}
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <Link
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                            }),
                            'w-9 px-0'
                        )}
                    >
                        <Icons.twitter className="h-3 w-3 fill-current" />
                        <span className="sr-only">Twitter</span>
                    </div>
                </Link>
            </div>
        </footer>
    );
}
