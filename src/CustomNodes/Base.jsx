import base_img from './img/base.png';


function BaseNode({ data, isConnectable }) {
    return (
        <div className="text-updater-node base-node">
            <div>
                <div className='base_hmi'>
                    <img src={base_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default BaseNode;