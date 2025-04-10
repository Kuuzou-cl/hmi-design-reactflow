import { Handle, Position } from '@xyflow/react';
import valv_discreta_img from './img/valvula_discreta.png';

function ValvDiscretaNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor:'#000000'}}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='valvula'>
                    <img src={valv_discreta_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
             <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor:'#000000' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default ValvDiscretaNode;