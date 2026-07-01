import { memo } from 'react';
import { NodeResizer } from '@xyflow/react';

const SquareNode = ({ selected }) => {
    return (
        <>
            <NodeResizer
                color="#000000"
                isVisible={selected}
                minWidth={50}
                minHeight={50}
            />
            <div className="text-updater-node square-node-wrapper">
                <div className="square_node" />
            </div>
        </>
    );
};


export default memo(SquareNode);