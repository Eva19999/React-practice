import React,{useState} from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './style.css'

const Accordion = ({items, hide}) =>{
    const [activeIndex,setActiveIndex] = useState(null);
    const onTitleClick = (index) =>{
        setActiveIndex(index);
    }
    const renderedItems = items.map( (item,index) =>{
        const active = index ===activeIndex? 'active':'';

        return (
            <React.Fragment key={item.title} >
                <div className={`title ${active}`} onClick={()=> onTitleClick(index) }>
                    <i className='dropdown icon>'>
                        {item.title}
                    </i>
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
        
    });
    return (
        <div className={`ui styled accordion ${hide}`} >
             {renderedItems}
        </div>
        );
};

export default Accordion;