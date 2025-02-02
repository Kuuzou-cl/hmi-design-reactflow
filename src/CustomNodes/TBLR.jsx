import tblr_img from './img/TBLR.png';


function TBLRNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={tblr_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default TBLRNode;