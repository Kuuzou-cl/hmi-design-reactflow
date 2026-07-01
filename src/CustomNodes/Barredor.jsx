import { Handle, Position } from '@xyflow/react';
import barredor_img from './img/barredor.png';


function BarredorNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '58%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '52%' }}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='object'>
                    <div>{data.label}</div>
                    <img src={barredor_img} alt='no_img' />
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '58%' }}
                id="c"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '52%' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default BarredorNode;