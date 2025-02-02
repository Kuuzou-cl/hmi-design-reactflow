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

const imageWidth = 1920;
const imageHeight = 1080;

function DownloadButton({ proyectName, exportData }) {
    const { getNodes } = useReactFlow();
    const onClick = () => {
        // Calcular tamaño de la imagen
        // Elemento CSS`.react-flow__viewport`
        const nodesBounds = getNodesBounds(getNodes());

        const viewport = getViewportForBounds(
            nodesBounds,
            nodesBounds.width,
            nodesBounds.height,
            1,
            3,
            0.1
        );

        const htmlElement = document.querySelector('.react-flow__viewport') as HTMLElement;

        const options = {
            backgroundColor: '#F7F9FB',
            width: nodesBounds.width,
            height: nodesBounds.height,
            style: {
                width: imageWidth.toString(),
                height: imageHeight.toString(),
                transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
            },
        };

        if (htmlElement) {
            toPng(htmlElement, options).then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${proyectName}.png`;
                link.href = dataUrl;
                link.click();
            });
            exportData();
        } else {
            console.log('error al generar imagen');
        }
    };

    return (
        <ListItemButton onClick={onClick}>
            <ListItemIcon><ImageIcon /></ListItemIcon>
            <ListItemText primary='Exportar Proyecto' />
        </ListItemButton>
    );
}

export default DownloadButton;