import barredor_img from './img/barredor.png';


function BarredorNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <img src={barredor_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default BarredorNode;