import lsll_img from './img/LSLL.png';


function LSLLNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='alarm_level'>
                    <img src={lsll_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default LSLLNode;