import React from 'react';

type colorSwitcherPropsT = {'client:load': boolean, title: string, tailwindStyle: {title: string}}

export default function ColorSwitcherTitle(props:colorSwitcherPropsT){
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
        const letters: string[] = props.title.split('');
        return letters.map((letter, index)=>{
            const spanKey = letter+letters.at(index+1);
            return <span key={spanKey} ref={(el)=>{lettersRefs.current.push(el);}}>{letter}</span>
        });
    }

    return <h1 className={props.tailwindStyle.title}>{listLetters()}</h1>
}
