import pm_img from './img/PM.png';


function PMNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={pm_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default PMNode;