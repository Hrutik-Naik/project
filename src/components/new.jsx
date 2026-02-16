import './new.css'
import img1 from '../assets/Salim.jpg'
import img2 from '../assets/Sulaiman.jpg'
import img3 from '../assets/DJ.jpg'
import img4 from '../assets/Rahul.jpg'
import img5 from '../assets/search.png'
import img6 from '../assets/greater.jpg'
function New() {
  return (
    <>
      <div className="main">
        <div className="top">
            <div className="t-1"><p>Brand Enquiry</p></div>
            <div className="t-2"><p>Our Brand Endorsements</p></div>
            <div className="t-3"><button>Our Services^</button></div>
            <div className="t-4"><p>Blogs</p></div>
            <div className="t-5"><p>Track Order</p></div>
            <div className="t-6">
              <button className='tt1'>Enter Celebrety Name 
                <img src={img5} alt="" 
                className='search-img' />
              </button>
            </div>
            <div className="t-7"><p>Enroll As Celebrety</p></div>
            <div className="t-8"><p>Sign up</p></div>
            <div className="t-9">/Login</div>
           
        </div>
        <div className="middle">
          <div className="left"><h3>ALL</h3></div>
          <div className="right">
            <div className="r-1">Home</div>
            <div className="r-2">
              <img src={img6} alt="" className='greater' />
            </div>
            <div className="r-3">Celebreties</div>
          </div>
        </div>
        <div className="bottom">
          <button className='b1'>ALL</button>
          <button className='b1'>Author</button>
           <button className='b1'>Movie Star</button>
          <button className='b1'>TV Star</button>
           <button className='b1'>Music World</button>
           <button className='b1'>Influencer</button>
          <button className='b2'>More</button>
        </div>
        <div className="footer">
          <div className='foot1'>
            <div className="g1">$14999</div>
            <div className="ff1">
              <img src={img1} alt="" className='salim' />
            </div>
          <div className="f1"><h4>Salim Marchant</h4><p>Music world</p></div>
          </div>
          <div className="foot2">
             <div className="g2">$12900</div>
            <div className="ff2">
              <img src={img2} alt="" className='sulaiman' />
            </div>
          <div className="f2"><h4>Sulaiman Merchant</h4><p>Music World</p></div>
          </div>
          <div className="foot3">
               <div className="g3">$49900</div>
            <div className="ff3">
              <img src={img3} alt="" className='DJ' />
            </div>
          <div className="f3"><h4>DJ Aqeel</h4><p>Music World</p></div>
       
          </div>
          <div className="foot4">
            <div className="g4">$449</div>
            <div className="ff4">
              <img src={img4} alt="" className='rahul' />
            </div>
          <div className="f4"><h4>Rahul Baweja</h4><p>Music World</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default New
