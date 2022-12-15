import React from 'react';

type colorSwitcherPropsT = {title: string, tailwindStyle: string}

export default function ColorSwitcherTitle(props){
    const indexRef = React.useRef(0);
    const lettersRefs = React.useRef([]);

    React.useEffect(()=>{
        const intervalID = setInterval(() => {
            if(indexRef.current == lettersRefs.current.length){
                indexRef.current = 0;
                return;
            }

            lettersRefs.current[indexRef.current].classList.toggle('text-primary');

            indexRef.current++;

        }, 100);

    }, []);

    const listLetters = ()=>{
        const letters = props.title.split('');
        return letters.map((letter, index)=>{
            const spanKey = letter+letters.at(index+1);
            return <span key={spanKey} ref={(el)=>{lettersRefs.current.push(el);}} className={props.tailwindStyle}>{letter}</span>
        });
    }

    return <h1 className='text-[2.5rem] mb-[1rem]'>{listLetters()}</h1>
}