import React from "react";

const Link=({className, href, children}) =>{
    const onClick=(event)=>{
        event.preventDefault();
        console.log(event.ctrlKey);
        if(event.metaKey || event.ctrlKey){
            return;
        }
        window.history.pushState({},'',href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

    };
    return (
        <a onClick={onClick} className={className} href={href} >
            {children}
        </a>
    );
};

export default Link;