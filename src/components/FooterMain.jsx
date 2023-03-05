import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

// import social
import { social } from '../data';
const FooterMain = () => {
  return (
    <>
    <section >
      {/* <footer class="site-foot> */}
        <div className="bg-primary-darker py-[24px] text-white text-sm text-center">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>CONTACT</h6>
              <p className='container mx-auto text-accent'>
                <i className='container mx-auto'>
                  WELCOMING THE STARNGER <br />
                  PO Box 1156 Langhorne, PA 19047 <br />
                  Executive Director <br />
                  Patricia Lorenz <br />
                  Administrative Assistant <br />
                  Kathy Kraeck <br />
                  Phone: 215.702.3445 <br />
                  <a  className='container mx-auto text-accent'href="https://welcomingthestranger.org/">
                    info@welcomingthestranger.org
                  </a>
                  <br/>
                </i>
              </p>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className="text-white text-sm text-center">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12"></div>

            <div className='flex items-center justify-between mx-auto max-w-[210px] '>
              <ul class="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/welcomingthestrangernonprofit"
                  >
                    <i class="fa fa-facebook">
                    <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://www.linkedin.com/in/recep-taylanhan-abc/"
                  >
                    <i class="fa fa-twitter">
                    <FaTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="dribbble"
                    href="https://www.linkedin.com/in/recep-taylanhan-abc/"
                  >
                    <i class="fa fa-dribbble">
                    <FaYoutube />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/recep-taylanhan-abc/"
                  >
                    <i class="fa fa-linkedin"> 
                    <FaLinkedin />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/* </footer> */}
    
      </section>
      <div className='flex items-center justify-between mx-auto max-w-[205px]'>
          {social.map((item, index) => {
            return (
              <a href='https://www.facebook.com/welcomingthestrangernonprofit' key={index}>
                <img src={item.icon}></img>
              </a>
            );
          })}
        </div>
    </>
  );
}
export default FooterMain;
