import React from 'react';

export function ContainerPage({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="4xl:w-[1850px] m-auto">
            {children}
        </div>
    );
}

export function ContainerPatterns({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="w-full 4xl:w-[1850px] m-auto">
            {children}
        </div>
    );
}