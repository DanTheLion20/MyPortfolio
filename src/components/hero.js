import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faBootstrap, faSquareJs,faReact,faGithub,faNode,faTelegram} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';



function MyHero() {
  return (
  
    <>
    <div class="main"></div>
      <div className="container mp">
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
      
      <div className="container mp">
        <h1 className="title">Skills and Experience</h1>
          <p className="px-5 mx-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
            <div className="row">
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faCss3Alt} />
              </div>
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faBootstrap} />
              </div>
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faSquareJs} />
              </div>
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faReact} />
              </div>
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faNode} />
              </div>
              <div className="col-3 icons">
              <FontAwesomeIcon icon={faTelegram} />
              </div>
            </div>
      </div>


      <div className="container mp">
        <div className="row">
            <div className="col-12">
                <h1 className="title">Portfolio and Previous Projects</h1>
              <p>I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please contact me!</p>
              <div className="Btns"><Link to="/Skills">Click me!</Link></div>
            </div>
            
        </div>
      </div>
      
    
    </>


  );
}

export default MyHero;