import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuContent from './MenuContent.tsx';
import MenuContent_Dibujos from './MenuContent_Dibujos.tsx';

import { useState } from "react";

import FolderIcon from '@mui/icons-material/Folder';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const drawerWidth = 350;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});


export default function SideMenu({ setCookie, proyectName, setProyectName, addNode, deleteNode, changeNameNode, changeLockNode, exportData, importData }) {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [tab, setTab] = useState(0);

    const handleBlur = (index) => {
        setEditingIndex(null);
        setCookie('savedProyectName', proyectName)
    };

    const handleEditClick = (index: number, currentText: string) => {
        setEditingIndex(index);
        setProyectName(currentText);
        setCookie('savedProyectName', proyectName)
      };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                [`& .${drawerClasses.paper}`]: {
                    backgroundColor: 'background.paper',
                },
            }}
        >
            <Stack
                direction="row"
                sx={{
                    p: 2,
                    gap: 1,
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <FolderIcon sx={{ width: 36, height: 36 }} />
                <Box sx={{ mr: 'auto' }}>

                    <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }} onClick={() => handleEditClick(0, proyectName)}>
                        {editingIndex === 0 ? (
                            <>
                                <input
                                    type="text"
                                    value={proyectName}
                                    onChange={(e) => setProyectName(e.target.value)}
                                    onBlur={() => handleBlur(1)}
                                    autoFocus
                                />
                            </>
                        ) : (
                            proyectName
                        )}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Avisos/Errores
                    </Typography>
                </Box>
            </Stack>
            <Divider />
            <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
                <Tab label="Objetos" />
                <Tab label="Dibujos" />
            </Tabs>
            <Divider />
            <Box
                sx={{
                    overflow: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {tab === 0 && (
                    <MenuContent addNode={addNode} deleteNode={deleteNode} changeNameNode={changeNameNode} changeLockNode={changeLockNode} exportData={exportData} importData={importData} />
                )}
                {tab === 1 && (
                    <MenuContent_Dibujos addNode={addNode} deleteNode={deleteNode} changeNameNode={changeNameNode} changeLockNode={changeLockNode} exportData={exportData} importData={importData} />
                )}
            </Box>
        </Drawer>
    );
}
