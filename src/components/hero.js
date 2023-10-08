import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faBootstrap, faSquareJs,faReact,faGithub} from '@fortawesome/free-brands-svg-icons'




function MyHero() {
  return (
  
    <>
    
    <div class="main"></div>
      <div className="container mp mb-5 pb-5">
        <div className="row">
            <div className="col-6">
                <h1><span>Hi</span> <span>I'm</span> <span>Dan</span></h1>
                  <div class="typing1">
                    FrontEnd Developer (Not Yet Lol)
                  </div>
            </div>
            <div className="col-6 ">
           <div id="stage" >
    <div class="spinner">
        <div class="face1"><FontAwesomeIcon icon={faHtml5} /></div>
        <div class="face2"><FontAwesomeIcon icon={faCss3Alt} /></div>
        <div class="face3"><FontAwesomeIcon icon={faBootstrap} /></div>
        <div class="face4"><FontAwesomeIcon icon={faSquareJs} /></div>
        <div class="face5"><FontAwesomeIcon icon={faReact} /></div>
        <div class="face6"><FontAwesomeIcon icon={faGithub} /></div>
    </div>
</div>
            </div>
        </div>
      </div>
    
    
    </>


  );
}

export default MyHero;