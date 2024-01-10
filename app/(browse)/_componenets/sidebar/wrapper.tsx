interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper = ({children}: WrapperProps) => {
    return (
        <aside>
            {children}
        </aside>
    )
}