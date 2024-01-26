
import Quick from './layout/Quick'
import { C_S_Btn } from "../component/Commomui"
import Arrow from '../svg/Arrow'
import '../sass/main.scss'

function Main() {
    return (
        <div className='poistion-relative'>
            {/* <div className='vh-100 bg-warning'>
                    <C_S_Btn>문의하기</C_S_Btn>
            </div>
            <div className='vh-100 bg-light'></div>
            <div className='vh-100 bg-warning'></div> */}
            {/* <Quick></Quick> */}
          
            <video  id="e662e043-faf8-de8d-e063-deb2e065d0db-video" autoplay loop muted playsinline  data-wf-ignore="true" data-object-fit="cover">
                    <source src="https://assets-global.website-files.com/64e5c2af07963c6e3ddbaf3a/64e5c2b107963c6e3ddbbde6_bg%20video-transcode.mp4" data-wf-ignore="true" />
                    <source src="https://assets-global.website-files.com/64e5c2af07963c6e3ddbaf3a/64e5c2b107963c6e3ddbbde6_bg%20video-transcode.webm" data-wf-ignore="true" />
                    
            </video>
            <div className='banner'>
             <a href=""><img  src="/img/banner01.png" alt="" /></a>
            </div>
            <div className='position-absolute container mx-auto bottom-0 start-0 end-0'>
                <div className='col-12'>
                <div className='maintext col-5'>
                    <p>
                        숙성이고 나발이고<br></br>
                        좋은 고기가 맛있습니다.
                    </p>
                </div>
                <div className='text-box1 d-flex'>               
                        <p>
                        <span>가맹절차안내</span> <br></br>
                            대표가 1:1로 <br></br>
                            직접 상담합니다.
                        </p>
                    <Arrow Arrowcolor="white" fill="transparent"></Arrow>
                </div>
                </div>
               
            </div>
           

         </div>           

    )
}

export default Main
