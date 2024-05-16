import './App.css'
import Logo from './assets/untitled_11.png'
function App() {

  return (
    <>
      <div className='MainBackGround'>
        <img src={Logo} alt="" className='Logo'/>
        <div className='AllElements'>
          <div className='AllText'>
            <div className='NameFirm'>
              SalesMentor AI<br/>
              <div className='Slogan'>Slogan</div><br/>
              <div className='SomeTx'>
                SomeTxSomeTxSomeTxSomeTxSomeT<br/>
                xSomeTxSomeTxSomeTxSomeTxSomeTx<br/>
                SomeTx<br/>
              </div>
            </div> 
          </div>
          <button type="button" className="Connect btn btn-outline-light">
            <div className='BtText'>
            Connect with us
            </div></button>
        </div>
        
        <div className='Elips first'></div>
        <div className='Elips second'></div>
        <div className='CurPos'>
          <div className='Whyyounedit'>
            <div className='AllText'>
            <div className='WhyYou'>Why you need it?</div>
            <div className='DescrWhuYou'>
              Some useful infoSome useful infoSome useful infoSome useful infoSome useful info
              Some useful infoSome useful infoSome useful infoSome useful infoSome useful info
            </div>
              </div>
              <div className='Elips third'></div>
              <div className='Elips second fourd'></div>
          </div>
        </div>  
        <div className='OurIndividuality'>
          <div className='AllText'>
            <div className='WhyYou Ss'> Our individuality</div>
            <div className='AllFrames'>
              <div className='Frame'>
              <div className='ImgLogo'>New</div>
              <div className='FrameText'>Some info</div>
              </div>
              <div className='Frame S'>
                <div className='ImgLogo'>New</div>
                <div className='FrameText'>Some info</div>
              </div>
              <div className='Frame T'>
              <div className='ImgLogo'>New</div>
              <div className='FrameText'>Some info</div>
              </div>
            </div>
          </div>
        </div>
        <div className='TryOurProduct'>
          <div className='AllText'>
            <div className='WhyYou'>Try our product</div>
            <button type="button" className="Connect btn btn-outline-light">
            <div className='BtText'>
            Joing to Telegram bot
            </div></button>
          </div> 
        </div>
        <div className='OurTeam'>
        <div className='AllText'>
            <div className='WhyYou Ss'> Our Team</div>
            </div>
             <div className='AllFrameForUs'>
              <div className='FrameForUs'>
                <div className='FrameForUsBottom'>
                 <div className='FrameTextForUS'>Hi it's me </div> 
                </div>
              </div>
              <div className='FrameForUs'>
                <div className='FrameForUsBottom'>
                 <div className='FrameTextForUS'>Hi it's me </div> 
                </div>
              </div>
              <div className='FrameForUs'>
                <div className='FrameForUsBottom'>
                 <div className='FrameTextForUS'>Hi it's me </div> 
                </div>
              </div>
            </div>
          </div>
      </div>
      

    </>
  )
}

export default App
