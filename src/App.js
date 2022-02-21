import React,{useState} from 'react';
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';
import Translate from './component/Translate';
import Route from './component/Route';
import Header from './component/Header';

const items = [
    {
        title: 'what is react?',
        content: 'front end javascript framework'
    },
    {
        title: 'why use react',
        content: 'react is a favorite js library'
    },
    {
        title: 'how do you use react',
        content: 'by creating components'
    }
];

const options=[
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },{
        label: 'Blue',
        value: 'blue'
    }
];

const showComponent = (route,component)=>{
    
}

const showAccordion= () =>{
    if (window.location.pathname ==='/') return <Accordion items={items} />
}
const showList= () =>{
    if (window.location.pathname ==='/list')    return <Search />
}
const showDropdown= () =>{
    if (window.location.pathname ==='/dropdown')  return <Dropdown />
}
const showTranslate= () =>{
    if (window.location.pathname ==='/translate') return <Translate />
}

export default()=>{
    const [selected,setSelected] = useState(options[0]);
 //   const [showDropdown, setShowDropdown] = useState(true);

    const [hide,setHide] = useState("hide");

    return (
        <div>
            <Header />
            <Route path="/" >
                <Accordion items={items} />
            </Route>
            <Route path="/list" >
                <Search />
            </Route>
            <Route path="/dropdown" >
                <Dropdown 
                label = "Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate" >
                <Translate />
            </Route>
        </div>
    );
};