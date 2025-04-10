import psl_img from './img/PSL.png';


function PSLNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className={'alarm_level'}>
                    <img src={psl_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default PSLNode;