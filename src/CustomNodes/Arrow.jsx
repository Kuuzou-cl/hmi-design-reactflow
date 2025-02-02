import { Handle, Position } from '@xyflow/react';

import arrow_img from './img/Arrow.png';


function ArrowNode({ data,isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '48%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <div className='arrow'>
                <img src={arrow_img} alt='no_img' />
                <div className='label'>{data.label}</div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '48%' }}
                id="b"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default ArrowNode;