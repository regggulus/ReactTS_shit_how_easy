import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, SetRatingPropsType} from "./components/Rating/Rating";
import {OnOffButton} from "./components/onOff_button/OnOffButton";
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/unControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/unControlledOnOff/UnControlledOnOff";
import {number} from "prop-types";
import {Select} from "./components/select/Select";


function App() {
    let [accordionCollapsed, setAccordionCollapsed] =
        useState<boolean>(false)
    let [ratingValue, setRatingValue] =
        useState<SetRatingPropsType>(0)
    const [on, setOn] =
        useState(true)
    const [value, setValue] = useState()
    const [items, setItems] = useState(
        [
            {value: 1, title: 'Minsk'},
            {value: 2, title: 'Moscow'},
            {value: 3, title: 'USA'},
        ]
    )
//React.memo
    const AccordionMemo = React.memo(Accordion)

    return (
        <div className={'App-header'}>
            <PageTitle title={'React TS shit how easy'}/>
            <h3 className={'header-h3'}>Controlled components</h3>
            <OnOffButton on={on} onClick={setOn}/>
            <AccordionMemo titleValue={"Menu"}
                           items={[]}
                           onClick={() => {
                           }}
                           collapsed={accordionCollapsed}
                           onChange={() => {
                               setAccordionCollapsed(!accordionCollapsed)
                           }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
           {/* <Select value={'Minsk'} items={[]} onChange={() => {}}/> */}
            <Select value={value} items={items} onChange={(value) => {setValue(value)}}/>
            <h3 className={'header-h3'}>Un controlled components</h3>

            <UnControlledOnOff onChange={() => {
            }}/>
            <UnControlledRating onChange={() => {
            }}/>
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
