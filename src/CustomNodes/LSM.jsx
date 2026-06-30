import lsm_img from './img/LSM.png';


function LSMNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='alarm_level'>
                    <img src={lsm_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default LSMNode;