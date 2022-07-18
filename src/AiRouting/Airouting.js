import { useContext } from 'react'
import nodata from '../nodata.webp'
import Correction from '../Components/Correction'
import Emotion from '../Components/Emotion'
import { Headline } from '../Components/Headline'
import Tone from '../Components/Tone'
import { AppContext } from '../GlobalState/GlobalState'


export function AiRouting(){
    const gstate = useContext(AppContext)
    function Components(){
        if(gstate.AI){
            if(gstate.Headline) return(<Headline/>)
            else if(gstate.Corrections) return(<Correction/>)
            else if(gstate.Emotion) return(<Emotion />)
            else if(gstate.Tone) return(<Tone />)
            else return(<img src={nodata} alt='noda' style={{marginTop:"70px"}} width="70%" />)
        }
    }
    return(
        <>
       {
        Components()
       }
        </>
    )
}