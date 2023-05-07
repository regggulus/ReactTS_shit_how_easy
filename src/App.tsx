import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, SetRatingPropsType} from "./components/Rating/Rating";
import {OnOffButton} from "./components/onOff_button/OnOffButton";
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/unControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/unControlledOnOff/UnControlledOnOff";
import {number} from "prop-types";


function App() {
    let [accordionCollapsed, setAccordionCollapsed] =
        useState<boolean>(false)
    let [ratingValue, setRatingValue] =
        useState<SetRatingPropsType>(0)
    const [on, setOn] =
        useState(true)
    return (
        <div className={'App-header'}>
            <PageTitle title={'React TS shit how easy'}/>
            <h3 className={'header-h3'} >Controlled components</h3>
            <OnOffButton on={on} onClick={setOn}/>
            <Accordion titleValue={"Menu"}
                       items={[]}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <h3 className={'header-h3'} >Un controlled components</h3>

            <UnControlledOnOff onChange={() => {}}/>
            <UnControlledRating onChange={()=>{}} />
            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledAccordion titleValue={"Users"}/>


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
