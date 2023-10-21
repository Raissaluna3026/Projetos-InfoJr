import clsx from "clsx"

type boundedProps = {
    as?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
}



export default function Bounded({
    as: Comp = 'section',
    className,
    children,
    ...restProps
}:boundedProps){

    return(
        <Comp className={clsx("px-4 py-10 md:py-14 md:px-l lg:py-16", className)} {...restProps}>
            <div className="mx-auto w-full max-w-6xl border">
                {children}
            </div>
        </Comp>

    )
}