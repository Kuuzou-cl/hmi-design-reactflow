import vdf_img from './img/vdf.png';


function VDFNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={vdf_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default VDFNode;