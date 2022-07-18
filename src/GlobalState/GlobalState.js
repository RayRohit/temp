import { createContext, useState } from "react";

export const AppContext = createContext()

export function GlobalState(props){
    
    const [AI,setAI] = useState(true)
    const [PA,setPA] = useState(false)

    const[Headline,setHeadline] = useState(false);
    const[Tone,setTone] = useState(false);
    const[Emotion,setEmotion] = useState(false);
    const[Plagiarism,setPlagiarism] = useState(false);
    const[Corrections,setCorrections] = useState(false);


    return(
        <AppContext.Provider value={{AI,setAI,PA,setPA,Headline,setHeadline,Tone,setTone,Emotion,setEmotion,Plagiarism,setPlagiarism,Corrections,setCorrections}}>
            {props.children}
        </AppContext.Provider>
    )

}