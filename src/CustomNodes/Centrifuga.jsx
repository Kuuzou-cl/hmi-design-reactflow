import { Handle, Position } from '@xyflow/react';
import centrifuga_img from './img/centrifuga.png';


function CentrifugaNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '46%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '53%' }}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='object'>
                    <img src={centrifuga_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '46%' }}
                id="c"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '53%' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default CentrifugaNode;