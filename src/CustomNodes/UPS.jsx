import ups_img from './img/UPS.png';


function UPSNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={ups_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default UPSNode;