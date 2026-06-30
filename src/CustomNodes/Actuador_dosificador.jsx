// Actuador_dosificador.jsx OK
import { Handle, Position } from '@xyflow/react';
import actuador_dosificador_img from './img/actuador-dosificador.png';

function ActuadorDosificadorNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'50%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '40%'}}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='object'>
                    <img src={actuador_dosificador_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'50%' }}
                id="c"
                isConnectable={isConnectable}
            />
             <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '40%' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default ActuadorDosificadorNode;