export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
    // allows react to treat as custom component
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
