import React from 'react';
import {createRoot} from 'react-dom/client';
import {HomePageContent,PortfolioContent,AboutContent,ContactContent,ProjectContent} from './CartolaSite';
function App(){
 const path=decodeURIComponent(window.location.pathname).replace(/\/$/,'') || '/';
 if(path==='/portfolio')return <PortfolioContent/>;
 if(path==='/sobre')return <AboutContent/>;
 if(path==='/contato')return <ContactContent/>;
 if(path.startsWith('/projetos/'))return <ProjectContent slug={path.split('/')[2]}/>;
 return <HomePageContent/>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
