import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data';
import Tabs from './Tabs';
import Section from './Section';

export default function Examples() {
    const [selectedToic, setSelectedToic] = useState();

    function handleSelect(selectedButton) {
        setSelectedToic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>;

    if (selectedToic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedToic]?.title}</h3>
                <p>{EXAMPLES[selectedToic]?.description}</p>
                <pre>
                    <code>{EXAMPLES[selectedToic]?.code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title={'Examples'} id={'examples'}>
            <Tabs
            //  buttonsContainer = {Section}
                // ButtonsContainer = "menu"
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedToic === 'components'}
                            onSelect={() => handleSelect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedToic === 'jsx'} onSelect={() => handleSelect('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedToic === 'props'} onSelect={() => handleSelect('props')}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedToic === 'state'} onSelect={() => handleSelect('state')}>
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
