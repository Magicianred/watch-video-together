import {Col} from 'react-bootstrap'

// Styles
import './style.css'

// Containers
import VideoCard from '../../container/videocard/videocard'

export default function Aside(){
    return (
        <Col md={4} lg={4}>
            <div className="aside p-3 shadow-sm mt-3 text-left">
                <VideoCard/>
            </div>
        </Col>
    )
}