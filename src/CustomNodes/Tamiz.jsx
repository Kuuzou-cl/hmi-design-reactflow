import tamiz_img from './img/tamiz.png';


function TamizNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <img src={tamiz_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default TamizNode;