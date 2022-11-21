import React from 'react';
import './OnOffButton.css'


type OnOffButtonType = {
    click: boolean
}

export function OnOffButton(props: OnOffButtonType) {
   /* return (
        <div className={'onOff'}>
            <OnButton />
            <Circle/>
            {!props.click}
        </div>
    )*/
      if (props.click === true) {
          return (
              <div style={{borderColor: 'greenyellow'}} className={'onOff'}>
                  <div style={{background: 'greenyellow'}} className={'on'}>{props.click}On</div>
                  <div style={{background: 'white'}} className={'on'}>{props.click}Off</div>

              </div>
              )

      } else {
          return (
              <div style={{borderColor: 'coral'}} className={'onOff'}>
                  <div style={{background: 'white'}} className={'on'}>{props.click}On</div>
                  <div style={{background: 'coral'}} className={'on'}>{props.click}Off</div>
                  <div style={{background: 'coral'}} className={'circle'}></div>
              </div>

              )


      }


};
