import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/public" className="flex items-center space-x-2">
            <div
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-lg">WK</span>
            </div>
            <span className="font-bold text-xl text-text-primary hidden sm:block">Wistant Kode</span>
        </Link>
    );
};

export default Logo;