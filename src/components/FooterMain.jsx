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
                  PENNSYLVANIA  DIALOGUE FORUM <br />
                  2190 Bennett Rd, Philadelphia, PA 19116 <br/>
                  Phone: 215.702.3445 <br />
                  <a  className='container mx-auto text-accent'href="https://receptaylanhan.com">
                    www.pdf.org
                  </a>
                  <br/>
                </i>
              </p>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        {/* <div className="text-white text-sm text-center">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12"></div>

            <div className='flex items-center justify-between mx-auto max-w-[210px] '>
              <ul class="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://peaceislandspa.org/"
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
        </div> */}
      {/* </footer> */}
      </section>
      {/* <div className='flex items-center justify-between mx-auto max-w-[205px]'>
          {social.map((item, index) => {
            return (
              <a href='href="https://peaceislandspa.org/' key={index}>
                <img src={item.icon} alt=''></img>
              </a>
            );
          })}
        </div> */}
    </>
  );
}
export default FooterMain;
