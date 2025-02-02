import plta_img from './img/PLTA.png';


function PLTANode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={plta_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default PLTANode;