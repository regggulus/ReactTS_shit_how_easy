import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, SetRatingPropsType} from "./components/Rating/Rating";
import {OnOffButton} from "./components/onOff_button/OnOffButton";
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/unControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/unControlledOnOff/UnControlledOnOff";


function App() {
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<SetRatingPropsType>(0)
    const [on, setOn] = useState(true)
    return (
        <div className={'App-header'}>
            <PageTitle title={'React TS shit how easy'}/>
            <OnOffButton on={on} onClick={setOn}/>
            <UnControlledOnOff on={switchOn} onChange={setSwitchOn}/>{switchOn.toString()}
            <UnControlledRating/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledAccordion titleValue={"Users"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type PageTitleProsType = {
    title: string
}

function PageTitle(props: PageTitleProsType) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}


export default App;
