import { Handle, Position } from '@xyflow/react';
import pv_reducido_img from './img/pv_reducido.png';


function PV_reducidoNode({ data,isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'48%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '37%' }}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div>
                    <img src={pv_reducido_img} alt='no_img' />
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'48%' }}
                id="c"
                isConnectable={isConnectable}
            />
             <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '37%' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default PV_reducidoNode;