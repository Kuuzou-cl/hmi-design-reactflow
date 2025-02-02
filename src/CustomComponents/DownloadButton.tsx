import React from 'react';
import {
    useReactFlow,
    getNodesBounds,
    getViewportForBounds,
} from '@xyflow/react';

import {
    ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';

import ImageIcon from '@mui/icons-material/Image';

import { toPng } from 'html-to-image';

function downloadImage(dataUrl) {
    const a = document.createElement('a');

    a.setAttribute('download', 'reactflow.png');
    a.setAttribute('href', dataUrl);
    a.click();
}

const imageWidth = 1920;
const imageHeight = 1080;

function DownloadButton() {
    const { getNodes } = useReactFlow();
    const onClick = () => {
        // Calcular tamaño de la imagen
        // Elemento CSS`.react-flow__viewport`
        const nodesBounds = getNodesBounds(getNodes());
        const viewport = getViewportForBounds(
            nodesBounds,
            imageWidth,
            imageHeight,
            0.5,
            3,
            0.1
        );

        toPng(document.querySelector('.react-flow__viewport'), {
            backgroundColor: '#F7F9FB',
            width: imageWidth,
            height: imageHeight,
            style: {
                width: imageWidth,
                height: imageHeight,
                transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
            },
        }).then(downloadImage);
    };

    return (
        <ListItemButton onClick={onClick}>
            <ListItemIcon><ImageIcon /></ListItemIcon>
            <ListItemText primary='Exportar Imagen' />
        </ListItemButton>
    );
}

export default DownloadButton;