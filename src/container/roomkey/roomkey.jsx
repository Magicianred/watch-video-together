import {
    Nav,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap'

export default function RoomKey(props){

    function copyToClipBoard(e){
        var key = document.querySelector("#key").innerHTML
        console.log(key)        
    }

    return (
        <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Send this link to your friend !
                (One click is enough 💋💋)</Tooltip>}
            >
                {({ ref, ...triggerHandler }) => (
                <Nav.Link
                    onClick={copyToClipBoard}
                    variant="light"
                    {...triggerHandler}
                    ref={ref}
                    className="d-inline-flex align-items-center"
                >
                    <span className="ml-1">Room key:  <a id="key">{props.ticket}</a></span>
                </Nav.Link>
                )}
        </OverlayTrigger>
    )
}