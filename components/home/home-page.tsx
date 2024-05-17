import {
    PageActions,
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Announcement } from '@/components/announcement';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export function Home() {
    return (
        <div className="flex flex-col h-full">
            <SiteHeader />
            <PageHeader>
                <Announcement />
                <PageHeaderHeading>
                    Simplified Transact Succeeded
                </PageHeaderHeading>
                <PageHeaderDescription>
                    Welcome to Surapay, where seamless payment processing meets
                    unparalleled convenience revolutionizing the way you
                    transact online.
                </PageHeaderDescription>
                <PageActions>
                    <Link href="/docs" className={cn(buttonVariants())}>
                        Get Started
                    </Link>
                </PageActions>
            </PageHeader>
            <div className="flex flex-1" />
            <SiteFooter />
        </div>
    );
}
