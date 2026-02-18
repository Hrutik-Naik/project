import './new1.css'
import img1 from '../assets/call.webp'
import img2 from '../assets/celewish.png'


function New1() {


  return (
    <>
     <div className="main">
        <div className="top">
            <div className="t-l">
              <img src={img2} alt="" className='logo'/>
            </div>
            <div className="t-m">Fan <br />Wishes </div>
            <button className="t-r">Promote My <br />Business</button>
        </div>
        <div className="bottom">
            <div className="b-t">
                <div className='b1'><b>Product</b></div>
                  <div className="b2">
                    <input type="checkbox" />Personalised Video msg</div>
                   <div className="b3">
                    <input type="checkbox" />Meet & Greet</div>
                    <div className="b4">
                      <input type="checkbox" />Video Call</div>
                     <div className="b5">
                      <input type="checkbox" />Socil media Pro</div>
            </div>
            <div className='b-b'>
              <div className="b11"><b>Sort By</b></div>
              <div className="b12">
                <input type="radio" />POpular
              </div>
              <div className="b13">
                <input type="radio" />Lowest_Price
              </div>
              <div className="b14">
                <input type="radio" />Highest_Price
              </div>
              <div className='bar'></div>
            </div>

        </div>
        <img src={img1} alt="" className='call' />
     </div>
    </>
  )
}
 
export default New1
