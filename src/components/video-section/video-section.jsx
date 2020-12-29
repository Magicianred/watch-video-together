import {Col} from 'react-bootstrap'

// Containers
import BuyMeCoffe from '../../container/buymecoffe/buymecoffe'
import VideoBox from '../../container/videobox/videobox'

// Styles
import './style.css'

export default function VideoSection(){
    return (
        <Col md={6} lg={7} >
            <div className="p-5 mt-3 video-section shadow-lg text-left">
                <VideoBox className="video shadow-sm"/>
                <div className="mt-4">
                    <p className="h3">
                        Başarı, Errrrkek, Tinder, Otobüs
                    </p>
                    <p>
                        Videolardan memnun kaldıysanız kanala abone olabilir, paylaşımlardan haberdar olmak için ise çanı tıklayarak bildirimleri açabilirsiniz
                    </p>
                </div>
                <hr/>
                <BuyMeCoffe/>
            </div>
        </Col>
    )
}