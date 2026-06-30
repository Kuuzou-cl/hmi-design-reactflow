import gpel_img from './img/gpel.png';


function GPELNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={gpel_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default GPELNode;