import { memo } from 'react';
import title_img from './img/Title.png';
import { Handle, Position, NodeResizer } from '@xyflow/react';

const TitleNode = ({ data, selected }) => {
    return (
        <>
            <NodeResizer
                color="#ff0071"
                isVisible={selected}
                ResizeControlDirection="horizontal"
                minWidth={250}
            />
            <div className="text-updater-node">
                <div>
                    <div className='title_node'>
                        <img src={title_img} alt='no_img' />
                        <div className='label'>{data.label}</div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default memo(TitleNode);