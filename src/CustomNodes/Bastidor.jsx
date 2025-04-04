import bastidor_img from './img/bastidor.png';


function BastidorNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={bastidor_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default BastidorNode;