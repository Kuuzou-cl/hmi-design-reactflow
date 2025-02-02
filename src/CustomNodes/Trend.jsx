import trend_img from './img/Trend.png';


function TrendNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={trend_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default TrendNode;