import './App.css'
import Logo from './assets/untitled_11.png'
function App() {

  return (
    <>
      <div className='MainBackGround'>
          <div className='AllEllemetFirst'>
          <img src={Logo} alt="" className='Logo'/>
          <div className='AllElements'>
            <div className='AllText'>
              <div className='NameFirm'>
                SalesMentor AI<br/>
                <div className='Slogan'>Lead with AI, Win with the Sale</div><br/>
                <div className='SomeTx'>
                SalesMentor AI is more than a tool—it's your partner in redefining what's possible in sales. Join us on the journey to transforming your sales operations and achieving unprecedented success.
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
        </div>
        <div className='BottomElement'>
          <div className='CurPos'>
            <div className='Whyyounedit'>
              <div className='AllText'>
              <div className='WhyYou'>Why is it useful?</div>
              <div className='DescrWhuYou'>
                Welcome to SalesMentor AI, where cutting-edge artificial intelligence meets expert sales strategy. Our innovative platform
                is designed to empower sales professionals and teams by providing AI-driven insights, real-time guidance,
                and automated assistance to supercharge productivity and effectiveness.
                Train & Develop: Leverage AI-powered coaching tools
                that provide ongoing training and feedback, helping you refine your tactics and strategies continually.
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
                <div className='ImgLogo'>Personalized Learning Paths</div>
                <div className='FrameText'>
                  Adapts to the individual learning pace and
                style of each sales representative, providing personalized feedback and tailored training scenarios to enhance learning outcomes.</div>
                </div>
                <div className='Frame S'>
                  <div className='ImgLogo'>Real-Time Feedback</div>
                  <div className='FrameText'>
                    Gives immediate feedback on sales 
                    pitches and strategies during training sessions, allowing sales reps to quickly adjust and improve their techniques.</div>
                </div>
                <div className='Frame T'>
                <div className='ImgLogo'> Cost-Effective</div>
                <div className='FrameText'>
                Reduces training costs by minimizing the need for extensive human resources and the associated expenses of in-person training sessions.</div>
                </div>
                <div className='Frame FF'>
                <div className='ImgLogo'> 24/7 Availability</div>
                <div className='FrameText'>
                  The bot offers round-the-clock assistance and training,
                  allowing sales teams to learn and improve at their convenience, without the constraints of human trainers' availability.</div>
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
      </div>
      

    </>
  )
}

export default App
