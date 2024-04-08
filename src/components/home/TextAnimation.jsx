'use client'
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Unleash Your Love for Athletics.',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Unleash Your Competitive Spirit in Sports.',
                    1000,
                    'Unleash Your Sporting Potential.',
                    1000,
                    'Unleash Your Athletic Drive.',
                    1000,
                    'Unleash Your Sporting Energy.',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '30px', display: 'inline-block', color: '#F472B6' }}
                repeat={Infinity}
            />
        </div>
    );
};

export default TextAnimation;