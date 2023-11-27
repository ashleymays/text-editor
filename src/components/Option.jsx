function Option({ children, icon }) {
    return (
        <>
            {icon}
            <p className="">{children}</p>
        </>
    )
}

export default Option;