import psh_img from './img/PSH.png';


function PSHNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className={'alarm_level'}>
                    <img src={psh_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default PSHNode;