import {Col} from 'react-bootstrap'

// Styles
import './style.css'

// Containers
import VideoCard from '../../container/videocard/videocard'

export default function Aside(){
    return (
        <Col md={3} lg={4}>
            <div className="aside p-3 shadow-sm mt-5">
                <VideoCard/>
            </div>
        </Col>
    )
}