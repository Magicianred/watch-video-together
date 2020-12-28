import {Container,Row,Col} from 'react-bootstrap'

// Styles
import './style.css'

export default function VideoCard(){
    return (
        <a href="javascript:void(0)">
            <div className="m-2 shadow-sm p-3" id="videocard">
                <div className="container-photo">
                            
                </div>
                <div className="container-text p-2 text-left">
                    <p className="h5 limit-text">
                        Başarı, Errrrkek, Tinder, Otobüs
                    </p>
                    <p className="limit-text">
                        Videolardan memnun kaldıysanız kanala abone olabilir, paylaşımlardan haberdar olmak için ise çanı tıklayarak bildirimleri açabilirsiniz.
                    </p>
                </div>
            </div>
            {/* <div className="m-2 shadow-sm p-2" id="videocard">
                <div className="container-photo rounded-pill">
                    
                </div>
            </div> */}
        </a>
    )
}